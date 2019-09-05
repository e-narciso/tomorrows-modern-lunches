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
const selectionArr = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//let dubious = 'https://gamepedia.cursecdn.com/zelda_gamepedia_en/6/63/BotW_Dubious_Food_Icon.png?version=a078a61c16e4a5fc2bc8f87f0da68135';

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
  console.log(
    arr1[0].name,
    arr1[1].name,
    arr2[0].name,
    arr2[1].name,
    arr1[1].data[Math.floor(Math.random() * arr1[1].data.length)],
    arr2[1].rate
  );
}

// rnd = Math.floor(Math.random() * ingredientsA.length);
// rnd2 = Math.floor(Math.random() * ingredientsB.length);
// selectedMeal = ingredientsA[rnd].data + " " + ingredientsB[rnd2].data;

const starredMeals = 0;
const failedMeals = 0;

// function rateHandler() {
//   let rate = x; // DOM element determining rating.value
//   if (rate == 5) {
//     selectedMeal.rating = 5;
//     starredMeals++;
//   } else if (rate == 4) {
//     selectedMeal.rating = 4;
//   }
//   if (rate <= 3 && rate > 1) {
//     selectedMeal.rating--;
//   }
//   if (selectedMeal.rating <= 3 || rate == 1) {
//     badMeal = meals.indexOf(selectedMeal);
//     meals.splice(badMeal, 1);
//     failedMeals++;
//   }
// }

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
    this.classList.add("highlight");
    console.log(this.innerHTML);
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
    console.log(selectedIngredientA);
    selectionArr.push(selectedIngredientA);
    initiatePrep();
  }
}

let modalButton = document.querySelector("#thing");

function replace(){
  modalButton.classList.remove('invisible');
  modalButton.classList.add('visible');
}

function chooseIngredientB(callback) {
  let ingArr2 = document.querySelectorAll("div.right");

  for (let i = 0; i < ingArr2.length; i++) {
    ingArr2[i].addEventListener("click", display);
  }

  function display() {
    this.classList.add("highlight");
    console.log(this.innerHTML);
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
    console.log(selectedIngredientB, selectionArr);
    initiatePrep();
  }
}

function initiatePrep() {
  if(selectionArr.length < 2) {return};
  if (selectionArr.length == 2) {
    replace();
    console.log("here");
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

function makeMeal(){
  let selectedMeal =
  selectedIngredientA.data[
    Math.floor(Math.random() * selectedIngredientA.data.length)
  ] +
  " " +
  selectedIngredientB.data[
    Math.floor(Math.random() * selectedIngredientB.data.length)
  ];
  let selectedRate = selectedIngredientA.rate + selectedIngredientB.rate;
  let mealRate = document.querySelector("#myModal > div > div > div.modal-body");
  let mealName = document.querySelector("#exampleModalLongTitle");
  mealName.innerHTML = selectedMeal;
  mealRate.innerHTML = selectedRate;
}

window.onload = function() {
  print(ingredientsA, ingredientsB);
  chooseIngredientA(this.initiatePrep);
  chooseIngredientB(this.initiatePrep);
};
