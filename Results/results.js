import pokedata from '../data.js'
import { getPokedex, clearGame } from '../local-storage-utils.js'
import { findByName, findById } from '../utils.js'
import { createTableRow } from './utils-results.js'

const pokedex = getPokedex()
console.log(pokedex)
console.log(pokedata)

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

const types = []
const bug = []
const fire = []
const normal = []
const water = []
const grass = []

for (let pokemon of pokedex) {
    const matchingPokemon = findByName(pokedata, pokemon.id)

   types.push(matchingPokemon.type_1)
}

console.log(types)

for (let type of types) {
    if (type === 'bug') {
        bug.push(type)
    } else if (type === 'fire') {
        fire.push(type)
    } else if (type === 'normal') {
        normal.push(type)
    } else if (type === 'water') {
        water.push(type)
    } else if (type === 'grass') {
        grass.push(type)
    }
}

console.log(bug)
console.log(fire)
console.log(normal)
console.log(water)
console.log(grass)


let typeamount = []
typeamount.push(fire.length, bug.length, normal.length, water.length, grass.length)
console.log(typeamount)

let typeType = ['fire', 'bug', 'normal', 'water', 'grass']

let ctx1 = document.getElementById('pieChart').getContext('2d');
let pieChart = new Chart(ctx1, {
    type: 'pie',
    data: {
    labels: 
     typeType,
      datasets: [{
      label: 'Pokemon Types',
      data: typeamount,
      //encountered is an array of numbers
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)', 
        'salmon',
        'goldenrod',
    ],
      hoverOffset: 4
    }]
  }});










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

