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
        <CustomSection id={props.id} className="container-fluid pe-lg-0">

            <div className="row position-relative">

                <div 
                    className="col-12 col-lg-7 position-relative" 
                    style={{ zIndex: "1" }}

                    // Animations
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-out"
                >
                        
                    <div style={{zIndex: 1, background: "transparent"}}>
                        <header className="mobile hidden">
                            <div className="d-flex align-items-center mobile">
                                <h1>Hi, I&apos;m Adriano Barros</h1>
                                <Rectangle bootstrapConfig="d-none d-md-block ms-5" width="10px" height="92px"></Rectangle>
                            </div>
                            <h2 className="waveColor d-flex justify-content-center justify-content-lg-start">
                                Software & <br /> Web Developer
                            </h2>
                        </header>

                        {/* Buttons */}
                        <div className="row my-4 py-lg-5 mobile hidden">
                            <button
                                type="button"
                                className="me-md-5 contactButton contactButton-white contactButton-animated"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Contact Me
                            </button>
                            <button
                                type="button"
                                className="mx-5 linkButton githubButton"
                                target="_blank"
                                onClick={() =>
                                    window.open("https://github.com/AdrianoBarrosDev", "_blank")
                                }
                            />
                            <button
                                type="button"
                                className="linkButton linkedinButton"
                                onClick={() =>
                                    window.open("https://www.linkedin.com/in/adrianobarrosdev/", "_blank")
                                }
                            />
                        </div>
                    </div>
                    
                        
                    <div className="boxMoveBrain">
                        <div className="mobileBrain">
                            <Brain />
                        </div>
                    </div>
                    

                    {/* Informations about me */}
                    <div className="informations mobile hidden">
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
                    <div className="row mx-1 mobile hidden">
                        <Circle />
                        <Circle />
                        <Circle />
                    </div>

                </div>

                <div className="brain p-0">
                    <Brain />
                </div>

            </div>
            
        </CustomSection>

    );
}

Top.propTypes = {
    id: PropTypes.string.isRequired,
};
