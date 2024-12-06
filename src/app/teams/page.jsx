'use client'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { 
//   createTeam, 
//   deleteTeam, 
//   updateTeamName 
// } from '@/lib/redux/slices/teamSlice'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import PokemonSearchModal from '@/components/PokemonSearchModal'
import TeamCard from '@/components/TeamCard'
import { createTeam, deleteTeam } from '@/redux/slices/teamSlice'

export default function TeamsPage() {
  const dispatch = useDispatch()
  const teams = useSelector((state) => state.teams.teams)
  const [newTeamName, setNewTeamName] = useState('')
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [selectedTeamId, setSelectedTeamId] = useState(null)

  const handleCreateTeam = () => {
    if (newTeamName.trim()) {
      dispatch(createTeam(newTeamName))
      setNewTeamName('')
    }
  }

  const handleDeleteTeam = (teamId) => {
    dispatch(deleteTeam(teamId))
  }

//   const handleRenameTeam = (teamId, newName) => {
//     dispatch(updateTeamName({ teamId, newName }))
//   }

  const handleOpenSearchModal = (teamId) => {
    setSelectedTeamId(teamId)
    setIsSearchModalOpen(true)
  }

  return (
    <div className="container mx-auto p-6 dark:bg-dark-bg">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        My Pokémon Teams
      </h1>

      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Enter New Team Name"
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          className="flex-grow p-2 border rounded dark:bg-dark-surface dark:text-white"
        />
        <button
          onClick={handleCreateTeam}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            team={team}
            onDelete={() => handleDeleteTeam(team.id)}
            // onRename={(newName) => handleRenameTeam(team.id, newName)}
            onAddPokemon={() => handleOpenSearchModal(team.id)}
          />
        ))}
      </div>

      {isSearchModalOpen && (
        <PokemonSearchModal
          teamId={selectedTeamId}
          onClose={() => setIsSearchModalOpen(false)}
        />
      )}
    </div>
  )
}