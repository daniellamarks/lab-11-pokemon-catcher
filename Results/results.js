import { getPokedex } from '../local-storage-utils.js'
import { createTableRow } from './utils-results.js'

const table = document.querySelector('.pokemon-table');
const pokedex = getPokedex()


for (let pokeItem of pokedex) {
    const trOfPokeItem = createTableRow(pokeItem);
    table.append(trOfPokeItem)
}