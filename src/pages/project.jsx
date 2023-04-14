import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import GET_PROJECT from '../components/queries/oneProjectQuery'
import ClientInfo from '../components/assets/clientInfo';
import DeleteProjectButton from '../components/assets/DeleteProjectButton'
import EditProjectForm from '../components/assets/EditProjectForm'


export default function ProjectPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <>Loading...</>
  if (error) return <p>Something wrong ...</p>

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>

          <h3>Project name: {data.Project.name}</h3>
          <p>Description: {data.Project.description}</p>

          <h3 className='mt-3'>Project Status</h3>
          <p className='lead'>{data.Project.status}</p>

          <ClientInfo client={data.Project.client} />

          <EditProjectForm project={data.Project} />

          <DeleteProjectButton projectId={data.Project.id} />
        </div>
      )}
    </>
  )
}
