import React from 'react'
import { useCharacters } from './../hooks/useCharacters';
import { Link } from 'react-router-dom'

function CharactersList() {
     const { error, data, loading } = useCharacters()

     if (loading) return <h3>Loading..</h3>
     if (error) return <h3 style={{ color: 'tomato' }}>Something Went Wrong</h3>

     return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: '16px' }}>
               {
                    data.characters.results.map(character => {
                         return <Link to={`/${character.id}`} key={character.id}>
                              <img width="150" src={character.image} alt="" />
                              <h6>{character.name}</h6>
                         </Link>
                    })
               }
          </div>
     )
}

export default CharactersList