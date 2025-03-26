import styled from "styled-components";
import { Header } from "../components/ProjectHeader";
import { InfoProjectDetails } from "../data/InfoProjectDetails";


const DetailsContainer = styled.div`
    gap: 40px;

    /* Mobile Config */
    @media (max-width: 992px) {
        gap: 30px;
    }
`;

export function DetailsPage({ nameProject }) {

    return (
        <DetailsContainer className="d-flex flex-column col-12 m-0 p-0">
            <Header />
            <InfoProjectDetails nameProject={nameProject} />
        </DetailsContainer>
    );

}