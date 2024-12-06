'use client'

import TeamManagementPage from '@/components/TeamMangementPage'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import AuthPage from './AuthPage'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <AuthPage />
  }

  return (
    <div className="min-h-screen dark:bg-black">
      <header className="flex justify-between p-4">
        <h1>Pokémon Team Manager</h1>
        <ThemeSwitcher />
      </header>
      <TeamManagementPage />
    </div>
  )
}