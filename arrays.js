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

let splashText = document.querySelector(".splashtext");
let goOneExplain = document.querySelector(".gameOverOneText");
let goTwoExplain = document.querySelector('.gameOverTwoText');
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
let starredMeals = 0,
  failedMeals = 0,
  threeStars = 0,
  twoStars = 0;
let welcomeText = [
  `Lorem ipsum typing effect!`,
  `Some other string of test text`
];
let goOneText = [
  `Lorem ipsum typing effect!`,
  `Some other string of test text`
];
let goTwoText = [
    `Lorem ipsum typing effect!`,
    `Some other string of test text`
  ];