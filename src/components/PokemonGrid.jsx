import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export const PokemonGrid = ( {id, name, image}) => {

  const {DeletePokemon} = useContext(PokemonContext)
  
  return (
    <div className="card m-1" style={{ width: "15rem"}}>
      <Stack direction="row" alignItems="end" spacing={1}>
        <IconButton aria-label="delete" size="large" onClick={ () => { DeletePokemon(id) }}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      <img src={image} className="card-img-top" alt="not-found" />
      <div className="card-body">
        <p className="card-text h3 text-center">{name}</p>
      </div>
    </div>
  );
}
