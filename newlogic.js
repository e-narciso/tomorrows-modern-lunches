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

function rateHandler(rate) {
  if (rate >= 4) {
    starredMeals++;
  } else if (rate == 1) {
    failedMeals++;
  } else if (rate == 3) {
    starredMeals += .5;
    // threeStars++;
    // if(threeStars % 2 === 0){
    //   starredMeals++;
    // }
  } else if(rate == 2){
    failedMeals += .2;
    // twoStars++;
    // if(twoStars % 5 === 0){
    //   failedMeals++;
    // }
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
    typingGameOverOne();
    // typingGameOver(goOneText, goOneExplain, thisWordOne);
  }
}

let modalCount = 0;
function success(count) {
  if (count >= 3 && modalCount == 0) {
    $('#goodModalOne').modal('show');
    modalCount++;
  } else if (count >= 6 && modalCount == 1) {
    $('#goodModalTwo').modal('show');
    modalCount++;
  } else if (count >= 9 && modalCount == 2) {
    document.querySelector('#gameOverTwo').classList.remove('hidden');
    typingGameOverTwo();
    // typingGameOver(goTwoText, goTwoExplain, thisWordTwo);
  }
}

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

let i = 0;
let k = 0;
let current = welcomeText[k];
function typeWriter() {
  if (i < current.length) {
    document.querySelector(".splashtext").innerHTML += current[i];
    i++;
    setTimeout(typeWriter, 30);
  } else if (i === current.length) {
    current = welcomeText[k + 1];
    i = 0;
    k++;
    document.querySelector(".splashtext").innerHTML += "<br>";
    setTimeout(typeWriter, 80);
  }
  if (k == welcomeText.length) {
    document
      .querySelector("#splashscreen > a")
      .setAttribute("style", "display:block");
  }
}

let n = 0;
let m = 0;
let thisWordOne = goOneText[m];
let thisWordTwo = goTwoText[m];

function typingGameOverOne(){
  if (n < thisWordOne.length) {
    goOneExplain.innerHTML += thisWordOne[n];
    n++;
    setTimeout(typingGameOverOne, 100);
  } else if (n === thisWordOne.length) {
    thisWordOne = goOneText[m+1];
    n = 0;
    m++;
    goOneExplain.innerHTML += "<br>";
    setTimeout(typingGameOverOne, 200);
  }
  if (m == goOneText.length) {
    document
      .querySelector(".retry-link")
      .classList.remove("hidden");
  }
}

function typingGameOverTwo(){
  if (n < thisWordTwo.length) {
    goTwoExplain.innerHTML += thisWordTwo[n];
    n++;
    setTimeout(typingGameOverTwo, 1000);
  } else if (n === thisWordTwo.length) {
    thisWordTwo = goTwoText[m+1];
    n = 0;
    m++;
    goTwoExplain.innerHTML += "<br>";
    setTimeout(typingGameOverTwo, 1000);
  }
  if (m == goTwoText.length) {
    document
      .querySelector(".retry-link")
      .classList.remove("hidden");
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
  scoreBoard();
  success(starredMeals);
  failure(failedMeals);
  replace();
  init();
}

function scoreBoard(){
  let scores = document.getElementById('scores');
  scores.innerHTML = `
  <p>Successful Dishes: ${starredMeals.toFixed(1)}</p>
  <p>Failed Dishes: ${failedMeals.toFixed(1)}</p>
  `
}

window.onload = start;
