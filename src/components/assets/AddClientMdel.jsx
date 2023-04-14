import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import AddClient from '../queries/AddClient'
import GET_CLIENTS from "../queries/clientQueries";

export default function AddClientModel() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addClient] = useMutation(AddClient, {
        variables: { name, email, phone },
        refetchQueries: [{ query: GET_CLIENTS }]
    })

    const onSubmitt = (e) => {
        e.preventDefault()
        addClient(name, email, phone)
        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <>
            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#addClientModal">
                <div className="d-flex align-items-center">
                    <FaUser className="icon" />
                    <div>Add Client</div>
                </div>
            </button>

            <div className="modal fade" id="addClientModal" tabIndex="-1" aria-labelledby="addClientModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addClientModalLabel">Add Client</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitt}>
                                <div className='mb-3'>
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" id='name'
                                        value={name} onChange={(e) => setName(e.target.value
                                        )} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">email</label>
                                    <input type="text" className="form-control" id='name'
                                        value={email} onChange={(e) => setEmail(e.target.value
                                        )} />
                                </div>
                                <div className='mb-3'>
                                    <label className="form-label">phone</label>
                                    <input type="text" className="form-control" id='name'
                                        value={phone} onChange={(e) => setPhone(e.target.value
                                        )} />
                                </div>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Enter new client</button>
                            </form>
                        </div>

                    </div >
                </div >
            </div >
        </>
    )
}