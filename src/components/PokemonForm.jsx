import React, { useState, useContext } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { PokemonContext } from '../context/PokemonContext';

export const PokemonForm = () => {
    
    const {AddPokemon} = useContext(PokemonContext) //FUNCION TO ADD NEW POKEMON TO MAIN ARRAY STATE
    const [pokemon, setpokemon] = useState("") //SAVE POKEMON ID NAME OR NUMBER

    const submitHandler = (e) => {
        e.preventDefault()
        AddPokemon(pokemon.toLowerCase())
        setpokemon("")
    }

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="outlined-basic"
        label="Pokemon id"
        fullWidth
        variant="outlined"
        color="success"
        className="mb-3 text-light"
        value={pokemon}
        onChange={(e) => setpokemon(e.target.value)}
        required
      />
      <Button variant="contained" fullWidth color="success" type="submit">
        Submit
      </Button>
    </form>
  );
}
