import React from 'react'
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router'

function Character() {
     const { id } = useParams()

     const { data, loading, error } = useCharacter(id)

     if (loading) return <h3>Loading..</h3>
     if (error) return <h3 style={{ color: 'tomato' }}>Something Went Wrong</h3>

     return (
          <div key={data.character.id}>
               <img width="300" src={data.character.image} alt="" />
               <h3>{data.character.name}</h3>
               <ul>
                    {
                         data.character.episode.map(e => <li key={e.id}>{e.name} - {e.episode} </li>)
                    }
               </ul>
          </div>
     )

}

export default Character
