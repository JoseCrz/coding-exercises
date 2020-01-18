async function getPokemon (name) {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const pokemon = await data.json()
        console.log(pokemon.name)
    } catch (error) {
        console.log(error)
    }
}

getPokemon('charizard')