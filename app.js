// import functions and grab DOM elements

import { generateThreeRandomPokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js'
import { findByName } from './utils.js';

// import { capturePokemon } from './local-storage-utils.js';

// initialize state

// set event listeners to update state and DOM

const threePokemonArray = generateThreeRandomPokemon();
console.log(threePokemonArray)

const button = document.querySelector('button')

function createDom() {
    const label1 = document.getElementById('poke1-label');
    const label2 = document.getElementById('poke2-label');
    const label3 = document.getElementById('poke3-label');

    const input1 = document.getElementById('poke1-radio');
    const input2 = document.getElementById('poke2-radio');
    const input3 = document.getElementById('poke3-radio');

    const img1 = document.querySelector('#poke1-img');
    const img2 = document.querySelector('#poke2-img');
    const img3 = document.querySelector('#poke3-img');

    img1.src = threePokemonArray[0].url_image
    img2.src = threePokemonArray[1].url_image
    img3.src = threePokemonArray[2].url_image

    input1.name = threePokemonArray[0].pokemon;
    input2.name = threePokemonArray[1].pokemon;
    input3.name = threePokemonArray[2].pokemon;

    console.log(input1.name, input2.name, input3.name)

}

createDom()

button.addEventListener('click', () => {

   // grab selected pokemon    
    const selected = document.querySelector('input:checked')
    //add selected pokemon to pokedex captured

    console.log(selected)
    //  = capturePokemon(selected.value)

    // replace with three new pokemon


})



