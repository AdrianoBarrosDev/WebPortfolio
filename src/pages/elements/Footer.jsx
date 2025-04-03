import styled from "styled-components";

const CustomFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 18vh;
    margin-top: 150px;
    overflow: hidden;
    z-index: 1;

    p { 
        text-align: center;
        font-size: 20px;
        font-family: "Poppins", serif;
        margin-top: 0;
    }

    /* Config Mobile */
    @media (max-width: 992px) {
        margin-top: 97px;

        p{
            font-size: 15px;
        }
    }

`;

export function Footer() {

    return (
        <CustomFooter 
            // Animations
            data-aos="fade-up" 
            data-aos-duration="800"
        >
            <p>Made by Adriano Barros</p>
            <p>@ All rights reserved</p>
        </CustomFooter>
    );

}