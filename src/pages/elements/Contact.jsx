import PropTypes from "prop-types";
import styled from "styled-components";

/* Box to Contact Informations */
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 80px;
    padding: 0;
    color: #9696A6;

    h2 {
        font-size: 60px;
        font-weight: bold;
        font-family: "Readex Pro", serif;
    }
    p {
        font-family: "Poppins", serif;
        font-size: 25px;
        font-weight: bold;
    }
`;

/* Circle to profile image */
const Circle = styled.div`
    width: 690px;
    height: 690px;
    padding: 0;
    border-radius: 50%;
    background: linear-gradient(180deg, #2D2E4D 81%, #696BB3 100%);
    background-position: 40% 10%;
    background-size: 110%;
    background-repeat: no-repeat;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;

`;

/* Contact Buttons */
const ContactButtons = styled.button`
    color: #FFFFFF;
    font-family: "Poppins", serif;
    font-weight: 200;
    font-size: 20px;
    background-color: transparent;
    border: none;
    margin-block: 5px;
`;

export function Contact(props) {
    return (
        <section className="container-fluid" id={props.id}>

            <div className="row">
                
                {/* Image Column */}
                <div className="col-6 p-0 circleBox">
                    <Circle>
                        <Circle style={{ transform: "scale(0.9)", backgroundImage: "url('/images/PictureAdriano.jpeg')" }} />
                    </Circle>
                </div>

                {/* Information Column */}
                <InfoBox className="col-6">

                    <h2 className="waveColor">Contact</h2>
                    <p style={{margin: "68px 0px 58px 0px"}}>Você pode me contatar pelas seguintes opções</p>

                    <ContactButtons 
                        className="d-flex align-items-center justify-content-center gap-3"
                        type="button"
                        onClick={() => window.open("https://www.linkedin.com/in/adrianobarrosdev/", "_blank")}>

                        <div className="linkButton linkedinButton" style={{border: "1px solid white"}}/>
                        Adriano Barros
                    </ContactButtons>
                    <ContactButtons className="d-flex align-items-center justify-content-center gap-3" type="button">
                        <div className="linkButton emailButton" style={{border: "1px solid white"}}/>
                        Adriano Barros
                    </ContactButtons>

                    <p style={{marginTop: "58px"}}>Será um prazer trabalhar com você!</p>

                </InfoBox>

            </div>

        </section>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}