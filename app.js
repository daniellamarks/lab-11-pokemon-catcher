// import functions and grab DOM elements
import { generateThreeRandomPokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js'
import { findByName } from './utils.js';
import pokeData from './data.js'

// import { capturePokemon } from './local-storage-utils.js';

// initialize state

// set event listeners to update state and DOM

const button = document.querySelector('button')

function createDom() {
    const threePokemonArray = generateThreeRandomPokemon();
    console.log(threePokemonArray)

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

    label1.append(img1)
    label2.append(img2)
    label3.append(img3)


    input1.value = threePokemonArray[0].pokemon;
    input2.value = threePokemonArray[1].pokemon;
    input3.value = threePokemonArray[2].pokemon;

    console.log(input1.value, input2.value, input3.value)

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
    console.log(capturePokemon(matchingPokemon));
    
    // replace with three new pokemon???
    createDom();

})



