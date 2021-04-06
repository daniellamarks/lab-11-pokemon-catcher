import pokeData from './data.js';


export function findById(array, id) {
    for (let item of array) {
        if (item.id === id)
            return item;
    }
}

export function findByName(name) {
    for (let pokeObject of pokeData) {
        if (pokeObject.pokemon === name)
            return pokeObject.pokemon;
    }
}


// export function findById(array, id) {
//     return array.find(item => id === item.id)
// }

// export function findByName(name) {
//     return pokeData.find(poke => name === poke.pokemon);
// }
