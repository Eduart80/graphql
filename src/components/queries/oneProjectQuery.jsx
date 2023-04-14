import { gql } from '@apollo/client'


const getOneProject = gql`
query getProject($id: ID!) {
  Project(id: $id) {
    id
    name
    description
    status
    client {
      id
      name
      email
      phone
    }
  }
}
`

export default getOneProject