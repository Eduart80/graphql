import React from "react"
import { useQuery } from '@apollo/client'
import ClientRow from '../clientRow'
import getClient from '../queries/clientQueries'

function Client() {
    const { data, loading, error } = useQuery(getClient)

    if (loading) {
        return <>Loading...</>
    } else if (error) {
        return <>Something wrong...</>
    }

    return <>{!loading && !error && (
        <table className='table table-hover mt-3'>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> email </th>
                    <th> Phone </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.Clients.map(client => (
                    <ClientRow key={client.id} client={client} />
                ))}
            </tbody>
        </table>
    )}
    </>
}
export default Client