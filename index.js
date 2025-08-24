/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

   for (let game of games) {
        // 1️ Create a new div element for the game card
        const gameCard = document.createElement("div");

        // 2️ Add the class 'game-card' to this div
        gameCard.classList.add("game-card");

        // 3️ Set inner HTML using template literal
        // We'll display the image, name, and pledged amount
        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Pledged: $${game.pledged.toLocaleString()}</p>
            <p>Backers: ${game.backers.toLocaleString()}</p>
        `;

        // 4️⃣ Append the game card to the container
        gamesContainer.appendChild(gameCard);
    }
}
addGamesToPage(GAMES_JSON);

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// Step 1: Total individual contributions (backers)
const totalContributions = GAMES_JSON.reduce((acc, game) => {
  return acc + game.backers;
}, 0);

// update the contributionsCard
contributionsCard.innerHTML = totalContributions.toLocaleString("en-US");

// use reduce() to count the number of total contributions by summing the backers


// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

// Step 2: Total amount of money pledged
const totalRaised = GAMES_JSON.reduce((acc, game) => {
  return acc + game.pledged;
}, 0);

// update raisedCard
raisedCard.innerHTML = `$${totalRaised.toLocaleString("en-US")}`;

// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
// Step 3: Total number of games
const totalGames = GAMES_JSON.length;

// update gamesCard
gamesCard.innerHTML = totalGames.toLocaleString("en-US");


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    let unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);

    addGamesToPage(unfundedGames);

    console.log("Unfunded:", unfundedGames.length);

    // use filter() to get a list of games that have not yet met their goal


    // use the function we previously created to add the unfunded games to the DOM

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    let fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
    addGamesToPage(fundedGames);
    console.log("Funded:", fundedGames.length);

    // use the function we previously created to add unfunded games to the DOM

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);

    // add all games from the JSON data to the DOM

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
// Step 1: Count unfunded games
const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
const numUnfunded = unfundedGames.length;

// Or alternatively using reduce
// const numUnfunded = GAMES_JSON.reduce((acc, game) => acc + (game.pledged < game.goal ? 1 : 0), 0);

// Step 2: Calculate totals
// const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);
// const totalGames = GAMES_JSON.length;

// Build message with template string + ternary operator
const displayStr = `A total of $${totalRaised.toLocaleString()} has been raised for ${totalGames} game${totalGames === 1 ? "" : "s"}. Currently, ${numUnfunded} game${numUnfunded === 1 ? " remains" : "s remain"} unfunded.`;

// Example: inject this into the DOM
document.getElementById("summary").innerText = displayStr;

// create a string that explains the number of unfunded games using the ternary operator
const unfundedStr = `${numUnfunded === 0 
    ? "All games are funded!" 
    : `There ${numUnfunded === 1 ? "is" : "are"} ${numUnfunded} unfunded game${numUnfunded === 1 ? "" : "s"} remaining.`}`;

// create a new DOM element containing the template string and append it to the description container
const unfundedParagraph = document.createElement("p");
unfundedParagraph.textContent = unfundedStr;
descriptionContainer.appendChild(unfundedParagraph);


/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */


const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);


// use destructuring and the spread operator to grab the first and second games
const [firstGame, secondGame, ...rest] = sortedGames;
// create a new element to hold the name of the top pledge game, then append it to the correct element
const firstGameName = document.createElement("p");
firstGameName.textContent = firstGame.name; 
firstGameContainer.appendChild(firstGameName);
// do the same for the runner up item

const secondGameName = document.createElement("p");
secondGameName.textContent = secondGame.name; 
secondGameContainer.appendChild(secondGameName);

//Search Feature Implementation
const searchInput = document.getElementById("game-search");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredGames = GAMES_JSON.filter(game =>
        game.name.toLowerCase().includes(query)
    );
    deleteChildElements(gamesContainer);
    addGamesToPage(filteredGames);
});


