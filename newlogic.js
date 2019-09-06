const ingredientsA = [
  {
    id: 1,
    name: "ingredient 1",
    data: ["beginning of", "the start of", "a plate of"],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 2,
    name: "ingredient 2",
    data: ["beginning of", "the start of", "a plate of"],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 3,
    name: "ingredient 3",
    data: ["beginning of", "the start of", "a plate of"],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 4,
    name: "ingredient 4",
    data: ["beginning of", "the start of", "a plate of"],
    rate: Math.floor(Math.random() * 2 + 0.1)
  }
];

const ingredientsB = [
  {
    id: 5,
    name: "ingredient 5",
    data: ["a message", "a name", "bad food"],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 6,
    name: "ingredient 6",
    data: ["a message", "a name", "bad food"],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 7,
    name: "ingredient 7",
    data: ["a message", "a name", "bad food"],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 8,
    name: "ingredient 8",
    data: ["a message", "a name", "bad food"],
    rate: Math.floor(Math.random() * 3 + 1)
  }
];

let ingredient1 = document.getElementById("ingredient1");
let ingredient2 = document.getElementById("ingredient2");
let ingredient3 = document.getElementById("ingredient3");
let ingredient4 = document.getElementById("ingredient4");
let ingredient5 = document.getElementById("ingredient5");
let ingredient6 = document.getElementById("ingredient6");
let ingredient7 = document.getElementById("ingredient7");
let ingredient8 = document.getElementById("ingredient8");
let selectedIngredientA, selectedIngredientB;
let selectionArr = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function print(arr1, arr2) {
  shuffleArray(arr1);
  shuffleArray(arr2);
  ingredient1.innerHTML = arr1[0].name;
  ingredient2.innerHTML = arr1[1].name;
  ingredient3.innerHTML = arr1[2].name;
  ingredient4.innerHTML = arr1[3].name;
  ingredient5.innerHTML = arr2[0].name;
  ingredient6.innerHTML = arr2[1].name;
  ingredient7.innerHTML = arr2[2].name;
  ingredient8.innerHTML = arr2[3].name;
}

function chooseIngredientA(callback) {
  let ingArr1 = document.querySelectorAll("div.left");

  for (let i = 0; i < ingArr1.length; i++) {
    ingArr1[i].addEventListener("click", display);
  }

  function display() {
    $(".robot").addClass("spin");
    this.classList.add("highlight");
    if (this.innerHTML == ingredientsA[0].name) {
      selectedIngredientA = ingredientsA[0];
    } else if (this.innerHTML == ingredientsA[1].name) {
      selectedIngredientA = ingredientsA[1];
    } else if (this.innerHTML == ingredientsA[2].name) {
      selectedIngredientA = ingredientsA[2];
    } else if (this.innerHTML == ingredientsA[3].name) {
      selectedIngredientA = ingredientsA[3];
    }
    for (var i = 0; i < ingArr1.length; i++) {
      ingArr1[i].removeEventListener("click", display);
    }
    selectionArr.push(selectedIngredientA);
    initiatePrep();
  }
}

function chooseIngredientB(callback) {
  let ingArr2 = document.querySelectorAll("div.right");

  for (let i = 0; i < ingArr2.length; i++) {
    ingArr2[i].addEventListener("click", display);
  }

  function display() {
    $(".robot").removeClass("spin");
    this.classList.add("highlight");
    if (this.innerHTML == ingredientsB[0].name) {
      selectedIngredientB = ingredientsB[0];
    } else if (this.innerHTML == ingredientsB[1].name) {
      selectedIngredientB = ingredientsB[1];
    } else if (this.innerHTML == ingredientsB[2].name) {
      selectedIngredientB = ingredientsB[2];
    } else if (this.innerHTML == ingredientsB[3].name) {
      selectedIngredientB = ingredientsB[3];
    }
    for (var i = 0; i < ingArr2.length; i++) {
      ingArr2[i].removeEventListener("click", display);
    }
    selectionArr.push(selectedIngredientB);
    initiatePrep();
  }
}

function initiatePrep() {
  if (selectionArr.length < 2) {
    return;
  }
  if (selectionArr.length == 2) {
    replace();
  }
  makeMeal();
}

let starredMeals = 0;
let failedMeals = 0;
let threeStars = 0;
let twoStars = 0;

function rateHandler(rate) {
  if (rate >= 4) {
    starredMeals++;
  } else if (rate == 1) {
    failedMeals++;
  } else if (rate == 3) {
    threeStars++;
    if(threeStars % 2 === 0){
      starredMeals++;
    }
  } else if(rate == 2){
    twoStars++;
    if(twoStars % 5 === 0){
      failedMeals++;
    }
  }
}

function makeMeal() {
  let selectedMeal =
    selectedIngredientA.data[
      Math.floor(Math.random() * selectedIngredientA.data.length)
    ] +
    " " +
    selectedIngredientB.data[
      Math.floor(Math.random() * selectedIngredientB.data.length)
    ];
  let selectedRate = selectedIngredientA.rate + selectedIngredientB.rate;
  rateHandler(selectedRate);
  let mealName = document.querySelector("#exampleModalLongTitle");
  let mealRate = document.getElementById("rating");
  mealName.innerHTML = selectedMeal;
  let dubious = document.createElement("img");
  dubious.classList.add("dubious");
  let dubiousUrl = "./resources/dubious.png";
  dubious.src = dubiousUrl;
  let src = document.querySelector("#myModal > div > div > div.meal-image");
  src.innerHTML = `<img class="dubious" src=${dubiousUrl} />`;
  generateStars(mealRate, selectedRate);
}

function generateStars(element, amount) {
  for (i = 0; i < amount; i++) {
    element.innerHTML += `<img class="make-smaller" src="./resources/biggerstar.png" />`;
  }
}

function failure(count) {
  if (count >= 5) {
    document.querySelector('#gameOverOne').classList.remove('hidden');
  }
}

let modalCount = 0;
function success(count) {
  if (count == 3 && modalCount == 0) {
    $('#goodModalOne').modal('show');
    modalCount++;
    // Create "SUCCESS" screen that announces Tomorrow's Modern Lunches Co. has secured Series A funding
  } else if (count == 6 && modalCount == 1) {
    $('#goodModalTwo').modal('show');
    modalCount++;
    // Create "SUCCESS" screen announcing Series B funding
  } else if (count == 9 && modalCount == 2) {
    // Create "GAME OVER" screen announcing TML has been acquired by Yelp and dissolved
    document.querySelector('#gameOverTwo').classList.remove('hidden');
  }
}

// $('#close-one').addEventListener('click', close);
// function close(){
//   $('#goodModalOne').modal('hide');
// }

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", update);

$('.retry-link').click(function(){
  location.reload();
})

$(".enter_link").click(function() {
  $(this)
    .parent("#splashscreen")
    .fadeOut(500);
});

let text = [`Lorem ipsum typing effect!`, `Some other string of test text`];
let i = 0;
let k = 0;
let current = text[k];
function typeWriter() {
  if (i < current.length) {
    document.querySelector(".splashtext").innerHTML += current[i];
    i++;
    setTimeout(typeWriter, 80);
  } else if (i === current.length) {
    current = text[k + 1];
    i = 0;
    k++;
    document.querySelector(".splashtext").innerHTML += "<br>";
    setTimeout(typeWriter, 80);
  }
  if (k == text.length) {
    document
      .querySelector("#splashscreen > a")
      .setAttribute("style", "display:block");
  }
}

function init() {
  selectedIngredientA, selectedIngredientB;
  selectionArr = [];
  destroyFast("rating");
  $(".ingredient").removeClass("highlight");
  print(ingredientsA, ingredientsB);
  chooseIngredientA(this.initiatePrep);
  chooseIngredientB(this.initiatePrep);
}

function start() {
  typeWriter();
  init();
}

function destroyFast(container) {
  let el = document.getElementById(container);
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

let modalButton = document.querySelector("#thing");

function replace() {
  if (modalButton.className.includes("invisible")) {
    modalButton.className = "visible btn btn-primary";
  } else {
    modalButton.className = "invisible btn btn-primary";
  }
}

function update() {
  console.log(starredMeals, failedMeals, threeStars, twoStars);
  $("#myModal").modal("hide");
  success(starredMeals);
  failure(failedMeals);
  replace();
  init();
}

window.onload = start;
