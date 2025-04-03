import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styled from "styled-components";

/* Box to Contact Informations */
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    text-align: start;
    width: 500px;
    height: 707px;
    margin-block: 150px 80px;
    margin-left: 16vw;
    padding: 50px 45px 50px 45px;
    color: #9696A6;
    font-weight: bold;
    background-color: #12151A;
    border-radius: 10px;
    overflow: hidden;

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
    h2 {
        margin-left: -2px;
    }
    h3 {
        font-size: 18px;
    }


    form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    input,
    textarea {
        width: 100%;
        height: 44px;
        background-color: #1C2027;
        border: none;
        border-radius: 5px;
        margin: 12px 0px 35px 0px;
        padding: 10px;
        color: #9696A6;
        font-weight: bold;
    }
    input {
        height: 44px;
    }
    textarea {
        height: 127px;
        resize: none;
    }
    input::placeholder,
    textarea::placeholder {
        color: rgb(150, 150, 166, 0.2);
        vertical-align: top;
        font-weight: 400;
    }
    input:focus,
    textarea:focus {
        outline: 3px solid #696BB3;
    }

    /* Mobile Config */
    @media (max-width: 1440px) {
        margin-top: -100px;
        margin-left: 0px;
    }

    @media (max-width: 992px) {
        .title {
            font-size: 40px;
        }
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 560px) {
        padding-inline: 30px;
        width: 90vw;
        height: auto;
    }

`;

/* Submit Button */
const SubmitButton = styled.button`
    height: 44px;
    min-width: 125px;
    color: #9696A6;
    font-family: "Readex Pro", serif;
    font-weight: bold;
    font-size: 18px;
    background-color: #1C2027;
    border: none;
    border-radius: 5px;
    padding: 10px;
`;


export function ContactForm() {

    // Reference for the form element to be used in the component
    const formRef = useRef();

    // State to manage the loading status (e.g., while the form is being submitted)
    const [loading, setLoading] = useState(false);

    // State to store the form data (name, email, and message)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handler for form input changes
    // Updates the corresponding field in the form state when a user types in an input
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm, // Preserve the previous form state
            [name]: value, // Update the field that changed
        }));
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)
        setLoading(true); // Set loading to true while the form is being processed

        let hasErrors = false; // Flag to track if there are any validation errors

        // Validate the form fields and show an alert if there are any errors
        if(form.name.trim() === "") {
            alert("O campo nome não pode estar vazio!"); // Show an alert if the name is empty
            hasErrors = true;
        } else if(form.email.trim() === "") {
            alert("O email deve ser válido!"); // Show an alert if the email is empty
            hasErrors = true;
        } else if(form.message.trim() === "") {
            alert("Escreva o assunto na mensagem!"); // Show an alert if the message is empty
            hasErrors = true;
        }

        // If there are validation errors, stop and hide loading spinner
        if(hasErrors) {
            setLoading(false);
            return; // Exit the function to prevent further action
        }

        // If no errors, send the form data via email using emailjs service
        emailjs.send(
            'service_y6ydd5g',
            'template_0gy7yn5',
            {
                from_name: form.name, // The sender's name
                to_name: 'Adriano', // The recipient's name
                from_email: form.email, // The sender's email
                to_email: 'adrianobarroscontact@gmail.com', // The recipient's email
                message: form.message, // The message content
            },
            '4rpd46PFUSmMnNSAI'
        )
        .then(() => {
            setLoading(false); // Hide loading spinner after successful email sending
            alert("Obrigado. Entrarei em contato com você o mais rápido possível."); // Show success message

            // Reset the form to empty values
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false); // Hide loading spinner if an error occurs
            console.log(error); // Log the error to the console
            alert("Algo deu errado."); // Show error message
        });
    }

    return (
        <InfoBox 
            className="row"
            
            // Animations
            data-aos="fade-right" 
            data-aos-duration="800"
        >

            <h3>Entre em contato</h3>
            <h2 className="waveColor title">Contact</h2>

            {/* Form to send a message via email using emailjs */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    placeholder="Qual o seu nome?"
                    onChange={handleChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={form.email} 
                    placeholder="Qual o seu email?" 
                    onChange={handleChange}
                />

                <label htmlFor="message">Mensagem</label>
                <textarea 
                    className="messageInput" 
                    type="text" name="message" 
                    value={form.message} 
                    placeholder="O que você quer dizer?" 
                    onChange={handleChange}
                />

                <SubmitButton
                    type="submit"
                    className="submitButton"
                >
                    {loading ? "Enviando..." : "Enviar"}
                </SubmitButton>
            </form>

        </InfoBox>
    );

}