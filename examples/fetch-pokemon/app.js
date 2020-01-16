const getPokemon = name => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(result => {
        console.log(result)
        return result.json()
    })
    .then(pokemon => {
        console.log(pokemon)
        console.log(`${pokemon.name}. type: ${pokemon.types[0].type.name}`)
    })
    .catch(error => {
        console.log(error)
    })
}

getPokemon('sceptile')