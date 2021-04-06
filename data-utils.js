import pokeData from './data.js';
import { encounterPokemon } from './local-storage-utils.js';

function getRandomIndex() {
    return Math.floor(Math.random() * pokeData.length);
}

export function generateThreeRandomPokemon() {

    let random1 = getRandomIndex();
    let random2 = getRandomIndex();
    let random3 = getRandomIndex();

    // console.log(random1, random2, random3);
    
    while (random1 === random2 
        || random2 === random3
        || random3 === random1
    ) {
        random1 = getRandomIndex();
        random2 = getRandomIndex();
        random3 = getRandomIndex();
    }

    const pokemon1 = pokeData[random1];
    const pokemon2 = pokeData[random2];
    const pokemon3 = pokeData[random3];

    encounterPokemon(pokemon1);
    encounterPokemon(pokemon2);
    encounterPokemon(pokemon3);

    return [pokemon1, pokemon2, pokemon3]

} 





