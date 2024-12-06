'use client'

import { useSelector } from 'react-redux'

export function useAuth() {
  const { isAuthenticated, user } = useSelector(state => state.auth)
  
  return {
    isAuthenticated,
    user
  }
}