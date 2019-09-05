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
  //ingredient1.innerHTML = `<img src=${dubious}><p>${arr1[0].name}</p>`;
  ingredient1.innerHTML = arr1[0].name;
  ingredient2.innerHTML = arr1[1].name;
  ingredient3.innerHTML = arr1[2].name;
  ingredient4.innerHTML = arr1[3].name;
  ingredient5.innerHTML = arr2[0].name;
  ingredient6.innerHTML = arr2[1].name;
  ingredient7.innerHTML = arr2[2].name;
  ingredient8.innerHTML = arr2[3].name;
  // console.log(
  //   arr1[0].name,
  //   arr1[1].name,
  //   arr2[0].name,
  //   arr2[1].name,
  //   arr1[1].data[Math.floor(Math.random() * arr1[1].data.length)],
  //   arr2[1].rate
  // );
}

// rnd = Math.floor(Math.random() * ingredientsA.length);
// rnd2 = Math.floor(Math.random() * ingredientsB.length);
// selectedMeal = ingredientsA[rnd].data + " " + ingredientsB[rnd2].data;

function failure(failedMeals) {
  if (failedMeals >= 5) {
    // Create "GAME OVER" screen that announces Tomorrow's Modern Lunches Co. has been dissolved
  }
}

function success(starredMeals) {
  if (starredMeals == 3) {
    // Create "SUCCESS" screen that announces Tomorrow's Modern Lunches Co. has secured Series A funding
  } else if (starredMeals == 6) {
    // Create "SUCCESS" screen announcing Series B funding
  } else if (starredMeals == 9) {
    // Create "GAME OVER" screen announcing TML has been acquired by Yelp and dissolved
  }
}

function chooseIngredientA(callback) {
  let ingArr1 = document.querySelectorAll("div.left");

  for (let i = 0; i < ingArr1.length; i++) {
    ingArr1[i].addEventListener("click", display);
  }

  function display() {
    $(".robot").addClass("spin");
    this.classList.add("highlight");
    // console.log(this.innerHTML);
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
    // console.log(selectedIngredientA);
    selectionArr.push(selectedIngredientA);
    initiatePrep();
  }
}

let modalButton = document.querySelector("#thing");

function replace() {
  if (modalButton.className.includes("invisible")) {
    modalButton.className = "visible btn btn-primary";
    //modalButton.className.add("visible");
  } else {
    //modalButton.className.add("invisible");
    modalButton.className = "invisible btn btn-primary";
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
    // console.log(this.innerHTML);
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
    // console.log(selectedIngredientB, selectionArr);
    initiatePrep();
  }
}

function initiatePrep() {
  if (selectionArr.length < 2) {
    return;
  }
  if (selectionArr.length == 2) {
    replace();
    // console.log("here");
  }
  // let selectedMeal =
  //   selectedIngredientA.data[
  //     Math.floor(Math.random() * selectedIngredientA.data.length)
  //   ] +
  //   " " +
  //   selectedIngredientB.data[
  //     Math.floor(Math.random() * selectedIngredientB.data.length)
  //   ];
  // let selectedRate = selectedIngredientA.rate + selectedIngredientB.rate;
  makeMeal();
  // console.log(selectedMeal, selectedRate);
}

let starredMeals = 0;
let failedMeals = 0;

function rateHandler(rate) {
  if (rate >= 4) {
    starredMeals++;
  } else if (rate <= 2) {
    failedMeals++;
  } else if (rate == 3) { return }
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
  // console.log(selectedRate );
  mealName.innerHTML = selectedMeal;
  let dubious = document.createElement("img");
  dubious.classList.add("dubious");
  let dubiousUrl = "./resources/dubious.png";
  dubious.src = dubiousUrl;
  let src = document.querySelector("#myModal > div > div > div.meal-image");
  // console.log(dubious)
  src.innerHTML = `<img class="dubious" src=${dubiousUrl} />`;
  // mealRate.innerHTML = selectedRate;
  generateStars(mealRate, selectedRate);
}

// const stars = document.createElement("img");

function generateStars(element, amount) {
  // I need to fix this function. Something is wrong.
  for (i = 0; i < amount; i++) {
    //stars.src = star;
    // stars.classList.add("make-smaller");
    // element.appendChild(stars);
    element.innerHTML += `<img class="make-smaller" src="./resources/biggerstar.png" />`;
  }
}

// function nextRound() {
//   update()
// }

let nextButton = document.getElementById("next");
nextButton.addEventListener("click", update);

window.onload = init;

function init() {
  selectedIngredientA, selectedIngredientB;
  selectionArr = [];
  // stars.innerHTML = '';
  destroyFast("rating");
  $(".ingredient").removeClass("highlight");
  print(ingredientsA, ingredientsB);
  chooseIngredientA(this.initiatePrep);
  chooseIngredientB(this.initiatePrep);
}

function destroyFast(container) {
  let el = document.getElementById(container);
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

function update() {
  console.log(starredMeals, failedMeals);
  $("#myModal").modal("hide");
  // $('body').removeClass('modal-open')
  // $("#myModal").hide().removeClass('show').attr('aria-hidden','true').removeAttr('aria-modal');
  // $(".modal-backdrop").remove();
  replace();
  init();
}
