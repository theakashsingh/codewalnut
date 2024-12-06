'use client'

import { useState } from 'react'
import { pokemonApi } from '../lib/api'

export default function PokemonSearchModal({ onPokemonSelect, onClose }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    try {
      const results = await pokemonApi.searchPokemon(searchQuery)
      setSearchResults(results)
    } catch (error) {
      console.error('Search error:', error)
    }
  }

  const handlePokemonSelect = (pokemonName) => {
    onPokemonSelect(pokemonName)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl mb-4">Search Pokémon</h2>
        
        <div className="flex mb-4">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter Pokémon name"
            className="flex-grow p-2 border dark:bg-gray-700"
          />
          <button 
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white p-2 rounded"
          >
            Search
          </button>
        </div>

        <div className="max-h-64 overflow-y-auto">
          {searchResults.map((pokemon) => (
            <div 
              key={pokemon.name}
              onClick={() => handlePokemonSelect(pokemon.name)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {pokemon.name}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-4">
          <button 
            onClick={onClose}
            className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white p-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}