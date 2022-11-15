export const GetPokemon = async(pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    const {species, sprites, id} = await response.json()

    const {name} = species
    const {front_default} = sprites 

    return {id, name, image: front_default}
}
