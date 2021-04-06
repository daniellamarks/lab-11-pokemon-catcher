import { getPokedex, clearGame } from '../local-storage-utils.js'
import { createTableRow } from './utils-results.js'

const table = document.querySelector('.pokemon-table');
const pokedex = getPokedex()
const clearButton = document.querySelector('.clear-button')


for (let pokeItem of pokedex) {
    const trOfPokeItem = createTableRow(pokeItem);
    table.append(trOfPokeItem)
}

clearButton.addEventListener('click', () => {
    console.log('button clicked')
    clearGame();
    window.location = '../index.html'
})
