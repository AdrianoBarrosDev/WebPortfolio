import PropTypes from "prop-types";
import styled from "styled-components";
import Brain from "../../components/Brain";
import { Circle, Rectangle } from "../../components/GeometricForms";
import "../../styles/Top.css";

const CustomSection = styled.section`
    margin-bottom: 120px;
    @media (max-width: 510px) {
        margin-bottom: 150px;
    }
`;

export function Top(props) {

    return (
        /* Main container */
        <CustomSection className="container-fluid pe-lg-0" id={props.id}>
            <div className="row position-relative">

                <div className="col-12 col-lg-7" style={{zIndex: "1"}}>
                    <header className="mobile">
                        <div className="d-flex align-items-center mobile">
                            <h1>Hi, I&apos;m Adriano Barros</h1>
                            <Rectangle bootstrapConfig='d-none d-md-block ms-5' width='10px' height='92px'></Rectangle>
                        </div>
                        <h2 className="waveColor d-flex justify-content-center justify-content-lg-start">Software & <br /> Web Developer</h2>
                    </header>

                    {/* Buttons */}
                    <div className="row my-4 py-5 mobile">
                        <button 
                            type="button" 
                            className="me-md-5 contactButton contactButton-white contactButton-animated"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})}
                        >Contact Me</button>
                        <button type="button" className="mx-5 linkButton githubButton" target="_blank"
                            onClick={() =>   window.open("https://github.com/AdrianoBarrosDev", "_blank")} />
                        <button type="button" className="linkButton linkedinButton"
                            onClick={() => window.open("https://www.linkedin.com/in/adrianobarrosdev/", "_blank")} />
                    </div>

                    {/* Informations about me */}
                    <div className="informations mobile">
                        <p>
                            Olá, meu nome é Adriano Barros, estudante de Ciência da Computação,
                            com formação técnica em Desenvolvimento de Sistemas e experiência
                            em competições de alto nível, como as Olimpíadas de Programação. Ao
                            longo dessa trajetória, desenvolvi habilidades em lógica de
                            programação, resolução de problemas complexos e trabalho em
                            equipe, sempre buscando aprimorar meus conhecimentos.
                        </p>
                    </div>

                    {/* Design */}
                    <div className="row mx-1 mobile">
                        <Circle />
                        <Circle />
                        <Circle />
                    </div>
                </div>
                

                <div
                    className="brain d-block p-0"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "-150px",
                        left: "0",
                        overflow: "hidden",
                    }}
                >
                    <Brain />
                </div>

            </div>
        </CustomSection>
    );
}

Top.propTypes = {
    id: PropTypes.string.isRequired,
};
