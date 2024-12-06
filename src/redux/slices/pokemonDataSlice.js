import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchDetails',
  async (pokemonName) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    return response.data
  }
)

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonDetails: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false
        state.pokemonDetails[action.payload.name] = action.payload
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default pokemonSlice.reducer