import { gql, useQuery } from "@apollo/client";

// $id: name of the var ID: type ! means you need to provide it 
const GET_CHARACTER = gql`
     query GetCharacter($id: ID!){ 
          character(id: $id) {
               id
               name
               image
               episode {
                    id
                    name
                    episode
               }
          }
     }
`

export const useCharacter = (id) => {
     const { error, loading, data } = useQuery(GET_CHARACTER, {
          variables: {
               id
          }
     })
     return { error, loading, data }
}