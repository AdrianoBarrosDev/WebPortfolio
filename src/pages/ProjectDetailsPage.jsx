import { Header } from "../components/Header";
import { InfoProjectDetails } from "../components/InfoProjectDetails";


export function DetailsPage({ nameProject }) {

    return (
        <div className="col-12 m-0 p-0">
            <Header />
            <InfoProjectDetails nameProject={nameProject} />
        </div>
    );

}