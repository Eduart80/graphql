import { gql } from '@apollo/client'

const addClient = gql`
    mutation addClient($name:String!, $email:String!,$phone:String!){
        addClient(name:$name, email:$email, phone:$phone){
            id
            name
            email
            phone
        }
    }
`

export default addClient
