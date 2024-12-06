'use client'

import { login } from '@/redux/slices/authSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function AuthPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    // Mock authentication
    if (username && password) {
      dispatch(login({ 
        username, 
        token: 'mock-jwt-token' 
      }))
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black">
      <form 
        onSubmit={handleLogin} 
        className="bg-white dark:bg-gray-900 p-8 rounded shadow-md"
      >
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 mb-4 border dark:bg-gray-800"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border dark:bg-gray-800"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}