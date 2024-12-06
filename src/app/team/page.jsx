/* eslint-disable react/button-has-type */
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { addTeam, deleteTeam, setCurrentTeam } from '../../src/redux/teamSlice';
import { useState } from 'react';

export default function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);
  const [teamName, setTeamName] = useState('');

  const handleCreateTeam = () => {
    if (teamName) {
      const newTeam = {
        id: Date.now(),
        name: teamName,
        pokemon: [],
      };
      dispatch(addTeam(newTeam));
      setTeamName('');
    }
  };

  const handleDeleteTeam = (id) => {
    dispatch(deleteTeam(id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl mb-4">Your Teams</h2>
        <input
          type="text"
          placeholder="Enter team name"
          className="w-full p-2 border rounded mb-4"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button onClick={handleCreateTeam} className="w-full p-2 bg-blue-500 rounded text-white">Create Team</button>

        <ul className="mt-4">
          {teams.map((team) => (
            <li key={team.id} className="flex justify-between items-center py-2">
              <span>{team.name}</span>
              <div>
                <button
                  onClick={() => handleDeleteTeam(team.id)}
                  className="ml-2 text-red-500"
                >
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setCurrentTeam(team))}
                  className="ml-2 text-blue-500"
                >
                  View
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
