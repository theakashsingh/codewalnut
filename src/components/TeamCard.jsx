'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { selectTeam, deleteTeam } from '../store/features/teamSlice'
import PokemonSearchModal from './PokemonSearchModal'
import { deleteTeam, selectTeam } from '@/redux/slices/teamSlice'

export default function TeamCard({ team, isActive }) {
  const dispatch = useDispatch()
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  const handlePokemonSelect = (pokemonName) => {
    // Logic to add Pokemon to team
    console.log(`Selected Pokemon: ${pokemonName}`)
  }

  return (
    <div 
      className={`
        p-4 rounded-lg shadow-md 
        ${isActive ? 'bg-blue-100 dark:bg-blue-900' : 'bg-white dark:bg-gray-800'}
        transition-colors duration-200
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{team.name}</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => dispatch(selectTeam(team.id))}
            className="text-blue-500 hover:text-blue-700"
          >
            Select
          </button>
          <button 
            onClick={() => dispatch(deleteTeam(team.id))}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {team.pokemon.map((pokemon) => (
          <div 
            key={pokemon.id} 
            className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-center"
          >
            {pokemon.name}
          </div>
        ))}

        {team.pokemon.length < 6 && (
          <button 
            onClick={() => setIsSearchModalOpen(true)}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Pokémon
          </button>
        )}
      </div>

      {isSearchModalOpen && (
        <PokemonSearchModal 
          onPokemonSelect={handlePokemonSelect}
          onClose={() => setIsSearchModalOpen(false)}
        />
      )}
    </div>
  )
}