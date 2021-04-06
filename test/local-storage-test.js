import { getPokedex, setPokedex, encounterPokemon, capturePokemon } from '../local-storage-utils.js'

const test = QUnit.test;


const stubPokedex = [
    {
        pokemon: 'bulbasaur',
        id: 5,
    },
    {
        pokemon: 'ivysaur',
        id: 2,
    },
    {
        pokemon: 'charmander',
        id: 3,
    },
];


test('setPokedex should put the pokedex into local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = stubPokedex;

    setPokedex(expected);
   
    const actual = JSON.parse(localStorage.getItem('POKEDEX'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expected, actual);
});

test('getPokedex should get the pokedex from local storage and make it an array', (expect) => {

    const stringyPokedex = JSON.stringify(stubPokedex)
    localStorage.setItem('POKEDEX', stringyPokedex)

    const arrayPokedex = getPokedex()

    expect.deepEqual(stubPokedex, arrayPokedex)
});


test('adds pokemon to local storage and increments encounters', (expect) => {

const expected= [
    {
        id: 3,
        encountered: 1,
        captured: 0,
    },
    {
        id: 3,
        encountered: 1,
        captured: 0,
    },
    {
        id: 3,
        encountered: 1,
        captured: 0,
    },
    

]

const actual = encounterPokemon() 

expect.deepEqual(expected, actual)


});


test('addItemToCart should add an item to (cart)local storage', (expect) => {

    const expected = [
        {
            id: 4,
            quantity: 6,
        },
        {
            id: 3,
            quantity: 2
        }
    ];
    
    const arrayTurnedString = JSON.stringify(stubCart);
    localStorage.setItem('ALLTHINGSINCART', arrayTurnedString);

    addItemToCart(4);

    const actual = JSON.parse(localStorage.getItem('ALLTHINGSINCART'));

    expect.deepEqual(expected, actual);
});