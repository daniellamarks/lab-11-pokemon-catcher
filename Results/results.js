import { getPokedex, clearGame } from '../local-storage-utils.js'
import { createTableRow } from './utils-results.js'

const pokedex = getPokedex()
console.log(pokedex)

const names = []
const captured = []
const encountered = []

for (let pokemon of pokedex) {
    names.push(pokemon.id)
    captured.push(pokemon.captured)
    encountered.push(pokemon.encountered)
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Pokemon Captured',
            data: captured,
            backgroundColor: "lightblue",
            borderColor: "lightblue",
            borderWidth: 1
        }, 
        {
        
            label: 'Pokemon Encountered',
            data: encountered,
            backgroundColor: "pink",
            borderColor: "salmon",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




const table = document.querySelector('.pokemon-table');
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

