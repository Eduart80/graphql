import { gql } from '@apollo/client'


const getAllProjects = gql`
{
    Projects{
      id
      name
      status
      clientId
      description
    }
  }
`


export default getAllProjects