## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


Pokedex Plan

1. HTML
    - need Radio buttons
        -labels > inputs, imgages.
        -labels all have to be DIFFERENT IDs,
        -input names all have to be the same
        -input types all Radios
        -input images all have to be id'd differently

    - need catch button

2. Copy and paste data.js page with array of pokemon objects

3. We have two changing states: 
    1. The 3 pokemon generated on the DOM
        -encounters start onload
    2. Capturing the pokemon with the button
        -captures start at 0 (let captures = 0)

4. First I need to set up local storage to have a starting state for the page with three random pokemon
    - Create functions 
        1. get 3 pokemon function 
            1. needs pokedata to draw from
            2. needs function to generate encountered pokemon. Encounteredpokemon function needs
                1.  to get pokedex
                    - need findbyid
                2. set pokedex
                    - need findbyid

5. I need to make the capture button take the selected pokemon and 
    1. add the captured selected pokemon to the captured local storage quantity (increment captured)
        1. match the selected with pokedata using name
        2. capture pokemon (store to local storage)
            getpokedex to see what's in local storage, 
            input match to compare to local storage, 
            incrememnt if not in existence, 
            reset local storage, 
    2. generate 3 new pokemon


Stretch: Use an array of arrays (that is, an array of session arrays) in local storage to track and display all-time encounters and captures (over multiple sessions) in addition to single session. Display these according to a design of your choice.
STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results. This will be an array of arrays.