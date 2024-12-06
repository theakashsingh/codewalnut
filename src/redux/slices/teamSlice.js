import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [{ id: Date.now(), name: 'Default Team', pokemon: [] }],
  currentTeam: null
  },
  reducers: {
    createTeam: (state, action) => {
      const newTeam = {
        id: Date.now(),
        name: action.payload.name || `Team ${state.teams.length + 1}`,
        pokemon: []
      };
      state.teams.push(newTeam);
      state.currentTeam = newTeam;
    },
    deleteTeam: (state, action) => {
      state.teams = state.teams.filter(team => team.id !== action.payload);
      state.currentTeam = state.teams[0] || null;
    },
    selectTeam: (state, action) => {
      state.currentTeam = state.teams.find(team => team.id === action.payload);
    },
    addPokemonToTeam: (state, action) => {
      if (state.currentTeam && state.currentTeam.pokemon.length < 6) {
        state.currentTeam.pokemon.push(action.payload);
      }
    },
    removePokemonFromTeam: (state, action) => {
      if (state.currentTeam) {
        state.currentTeam.pokemon = state.currentTeam.pokemon.filter(
          pokemon => pokemon.id !== action.payload
        );
      }
    },
    reorderTeam: (state, action) => {
      if (state.currentTeam) {
        state.currentTeam.pokemon = action.payload;
      }
    }
  }
});

export const { 
  createTeam, 
  deleteTeam, 
  selectTeam, 
  addPokemonToTeam, 
  removePokemonFromTeam, 
  reorderTeam 
} = teamSlice.actions;
export default teamSlice.reducer;