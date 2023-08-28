const mongoose = require('mongoose')

const logsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    entry: {
       type: String,
       required:false
    },
    shipIsBroken: Boolean
})

const Logs = mongoose.model('Logs', logsSchema)





// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
//  ];


 module.exports = Logs;