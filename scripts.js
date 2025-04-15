/*
This is a catalog website of Pokemon Cards called "Mat's Mons". I came up with the title by simply shortening my name to Mat and cut the word Pokemon to just Mon. 

In this website, the user can buy Pokemon cards that I have collected over time. Each card has a title, display of the card, and three properties: 
1. Cost
2. Type
3. Stage

The cost represents the price of the cards, while the type and stage are just there to signify the trait of the cards. 

The user can filter through the Pokemon cards by clicking on the filter buttons for types and stages. If they wish to, they also can sort through the cards by 
ascending/descending costs, types, and stages. 

*/

// Below is a class caled PokeCard. It introduces a constructor that will 
// take the title of the card, the url, cost of the card, type of the 
// card and its stage. I did this simply so it would be easier to organize 
// the data
class PokeCard {
  constructor(title, imageURL, cost, type, stage) {
    this.title = title;
    this.imageURL = imageURL;
    this.cost = cost;
    this.type = type;
    this.stage = stage;
  }
}

// The array "types" is a const array that contains the potential typing of 
// the Pokemon in the cards. There are a total of 11 of them, and each 
// Pokemon has one type. Each type has a number that represents the placement 
// of their order. 
const types = { 
  grass: 1,
  fire: 2,
  water: 3,
  lightning: 4,
  psychic: 5, 
  fighting: 6, 
  darkness: 7, 
  metal: 8, 
  colorless: 9,
  fairy: 10,
  dragon: 11
};

// Similar to the "types" array, this const array of stages represents the potential
// stages each Pokemon has. Pokemon canonically have evolutions, and in the trading 
// card game, you are able to evolve your Pokemon. Each stage in the array is assigned
// with a number to represent the placement of their order. 
const stages = {
  "Basic": 1, 
  "Stage 1": 2, 
  "Stage 2": 3, 
  "ex": 4,
  "EX": 5, 
  "Mega EX": 6
}

// An array of objects that are constructors and contain card properties 
const pokeCards = [
  new PokeCard("Ampharos ex", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_16.png", 2.88, "lightning", "ex"),
  new PokeCard("M Manectric EX", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XYA/XYA_EN_24a.png", 11.36, "lightning", "Mega EX"),
  new PokeCard("Iron Bundle", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_58.png", 4.99, "water", "Basic"),
  new PokeCard("Riolu", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW33.png", 3.39, "fighting", "Basic"),
  new PokeCard("Metagross", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/EX5/EX5_EN_11.png", 11.31, "psychic", "Stage 2"),
  new PokeCard("Jigglypuff", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY1/XY1_EN_88.png", 1.47, "fairy", "Basic"),
  new PokeCard("Lickitung", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV05/SV05_EN_124.png", 0.02, "colorless", "Basic"),
  new PokeCard("Raichu", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_26.png", 1.37,"lightning","Stage 1"), 
  new PokeCard("Ivysaur", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW5/BW5_EN_2.png", 6.79, "grass","Stage 1"),
  new PokeCard("Tangrowth", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM12/SM12_EN_6.png", 1.04, "grass", "Stage 1"),
  new PokeCard("Iron Boulder ex","https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV05/SV05_EN_192.png", 2.49, "fighting", "Basic"),
  new PokeCard("Chimchar", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/DP1/DP1_EN_76.png", 4.12, "fire", "Basic"), 
  new PokeCard("Excadrill", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY5/XY5_EN_97.png", 1.99, "metal", "Stage 1"),
  new PokeCard("Zoroark", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY8/XY8_EN_91.png",1.99, "darkness", "Stage 1"), 
  new PokeCard("Reshiram", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW04.png", 0.39,"fire","Basic"), 
  new PokeCard("Medicham", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH11/SWSH11_EN_100.png", 1.21, "fighting","Stage 1"), 
  new PokeCard("Pidgeotto", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/DP3/DP3_EN_58.png", 2.07, "colorless", "Stage 1"), 
  new PokeCard("Haxorus", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY8/XY8_EN_111.png", 2.13, "dragon", "Stage 2"), 
  new PokeCard("Lunatone", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/EX2/EX2_EN_8.png", 16.00, "psychic", "Basic"), 
  new PokeCard("Seedot", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV05/SV05_EN_3.png", 1.04, "grass", "Basic"), 
  new PokeCard("Clefable", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY3/XY3_EN_71.png", 0.13, "fairy", "Stage 1"), 
  new PokeCard("Carvanha", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SM1/SM1_EN_81.png", 0.99, "darkness", "Basic"), 
  new PokeCard("M Slowbro EX", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY12/XY12_EN_27.png", 7.73, "water", "Mega EX"), 
  new PokeCard("Zacian ex", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV09/SV09_EN_186.png", 84.95, "metal", "ex"), 
  new PokeCard("Bagon", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY6/XY6_EN_55.png", 0.99, "dragon", "Basic"), 
  new PokeCard("Cresselia", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW7/BW7_EN_67.png", 6.39, "psychic", "EX"), 
  new PokeCard("Combusken", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY3/XY3_EN_13.png", 1.54, "fire", "Stage 1"), 
  new PokeCard("Morgrem", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH2/SWSH2_EN_124.png", 1.34, "darkness", "Stage 1"), 
  new PokeCard("Pidove", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BW1/BW1_EN_84.png", 1.99, "colorless", "Basic"), 
  new PokeCard("Druddigon", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/BWP/BWP_EN_BW80.png", 4.18, "dragon", "Basic"), 
  new PokeCard("Togetic", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY6/XY6_EN_44.png", 1.58, "fairy", "Stage 1"), 
  new PokeCard("Aggron EX", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/XY5/XY5_EN_93.png", 3.89, "metal", "EX"), 
  new PokeCard("Volcanion", "https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SWSH45/SWSH45_EN_25.png", 1.25, "water", "Basic"), 
];



// This function displays the cards and their properties
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  //Below are two variables. Both of them get filled by the user's decision 
  //in the filter drop-down menus. One is for type and one is for the stage.
  const selectedType = document.getElementById('typeFilter').value;
  const selectedStage = document.getElementById('stageFilter').value;

  // What this for-loop does is that it makes an iterable called show 
  // which possesses the properties of the variable introduced. So in 
  // this case it has the objects from show in each iterator. 
  for (let pokeCard of pokeCards) {
    //Below in the if-statement is checking to see if the selected property matches with any of the cards properties 
    if ((selectedType === "" || pokeCard.type === selectedType) && (selectedStage === "" || pokeCard.stage === selectedStage)) {
      //if true, then the cards will be displayed based on the properties 
      const nextCard = templateCard.cloneNode(true);
      editCardContent(nextCard, pokeCard.title, pokeCard.imageURL, pokeCard.cost, 
        pokeCard.type, pokeCard.stage);
      cardContainer.appendChild(nextCard);
    }
  }
}

// Initially, I had it where I have two functions for sorting: 
// one for ascending and one for descending. Then, 
// I realized I could just have one sorting function. All I have 
// the user do is when they click on the sorting button once, 
// the order descends. 

let costSorted = true; //this is a bool flag that checks to see if the cards has been sorted

function sortCost() {

  if (costSorted) 
    pokeCards.sort((a, b) => b.cost-a.cost); //ascending
  else 
    pokeCards.sort((a,b) => a.cost - b.cost); //descending

  costSorted = !costSorted; //switches the bool state
  showCards(); 
}



// Similar to costSort, this does the same but with types. 
let typeSorted = true; 

function sortType() {

  if (typeSorted)
    pokeCards.sort((a,b) => types[a.type] - types[b.type]); 
  else 
    pokeCards.sort((a,b) => types[b.type] - types[a.type]); 
  typeSorted = !typeSorted; 
  showCards(); 
}



// Similar to the other sorts, this does the same but with stages. 
let stageSorted = true; 

function sortStage() {

  if (stageSorted)
    pokeCards.sort((a,b) => stages[a.stage] - stages[b.stage]);
  else
    pokeCards.sort((a,b) => stages[b.stage] - stages[a.stage]); 

  stageSorted = !stageSorted;
  showCards();
}


function editCardContent(card, newTitle, newImageURL, cost, type, stage) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

 
  // Here is where I make the bullet point for the card's properties. I 
  // first make the unordered list. Then make the list item. Finally,
  // I add the cost object to the list item to a fixed decimal position.
  // One more thing, I append the item to the bullest list.
  const bulletList = card.querySelector("ul");

  const costListItem = document.createElement("li");
  costListItem.textContent = `Cost: $${cost.toFixed(2)}`;
  const typeListItem = document.createElement("li");
  //underneath is where I grab the string for type and use toUpperCase
  //in order to have the first letter capitalized
  typeListItem.textContent = `Type: ${type.charAt(0).toUpperCase()}${type.slice(1)}`;
  const stageListItem = document.createElement("li"); 
  stageListItem.textContent = `Stage: ${stage}`;  
  

  // Here is where I append the items to the bullet list dynamically
  bulletList.appendChild(costListItem)
  bulletList.appendChild(typeListItem)
  bulletList.appendChild(stageListItem)

  console.log("new card:", newTitle, "- html: ", card);
}


document.addEventListener("DOMContentLoaded", showCards);

// I added two more event listeners in order to get change from the website the moment user 
// does something to any of the filters. When an option is selected, this will 
// update the showCards() function and show which of the cards should be displayed
// based on what the user clicked.
document.getElementById('typeFilter').addEventListener('change', showCards);
document.getElementById('stageFilter').addEventListener('change', showCards);
