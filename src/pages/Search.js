import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const GET_CHARACTER_LOCATIONS = gql`
     query GetCharacterLocations($name: String! ){
          characters(filter: {name: $name}){
               results {
                    location {
                         name
                    }
               }
          }
     }
`

function Search() {
     const [name, setName] = useState('')

     // getLocations is the name we picked
     const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
          variables: {
               name
          }
     })
     console.log({ loading, error, data, called })
     return (
          <div>
               <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
               />
               <button onClick={() => getLocations()} >Search</button>

               {loading && <h1>Loading .. </h1>}
               {error && <h1>Error .. </h1>}
               {data && (
                    <ul>
                         {
                              data.characters.results.map(c => <li> {c.location.name} </li>)
                         }
                    </ul>
               )}
          </div>
     )
}

export default Search