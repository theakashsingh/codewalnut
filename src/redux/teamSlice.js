/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
  currentTeam: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    setTeams: (state, action) => {
      state.teams = action.payload;
    },
    addTeam: (state, action) => {
      state.teams.push(action.payload);
    },
    updateTeam: (state, action) => {
      const { id, newTeam } = action.payload;
      const index = state.teams.findIndex((team) => team.id === id);
      if (index !== -1) {
        state.teams[index] = newTeam;
      }
    },
    deleteTeam: (state, action) => {
      state.teams = state.teams.filter((team) => team.id !== action.payload);
    },
    setCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
  },
});

export const { setTeams, addTeam, updateTeam, deleteTeam, setCurrentTeam } = teamSlice.actions;

export default teamSlice.reducer;
