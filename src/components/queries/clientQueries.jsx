import { gql } from '@apollo/client'


const getAllClient = gql`
{
    Clients{
        id
        name
        email
        phone
    }
}
`

export default getAllClient