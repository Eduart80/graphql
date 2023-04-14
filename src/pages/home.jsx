import Client from '../components/assets/client'
import Project from '../components/assets/Projects'
import AddClientModel from "../components/assets/AddClientMdel";
import AddProjectModel from "../components/assets/addProjectModel";


export default function Home() {

    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModel />
                <AddProjectModel />
            </div>
            <Client />
            <hr />
            <Project />
        </>
    )
}