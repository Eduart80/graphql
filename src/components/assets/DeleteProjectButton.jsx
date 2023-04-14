import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa"
import DEL_PROJECT from "../queries/deleteProject"
import GET_PROJECTS from "../queries/projectQueries"



export default function DeleteProjectButton({ projectId }) {
    const navigate = useNavigate()

    const [deleteProject] = useMutation(DEL_PROJECT, {
        variables: { id: projectId },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }]
    })

    return <div className="d-flex mt-5 ms-auto">
        <button className="btn btn-danger m2" onClick={deleteProject}>
            <FaTrash className="icon" />Delete Project</button>
    </div>
}