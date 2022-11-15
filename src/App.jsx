import { useContext } from 'react'
import {PokemonContext} from './context/PokemonContext'
import { PokemonForm } from './components/PokemonForm'
import { PokemonGrid } from './components/PokemonGrid'
import './App.css'

const App = () => {

  const {pokemons}  = useContext(PokemonContext)

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-4">
          <PokemonForm />
        </div>
        <div className="col-8">
          <div className="row">
            {pokemons.length !== 0 ? 
              pokemons.map( (pokemon, index) => (
                <PokemonGrid
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              )) : <h2 className="h2 text-center mt-auto mb-auto">No Pokemon Yet</h2>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
