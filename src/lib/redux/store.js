/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "@/lib/redux/slices/authSlices";
import teamReducer from "@/lib/redux/slices/teamSlices";
import pokemonReducer from "@/lib/redux/slices/pokemonSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teams: teamReducer,
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});