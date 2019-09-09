const ingredientsA = [
  {
    id: 1,
    name: `gamer girl bath water`,
    data: [`Rehydrated`, `Salt-Simmered`, `Soggy`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 2,
    name: `non-GMO vegetable spritz`,
    data: [`Vitamin Daydream`, `Post-Herbal`, `Broccoli-Misted`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 3,
    name: `motor oil for people`,
    data: [`Go-Go`, `Sludge`, `General Patton's`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 4,
    name: `yeasted breast milk`,
    data: [`Mama Lunches' Sweet`, `Granular Milk`, `Morning Scramble`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 5,
    name: `granola gummy chews`,
    data: [`Deceptively-Crunchy`, `Prescription`, `Kids Menu`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 6,
    name: `zero-calorie [undefined]`,
    data: [`Empty`, `Ephemeral`, `Nutritionally-Void`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 7,
    name: `greenhouse camel cricket flour`,
    data: [`Singing`, `Midnight`, `Jiminy's Hickory`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 8,
    name: `post-vegan dashi stock`,
    data: [`Briny`, `Oceania's`, `Kawaii Desu`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 9,
    name: `churned cow's blood`,
    data: [`Black Pudding`, `Curdled`, `Hearty`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 10,
    name: `spirulina spread`,
    data: [`Seemingly Healthy`, `Moldy`, `Fly-Repelling`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 11,
    name: `Sans Undertalo Tomato`,
    data: [`Bad Time Marinara`, `Gazpacho-Adjacent`, `Hell-Bound`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 12,
    name: `hair of coconut`,
    data: [`Fortified`, `Fuzzy Wuzzy`, `Fibrous`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 13,
    name: `micro flower mix`,
    data: [`Gardener Debris`, `Petting Zoo`, `Decorative`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 14,
    name: `microfibre kimchee gauze`,
    data: [`Spice-Blanketed`, `Sharply Folded`, `Office-Clearing`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 15,
    name: `"Parmesan" "Cheese"`,
    data: [`"Cheese-Crusted"`, `"Savory"`, `"Melty"`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  },
  {
    id: 16,
    name: `I Can't Believe It's Not Tuna`,
    data: [`Chicken of the Research Lab`, `Very Red`, `100% Mercury-Free`],
    rate: Math.floor(Math.random() * 2 + 0.1)
  }
];

const ingredientsB = [
  {
    id: 17,
    name: `dehydrated protein sand`,
    data: [`Meal Cube`, `Charter School Gruel`, `Growth Serum`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 18,
    name: `freeze-dried raspberry steak`,
    data: [`Appetite Suppressant`, `Fruit Tartare`, `Flat ICEE`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 19,
    name: `iguana marrow`,
    data: [`Roasted Cartilage`, `Road Harvest`, `Jungle Juice`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 20,
    name: `flaxmeal bricks`,
    data: [`Colon Purge`, `Transcendental Breakfast`, `Fauxlenta`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 21,
    name: `farm-raised kangaroo feet`,
    data: [`Willoughby Wings`, `Hop-Corn`, `Lucky's Broil`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 22,
    name: `tempered tempeh`,
    data: [`Hot Glue Gunk`, `Nutrient Slab`, `Crikey Crumble`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 23,
    name: `the most gentle lentil`,
    data: [`Split-Pea Shoots`, `Mash`, `Legume Loaf`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 24,
    name: `astroturf rice`,
    data: [`Stuffed Balls`, `Mystery Poke`, `Major League Risotto`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 25,
    name: `cold-smoked pork throat`,
    data: [`Poorly-Rendered Fat`, `Pig Screams`, `Frozen Oink`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 26,
    name: `Five Guys peanut cheese`,
    data: [`Griddle Pizza`, `Sticky Salad`, `Allergy Trigger Dip`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 27,
    name: `fungal spore cake`,
    data: [`Fungus Fiesta`, `O Horizon Bread Pudding`, `Brains Blast Blitz`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 28,
    name: `chicken-grazed pasture`,
    data: [`Cage-Free Casserole`, `Wet Pulp`, `Mulch Mix`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 29,
    name: `cultured "yeat"`,
    data: [`Balloon Steak`, `Buffalo Shoulder`, `Shrink-Wrap Roll`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 31,
    name: `sourdough ender`,
    data: [`Erratic Bruschetta`, `Tortilla Finale`, `Spite Scones`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 31,
    name: "artisanal Loambucha®",
    data: [`Literal Dirt Cup`, `Mudslide`, `Packed Earth Lasagna`],
    rate: Math.floor(Math.random() * 3 + 1)
  },
  {
    id: 32,
    name: "Belarusian bread beer",
    data: [`Okróshka`, `Booze Stew`, `Gluten Bomb`],
    rate: Math.floor(Math.random() * 3 + 1)
  }
];

let splashText = document.querySelector(".splashtext");
let goOneExplain = document.querySelector(".gameOverOneText");
let goTwoExplain = document.querySelector(".gameOverTwoText");
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
  `Congratulations! After an extensive hiring process, multiple background checks, a drunken bonding moment at the TechCrunch Disrupt after-after-party and three viewings of Y Tu Mamá También, you've been brought on as senior (and only) developer at Tomorrow's Modern Lunches, a new start-up disrupting meal preparation, cooking methods, and the very concept of what counts as "food".`,

  `We're banking on our "machine learning algorithm" to secure funding. We... don't have that. But we do have a robot arm, and we have you, and we have dozens of ethically-sourced consumable products, so just... make the robot put the food together until we can get paid for it. Have fun!`
];
let goOneText = [
  `So you failed. It's okay. Happens to the best of us. And you definitely were not that.`,
  `Tomorrow's Modern Lunches is no more, the founders dissolved the company, liquified its assets and flew off to St. Croix.`,
  `Start-ups come and go, and this one probably should stay gone anyway. I'd keep this whole ordeal off your LinkedIn, to be perfectly honest.`
];
let goTwoText = [
  `So listen. Tomorrow's Modern Lunches just got acquired by Yelp for $850m. That's the good news.`,
  `The bad news is, they don't actually care about the robot, or even the meals? And they definitely don't care about you.`,
  `They just want the, uh, algorithms, and what the machine learned or whatever, look, we don't know anything about data, our dads were bankers, we went to Duke and majored in keg stands.`,
  `Anyway, you're not coming with us to the Bay. Yelp is sending some actual programmers over to try to figure out what you did right, cos hell if we know what you were doing at all.`,
  `At least you get to put this on your resume.`
];

let gameOverOneMusic = new Audio("./resources/18. Game Over.mp3");
let gameOverTwoMusic = new Audio("./resources/83_PokeFlute.mp3");
let successTone = new Audio("./resources/success.mp3");
let normalTone = new Audio("./resources/text.mp3");
let goodTone = new Audio("./resources/05_Stage Clear.mp3");
let failTone = new Audio("./resources/57 - Kozue Ishikawa - Revelation.mp3");
let mealThreeTone = new Audio("./resources/51_Level Up Fanfare.mp3");
let mealTwoTone = new Audio('./resources/02_Pipe Dream.mp3');

let ratingJustifications = [
  {
    1: `Turns out one of our investors is deathly allergic to... everything.`,
    2: `We all have bad days. Today was yours. So was yesterday.`,
    3: `Honestly making this almost serviceable is an accomplishment.`,
    4: `I'd happily pay $15 a month for a drone to bomb me with this meal.`,
    5: `Does anyone know if a robotic arm can earn a Michelin Star?`
  },
  {
    1: `Everyone disliked that.`,
    2: `Maybe if you blended this with two bottles of Stoli it'd be better?`,
    3: `Practice makes perfect, but the arm might be getting rusty.`,
    4: `You're pretty good... huh.`,
    5: `We're gonna get so rich!!!`
  },
  {
    1: `You're lucky the International Criminal Court doesn't charge Americans.`,
    2: `Does it still count as food poisoning if it's technically not food?`,
    3: `In my worst depressive spiral, I'd probably eat a whole bag of this.`,
    4: `I'd eat a whole bag of this stone-cold sober.`,
    5: `Alchemy isn't really what we're paying you to do, but we're into it.`
  }
]
