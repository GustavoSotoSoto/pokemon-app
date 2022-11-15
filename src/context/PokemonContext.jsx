import React, {createContext, useState} from 'react'
import { GetPokemon } from '../components/GetPokemon'

export const PokemonContext = createContext() //NOMBRE DEL CONTEXTO, ALMACENA ESTADO Y DATOS GLOBALES QUE COMPARTEN LOS COMPONENTES CHILDREN

export const PokemonContextProvider = (props) => {

  const [pokemons, setPokemons] = useState([]) //POKEMON GLOBAL STATE
 
  const AddPokemon = async(pokemonId) => { //ADD POKEMON TO ARRAY
    const {id, name, image} = await GetPokemon(pokemonId)

    setPokemons([...pokemons, {
      id, name, image
    }])
  }

  const DeletePokemon = async(pokemonId) => { //DELETE POKEMON USING ID
    setPokemons(pokemons.filter(poke => poke.id !== pokemonId))
  }

  return (

    <PokemonContext.Provider value = { {pokemons, AddPokemon, DeletePokemon}} >

        {props.children}

    </PokemonContext.Provider>

  )
}
