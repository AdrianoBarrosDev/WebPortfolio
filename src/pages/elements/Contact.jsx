import PropTypes from "prop-types";
import styled from "styled-components";
import "../../styles/Global.css";

/* Box to Contact Informations */
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 80px;
    padding: 0;
    color: #9696A6;

    .title {
        font-size: 60px;
        font-weight: bold;
        font-family: "Readex Pro", serif;
    }
    p {
        font-family: "Poppins", serif;
        font-size: 25px;
        font-weight: bold;
    }

    /* Config Mobile */
    @media (max-width: 992px) {

        .title {
            font-size: 40px;
        }
        p {
            font-size: 15px;
        }

    }

`;

/* Circle to profile image */
const Circle = styled.div`
    width: 37vw;
    height: 37vw;
    min-width: 300px;
    min-height: 300px;
    padding: 0;
    border-radius: 50%;
    background: linear-gradient(90deg, #9696A6 0%, #696BB3 15%, #2D2E4D 88%);
    background-position: 40% 10%;
    background-size: 110%;
    background-repeat: no-repeat;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    z-index: 1;
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

    /* Config Mobile */
    @media (max-width: 992px) {
        font-size: 18px;
    }
`;

export function Contact(props) {
    return (
        <section className="container-fluid p-0" id={props.id}>

            <div className="row align-items-center" style={{ position: "relative" }}>

                <img src="./images/RectangleContact.png" alt="Rectangle" style={{position: "absolute", zIndex: "-1", minHeight: "250px", padding: "0"}}/>
                <div className="d-flex justify-content-center align-items-center circleBox p-0 position-relative">
                    <Circle>
                        <Circle style={{ transform: "scale(0.965)", backgroundImage: "url('/images/PictureAdriano.jpeg')" }} />
                    </Circle>
                </div>

            </div>

            <InfoBox className="row">

                <h2 className="waveColor title">Contact</h2>
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

        </section>
    );
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
}