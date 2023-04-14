import { useQuery } from "@apollo/client";
import getAllProjects from '../queries/projectQueries'
import ProjectCard from "./ProjectCard";


export default function Projects() {
    const { loading, error, data } = useQuery(getAllProjects)


    if (loading) return <>Loading...</>
    if (error) return <div>Something went wrong...</div>

    return <>
        {data.Projects.length > 0 ? (
            <div className="row">
                {data.Projects.map(project => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        ) : (
            <p>No Project</p>
        )}
    </>

}

