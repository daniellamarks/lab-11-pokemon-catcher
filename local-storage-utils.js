import { findById } from './utils.js';


const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const pokedexString = localStorage.getItem(POKEDEX);
    const pokedexParsed = JSON.parse(pokedexString);

    if (pokedexParsed) {
        return pokedexParsed;
    } else return [];
}

//if (!pokedexString) return [];
    // const pokedexParsed = JSON.parse(pokedexString);
    // return parsedPokedex;

export function setPokedex(pokedexArray) {
    const pokedexString = JSON.stringify(pokedexArray);
    localStorage.setItem(POKEDEX, pokedexString);
}


//add pokemon to array in local storage or increments encounters
export function encounterPokemon(pokemonObject) {

    const pokedexArray = getPokedex();

    const matchingPokemon = findById(pokedexArray, pokemonObject.pokemon);

    if (matchingPokemon) {
        matchingPokemon.encountered++;
    } else {
        const newPokemonItem = {
            id: pokemonObject.pokemon,
            captured: 0,
            encountered: 1
        };
        pokedexArray.push(newPokemonItem);
    }

    setPokedex(pokedexArray);
}

export function capturePokemon(pokemonObject) {

    const pokedexArray = getPokedex();

    const matchingPokemon = findById(pokedexArray, pokemonObject.pokemon);

    matchingPokemon.captured++;
    // if (matchingPokemon) {
    //     matchingPokemon.captured++;
    // }

    setPokedex(pokedexArray);

    return pokedexArray;
}