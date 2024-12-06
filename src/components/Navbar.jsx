/* eslint-disable react/button-has-type */
// src/components/Navbar.js
// eslint-disable-next-line lines-around-directive

'use client';

import Link from 'next/link';

export default function Navbar({ toggleDarkMode }) {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">Pokémon Team Manager</h1>
      <div>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-500 rounded text-white"
        >
          Toggle Dark Mode
        </button>
        <Link href="/login" className="px-4 py-2 bg-blue-500 rounded text-white ml-4">
          Login
        </Link>
        <Link href="/teams" className="px-4 py-2 bg-blue-500 rounded text-white ml-4">
          Teams
        </Link>
      </div>
    </nav>
  );
}


  