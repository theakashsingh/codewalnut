'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  createTeam, 
  deleteTeam, 
  selectTeam, 
  addPokemonToTeam, 
  removePokemonFromTeam 
} from '@/redux/slices/teamSlice'
import PokemonDetailsModal from './PokemonDetailsModal'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

export default function TeamManagementPage() {
  const dispatch = useDispatch()
  const { teams, currentTeam } = useSelector(state => state.teams)
  const [newPokemon, setNewPokemon] = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const handleCreateTeam = () => {
    dispatch(createTeam())
  }

  const handleAddPokemon = () => {
    if (newPokemon && currentTeam.pokemon.length < 6) {
      dispatch(addPokemonToTeam({ 
        name: newPokemon,
        id: Date.now()
      }))
      setNewPokemon('')
    }
  }

  const onDragEnd = (result) => {
    if (!result.destination) return
    
    const reorderedPokemon = Array.from(currentTeam.pokemon)
    const [reorderedItem] = reorderedPokemon.splice(result.source.index, 1)
    reorderedPokemon.splice(result.destination.index, 0, reorderedItem)

    dispatch(reorderTeam(reorderedPokemon))
  }

  return (
    <div className="p-4 dark:bg-black dark:text-white">
      <div className="flex justify-between mb-4">
        <button onClick={handleCreateTeam}>
          Create New Team
        </button>
        
        <div className="flex gap-2">
          {teams.map(team => (
            <div key={team.id} className="flex items-center gap-2">
              <button 
                onClick={() => dispatch(selectTeam(team.id))}
                className={currentTeam?.id === team.id ? 'active' : ''}
              >
                {team.name}
              </button>
              <button 
                onClick={() => dispatch(deleteTeam(team.id))}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {currentTeam && (
        <div>
          <div className="flex mb-4">
            <input 
              value={newPokemon}
              onChange={(e) => setNewPokemon(e.target.value)}
              placeholder="Pokémon Name"
              className="flex-grow mr-2 p-2 border dark:bg-gray-800"
            />
            <button 
              onClick={handleAddPokemon}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Pokémon
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="team-list">
              {(provided) => (
                <div 
                  {...provided.droppableProps} 
                  ref={provided.innerRef}
                  className="grid grid-cols-3 gap-4"
                >
                  {currentTeam.pokemon.map((pokemon, index) => (
                    <Draggable 
                      key={pokemon.id} 
                      draggableId={pokemon.id.toString()} 
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-100 dark:bg-gray-800 p-4 rounded"
                        >
                          <div className="flex justify-between items-center">
                            <span>{pokemon.name}</span>
                            <div className="flex gap-2">
                              <button 
                                onClick={() => setSelectedPokemon(pokemon.name)}
                                className="text-blue-500"
                              >
                                View
                              </button>
                              <button 
                                onClick={() => dispatch(removePokemonFromTeam(pokemon.id))}
                                className="text-red-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}

      {selectedPokemon && (
        <PokemonDetailsModal 
          pokemonName={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  )
}