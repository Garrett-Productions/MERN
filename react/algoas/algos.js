const nbaAthletes = [
    {id: 1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id: 2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id: 3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id: 4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id: 5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id: 6, name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

// ? Given the array above use the map method to return a new array of objects with only the name and position of each player


// ? Given the array above use the filter method to return a new array of objects where the player is currently active in the nba


// ? Given the array above use the filter method to return a new array of objects where the player is a point guard


// ? Given the array above write a function that takes in an id for a player to be 'deleted' Use the filter method to return a new array of athlete objects minus the player with the id that matches what was passed in

const mappedAthletes = nbaAthletes.map((player) => player.name)
console.log(mappedAthletes)

// console.log(mappedAthletes);