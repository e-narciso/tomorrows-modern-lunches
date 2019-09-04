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

function rateHandler() {
  let rate = x; // DOM element determining rating.value
  if (rate == 5) {
    selectedMeal.rating = 5;
    starredMeals++;
  } else if (rate == 4) {
    selectedMeal.rating = 4;
  }
  if (rate <= 3 && rate > 1) {
    selectedMeal.rating--;
  }
  if (selectedMeal.rating <= 3 || rate == 1) {
    badMeal = meals.indexOf(selectedMeal);
    meals.splice(badMeal, 1);
    failedMeals++;
  }
}

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