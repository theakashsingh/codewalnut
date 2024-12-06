'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function PokemonDetailsModal({ pokemonName, onClose }) {
  const { data: pokemonDetails, isLoading } = useQuery({
    queryKey: ['pokemonDetails', pokemonName],
    queryFn: async () => {
      const [details, species] = await Promise.all([
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      ])
      return {
        details: details.data,
        species: species.data
      }
    }
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-black p-6 rounded-lg max-w-md w-full">
        <h2>{pokemonDetails.details.name}</h2>
        <img 
          src={pokemonDetails.details.sprites.front_default} 
          alt={pokemonDetails.details.name} 
        />
        
        <div>
          <h3>Stats</h3>
          {pokemonDetails.details.stats.map(stat => (
            <div key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </div>
          ))}
        </div>

        <div>
          <h3>Abilities</h3>
          {pokemonDetails.details.abilities.map(ability => (
            <div key={ability.ability.name}>
              {ability.ability.name}
            </div>
          ))}
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}