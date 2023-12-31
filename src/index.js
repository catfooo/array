const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  const numberOfPokemons = pokemons.length;
  // document.write(`I have ${numberOfPokemons} pokemons!`);
  const Element = document.getElementById("app");
  Element.innerHTML = `I have ${numberOfPokemons} ppokemons!`;
};

countThem()


const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort();
  const sortedList = document.getElementById("list");
  sortedList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon;
    sortedList.appendChild(listItem);
  });
};

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  const reversedList = document.getElementById("rlist");
  reversedList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon;
    reversedList.appendChild(listItem);
  });
};

flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  const uppercaseList = document.getElementById("ulist");
  uppercaseList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon.toUpperCase();
    uppercaseList.appendChild(listItem);
  });
};

makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  const bPokemons = pokemons.filter((pokemon) => pokemon.startsWith("B"));
  const bList = document.getElementById("blist");
  bList.innerHTML = "";
  bPokemons.forEach((pokemon) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemon;
    bList.appendChild(listItem);
  });
};

onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
};

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
