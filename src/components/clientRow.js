import React from "react";
import { FaTrash } from 'react-icons/fa'
import { useMutation } from "@apollo/client";
import DELETE_CLIENT from './queries/deleteClient'
import GET_CLIENTS from "./queries/clientQueries";
import GET_PROJECTS from "./queries/clientQueries";


function CreateRow({ client }) {

    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    })

    return <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger" onClick={deleteClient}>
                <FaTrash />
            </button>
        </td>
    </tr>
}
export default CreateRow