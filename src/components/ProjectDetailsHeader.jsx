import styled from "styled-components";

const CustomHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: #12151A;
    padding-inline: 7.5vw;

    /* Mobile Config */
    @media (max-width: 1300px) {
        padding-inline: 35px;
    }
`;

const LogoButton = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;

    img {
        width: 43px;
        height: 34px;
        object-fit: contain;
    }

    /* Mobile Config */
    @media (max-width: 992px) {
        img {
            width: 36px;
            height: 28px;
        }
    }
`;

export function ProjectDetailsHeader() {

    return (
        <CustomHeader data-aos="fade-down" data-aos-duration="800">
            <LogoButton onClick={() => window.location.href="/"}>
                <img src="./images/WebsiteLogo.png" alt="Logo Website"/>
            </LogoButton>
        </CustomHeader>
    );

}