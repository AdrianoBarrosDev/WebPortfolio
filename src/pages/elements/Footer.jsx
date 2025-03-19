import styled from "styled-components";

const CustomFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 18vh;

    p { 
        text-align: center;
        font-size: 20px;
        font-family: "Poppins", serif;
        margin-top: 0;
    }

`;

export function Footer() {

    return (
        <CustomFooter>
            <p>Made by Adriano Barros</p>
            <p>@ All rights reserved</p>
        </CustomFooter>
    );

}