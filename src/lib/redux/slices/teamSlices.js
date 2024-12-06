/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
  activeTeamId: null,
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    createTeam: (state, action) => {
      const newTeam = {
        id: Date.now().toString(),
        name: action.payload,
        pokemonList: [],
      };
      state.teams.push(newTeam);
      state.activeTeamId = newTeam.id;
    },
    deleteTeam: (state, action) => {
      state.teams = state.teams.filter(team => team.id !== action.payload);
      state.activeTeamId = state.teams.length > 0 ? state.teams[0].id : null;
    },
    setActiveTeam: (state, action) => {
      state.activeTeamId = action.payload;
    },
    addPokemonToTeam: (state, action) => {
      const team = state.teams.find(t => t.id === action.payload.teamId);
      if (team && team.pokemonList.length < 6) {
        team.pokemonList.push(action.payload.pokemon);
      }
    },
    removePokemonFromTeam: (state, action) => {
      const team = state.teams.find(t => t.id === action.payload.teamId);
      if (team) {
        team.pokemonList = team.pokemonList.filter(p => p.id !== action.payload.pokemonId);
      }
    },
    reorderTeamPokemon: (state, action) => {
      const team = state.teams.find(t => t.id === action.payload.teamId);
      if (team) {
        const [reorderedPokemon] = team.pokemonList.splice(action.payload.startIndex, 1);
        team.pokemonList.splice(action.payload.endIndex, 0, reorderedPokemon);
      }
    },
  },
});

export const { 
  createTeam, 
  deleteTeam, 
  setActiveTeam, 
  addPokemonToTeam, 
  removePokemonFromTeam,
  reorderTeamPokemon 
} = teamSlice.actions;
export default teamSlice.reducer;
