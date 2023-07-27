import { useState } from "react"
import { FaList } from "react-icons/fa"
import { useMutation, useQuery } from "@apollo/client"
import GET_CLIENTS from "../queries/clientQueries"
import ADD_PROJECT from "../queries/projectMutation"
import GET_PROJECTS from "../queries/projectQueries"


export default function AddClientModel() {

    const [name, setName] = useState('');
    const [clientId, setClientId] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('New');

    const [addProject] = useMutation(ADD_PROJECT, {
        variables: { name, description, clientId, status },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    })

    const { loading, error, data } = useQuery(GET_CLIENTS)

    const onSubmitt = (e) => {
        e.preventDefault()
        addProject(name, description, status, clientId)
        setName('')
        setDescription('')
        setStatus('New')
        setClientId('')
    }

    if (loading) return null
    if (error) return <>Something is wrong in add project model jsx</>

    return (
        <>
            {!loading && !error && (
                <>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProjectModal">
                        <div className="d-flex align-items-center">
                            <FaList className="icon" />
                            <div>New Project</div>
                        </div>
                    </button>

                    <div className="modal fade" id="addProjectModal" tabIndex="-1" aria-labelledby="addProjectModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title fs-5" id="addProjectModalLabel">Please fill the project information</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={onSubmitt}>
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
                                        <div className="mb-3">
                                            <label className="form-label">Client</label>
                                            <select id="clientId" className="form-select" value={clientId} onChange={(e) => setClientId(e.target.value)}>
                                                <option value="">Select Client</option>
                                                {data.Clients.map((client) => (
                                                    <option key={client.id} value={client.id}>{client.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Enter new project</button>
                                    </form>
                                </div>
                            </div >
                        </div >
                    </div >
                </>
            )}
        </>
    )
}