'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  )
}