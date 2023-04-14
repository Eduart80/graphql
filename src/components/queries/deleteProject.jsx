import { gql } from '@apollo/client'


const deleteOneProject = gql`
mutation deleteProject($id:ID!){
    deleteProject(id: $id){
        name
    }
}
`
export default deleteOneProject
