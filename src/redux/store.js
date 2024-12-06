'use client'

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/slices/authSlice'
import teamReducer from '@/redux/slices/teamSlice'
import pokemonReducer from '@/redux/slices/pokemonDataSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teams: teamReducer,
    pokemon: pokemonReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false
    })
})