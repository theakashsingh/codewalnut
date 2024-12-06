import axios from 'axios'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'

export const pokemonApi = {
  async getPokemonDetails(name) {
    try {
      const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`)
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon details:', error)
      throw error
    }
  },

  async searchPokemon(query) {
    try {
      const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=20&offset=0`)
      return response.data.results.filter(pokemon => 
        pokemon.name.includes(query.toLowerCase())
      )
    } catch (error) {
      console.error('Error searching Pokémon:', error)
      throw error
    }
  }
}