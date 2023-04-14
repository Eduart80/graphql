import { gql } from '@apollo/client'


const deleteOneClient = gql`
mutation deleteClient($id:ID!){
    deleteClient(id: $id){
        id
        name
        email
        phone
    }
}
`
export default deleteOneClient
