import { useState } from "react"
import { useMutation } from "@apollo/client"
import GET_PROJECTS from "../queries/projectQueries"
import UPDATE_PROJECT from "../queries/updateProject";



export default function EditProjectForm({ project }) {

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState(() => {
        switch (project.status) {
            case "Not Started":
                return "new";
            case "In Progress":
                return "progress";
            case "Completed":
                return "completed";
            default:
                return null
        }
    });

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: { id: project.id, name, description, status },
        refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }]
    })

    const onSubmit = (e) => {
        e.preventDefault()
        updateProject(name, description, status)
    }

    return (

        <div className="modal-body">
            <h3>Update Project Details</h3>
            <form onSubmit={onSubmit}>
                <div className='mb-3'>
                    <label className="form-label">Project Name</label>
                    <input type="text" className="form-control" id='name'
                        value={name} onChange={(e) => setName(e.target.value
                        )} />
                </div>
                <div className='mb-3'>
                    <label className="form-label">Description</label>
                    <textarea type="text" className="form-control" id='description'
                        value={description} onChange={(e) => setDescription(e.target.value
                        )}></textarea>
                </div>
                <div className='mb-3'>
                    <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)}>

                        <option value="default">Select option</option>
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}