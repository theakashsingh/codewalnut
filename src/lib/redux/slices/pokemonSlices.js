/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPokemon: null,
  pokemonCache: {},
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    cachePokemon: (state, action) => {
      state.pokemonCache[action.payload.id] = action.payload;
    },
  },
});

export const { setSelectedPokemon, cachePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
