

export default function ProjectCard({ project }) {
     const colorStatus = () =>{
        console.log(project.status);
        if(project.status==='NOT_STARTED'){
            return 'black'
        }else {
            return project.status==='COMPLETED'? 'green' :'blue'
        }
    }
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{project.name}</h5>
                        <a href={`/projects/${project.id}`}>View</a>
                    </div>
                    <p className='small' >Status: <strong style={{color:colorStatus()}}>{project.status}</strong></p>
                </div>
            </div>
        </div>
    )
}