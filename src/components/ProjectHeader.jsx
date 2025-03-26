import styled from "styled-components";

const CustomHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: #12151A;
    padding-inline: 80px;

    /* Mobile Config */
    @media (max-width: 992px) {
        padding-inline: 35px;
    }
`;

const LogoButton = styled.button`
    border: none;
    background-color: transparent;

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

const TextButton = styled.button`
    background-color: transparent;
    color: #9696A6;
    border: none;
    font-size: 18px;
    font-weight: bold;
    font-family: "Readex Pro", serif;
`;

export function Header() {

    return (
        <CustomHeader>
            <LogoButton onClick={() => window.location.href="/"}>
                <img src="./images/WebsiteLogo.png" alt="Logo Website"/>
            </LogoButton>
            <div className="d-none d-lg-flex me-4 gap-4">
                <TextButton>Home</TextButton>
                <TextButton>Portfolio</TextButton>
                <TextButton>Experience</TextButton>
                <TextButton>Contact</TextButton>
            </div>
        </CustomHeader>
    );

}