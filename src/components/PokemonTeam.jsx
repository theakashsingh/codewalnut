'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  createTeam, 
  deleteTeam, 
  selectTeam, 
  addPokemonToTeam, 
  removePokemonFromTeam 
} from './store/features/teamSlice'

export default function PokemonTeam() {
  const dispatch = useDispatch()
  const { teams, currentTeam } = useSelector(state => state.teams)
  const [newPokemon, setNewPokemon] = useState('')

  const handleCreateTeam = () => {
    dispatch(createTeam())
  }

  const handleAddPokemon = () => {
    if (newPokemon && currentTeam.pokemon.length < 6) {
      dispatch(addPokemonToTeam({ 
        name: newPokemon,
        id: Date.now() // Add unique ID
      }))
      setNewPokemon('')
    }
  }

  return (
    <div className="p-4 dark:bg-black dark:text-white">
      <h1>Pokémon Team Manager</h1>
      
      <div className="flex gap-4">
        <button onClick={handleCreateTeam}>
          Create New Team
        </button>
        
        {teams.map(team => (
          <button 
            key={team.id} 
            onClick={() => dispatch(selectTeam(team.id))}
            className={currentTeam?.id === team.id ? 'active' : ''}
          >
            {team.name}
          </button>
        ))}
      </div>

      {currentTeam && (
        <div>
          <h2>{currentTeam.name}</h2>
          
          <div className="flex">
            <input 
              value={newPokemon}
              onChange={(e) => setNewPokemon(e.target.value)}
              placeholder="Pokémon Name"
            />
            <button onClick={handleAddPokemon}>Add Pokémon</button>
          </div>

          <div>
            {currentTeam.pokemon.map((pokemon, index) => (
              <div key={index} className="flex items-center">
                {pokemon.name}
                <button 
                  onClick={() => dispatch(removePokemonFromTeam(pokemon.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}