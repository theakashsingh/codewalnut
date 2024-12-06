/* eslint-disable react/jsx-filename-extension */

"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [teamName, setTeamName] = useState('');
  const router = useRouter();

  const createTeam = () => {
    if (teamName) {
      router.push(`/team/${teamName}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Create Your Pokémon Team</h1>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="mt-4 px-4 py-2 border rounded-md"
          placeholder="Enter Team Name"
        />
        <button
          onClick={createTeam}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Create Team
        </button>
      </div>
    </div>
  );
}

