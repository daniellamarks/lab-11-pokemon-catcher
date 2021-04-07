// import functions and grab DOM elements
import { generateThreeRandomPokemon } from './data-utils.js';
import { capturePokemon, getPokedex, encounterPokemon } from './local-storage-utils.js'
import { findByName, findById } from './utils.js';
import pokeData from './data.js'

// import { capturePokemon } from './local-storage-utils.js';

// initialize state

// set event listeners to update state and DOM

const button = document.querySelector('button')
let pokemonCaught = 0;

function createDom() {
    const threePokemonArray = generateThreeRandomPokemon();
    console.log(threePokemonArray)

    const input1 = document.getElementById('poke1-radio');
    const input2 = document.getElementById('poke2-radio');
    const input3 = document.getElementById('poke3-radio');

    const img1 = document.querySelector('#poke1-img');
    const img2 = document.querySelector('#poke2-img');
    const img3 = document.querySelector('#poke3-img');

    img1.src = threePokemonArray[0].url_image
    img2.src = threePokemonArray[1].url_image
    img3.src = threePokemonArray[2].url_image

    input1.value = threePokemonArray[0].pokemon;
    input2.value = threePokemonArray[1].pokemon;
    input3.value = threePokemonArray[2].pokemon;
    console.log(input3.value)

    const pCaught = document.getElementById('number-caught')
    pCaught.textContent = `You've caught ${pokemonCaught++} pokemon!`

    const pokedex = getPokedex()
    console.log(pokedex);
    const matchingPokemon1 = findById(pokedex, input1.value)
    const matchingPokemon2 = findById(pokedex, input2.value)
    const matchingPokemon3 = findById(pokedex, input3.value)

    console.log(matchingPokemon1, matchingPokemon2, matchingPokemon3)

    const pEncountered1 = document.querySelector('#pokemon1')
    pEncountered1.textContent = `Encountered: ${matchingPokemon1.encountered} Captured: ${matchingPokemon1.captured} `
    const pEncountered2 = document.querySelector('#pokemon2')
    pEncountered2.textContent = `Encountered: ${matchingPokemon2.encountered} Captured: ${matchingPokemon2.captured} `
    const pEncountered3 = document.querySelector('#pokemon3')
    pEncountered3.textContent = `Encountered: ${matchingPokemon3.encountered} Captured: ${matchingPokemon3.captured} `

 }

createDom();

button.addEventListener('click', () => {

   // grab selected pokemon    
    const selected = document.querySelector('input:checked')
    console.log(selected)

    const matchingPokemon = findByName(pokeData, selected.value)
    console.log(matchingPokemon)
    //add selected pokemon to pokedex captured
    capturePokemon(matchingPokemon);
    
    if (pokemonCaught < 10) {// replace with three new pokemon???
    createDom()
    } else {
        window.location = './results/results.html';
    }
})



