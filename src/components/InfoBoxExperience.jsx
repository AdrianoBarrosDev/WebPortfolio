import { useEffect, useState } from "react";
import styled from "styled-components";
import { useActiveSection } from "../contexts/ActiveSectionExperience";

/* Settings to the box that will have the information */
const InfoBox = styled.div.attrs(props => ({
    style: {
        marginTop: props.$marginTop,  // Aplicando corretamente sem passar ao DOM
    }
}))`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    transition: margin ${({ $timeTransition }) => $timeTransition} ease-out;

    h2 {
        font-size: 35px;
        font-weight: bold;
    }
    h3 {
        font-size: 25px;
        font-weight: 600;
    }
    h4 {
        font-family: "Poppins", serif;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 0;
    }
    p {
        font-family: "Poppins", serif;
        font-size: 19px;
    }

`;

/* Decorative Line */
const Line = styled.div`
    width: calc(100%);
    height: 3px;
    background-color: #9696A6;
    border-radius: 30px;
    margin: 25px 0px 50px 0px;
`;


/* Function to return the details of the active experience */
export function ExperienceDetails() {
    const { activeExperience } = useActiveSection();

    // State to manage the margin-top for transition
    const [timeTransition, setTimeTransition] = useState("1s"); // Initial time margin transition value
    const [marginTop, setMarginTop] = useState("-600px"); // Initial margin-top value

    // Effect to set margin-top to 0 after component mounts
    useEffect(() => {

        setTimeTransition("0s");
        setMarginTop("-600px"); // Set the margin-top to a different value when the component is rendered
        
        const timer = setTimeout(() => {
            setTimeTransition("1s");
            setMarginTop("0px"); // Reset the margin-top to 0 after the transition time
        }, 300); // Delay to ensure the margin-top change happens after component renders

        // Cleanup timeout on unmount
        return () => clearTimeout(timer);
    }, [activeExperience]); // Effect only runs when activeExperience changes

    if (activeExperience === "unisantosBachelorDegree") {
        return (
            <InfoBox $marginTop={marginTop} $timeTransition={timeTransition}>
                <h2>Bacharelado Ciência da Computação</h2>
                <h3>Universidade Católica de Santos | 2025 - Presente</h3>
                <Line />

                <div style={{ width: "calc(98%)", textAlign: "start" }}>
                    <p>
                        Ao longo da graduação em Ciência da Computação, desenvolvi uma sólida base em algoritmos, estruturas de dados e diversas linguagens de programação, 
                        que me capacitam a resolver problemas complexos de forma lógica e eficiente.
                    </p>
                    <p>
                        Além disso, adquiri experiência prática em desenvolvimento de software, trabalhando em projetos colaborativos que fortaleceram minha habilidade de atuar 
                        em equipe e comunicar ideias técnicas de maneira clara. Minha formação também abrange conhecimentos em bancos de dados, redes de computadores e metodologias ágeis, 
                        ferramentas essenciais para enfrentar os desafios do mundo digital e contribuir com soluções inovadoras e robustas.
                    </p>
                </div>
            </InfoBox>
        );
    }

    if (activeExperience === "senacTechnicalCourse") {
        return (
            <InfoBox $marginTop={marginTop} $timeTransition={timeTransition}>
                <h2>Téc. em Desenvolvimento de Sistemas</h2>
                <h3>Senac | 2022 - 2024</h3>
                <Line />

                <div style={{ width: "calc(98%)", textAlign: "start" }}>
                    <p>
                        Durante o curso técnico, tive a oportunidade de desenvolver aplicações nas plataformas desktop, web e mobile, utilizando tecnologias como Java, HTML, CSS, JavaScript, Node.js e React. 
                        Essas aplicações foram integradas com bancos de dados MySQL e MongoDB, garantindo eficiência e escalabilidade. 
                    </p>
                    <p>
                        A compreensão e aplicação de programação orientada a objetos (POO) foi fundamental para estruturar o código de maneira modular e reutilizável, promovendo a organização e a manutenção do software. 
                        A adoção de boas práticas de desenvolvimento, como os princípios SOLID, assegurou a criação de sistemas robustos e de fácil manutenção. Além disso, o uso de Git para versionamento de código facilitou 
                        a colaboração em equipe e o acompanhamento do histórico de alterações.
                    </p>
                </div>
            </InfoBox>
        );
    }

    if (activeExperience === "obi") {
        return (
            <InfoBox $marginTop={marginTop} $timeTransition={timeTransition}>
                <h2>Olímpiada Brasileira de Programação</h2>
                <h3>(OBI) | 2024</h3>
                <Line />

                <div style={{ width: "calc(98%)", textAlign: "start" }}>
                    <p style={{fontSize: "17px"}}>
                        Durante a minha participação na Olimpíada Brasileira de Informática (OBI), tive a oportunidade de aprimorar e expandir significativamente minhas habilidades em algoritmos e resolução de problemas. 
                        A experiência foi extremamente enriquecedora, pois me permitiu aplicar de forma prática os conceitos de lógica de programação e estruturas de dados que venho aprendendo ao longo da minha formação.
                    </p>
                    <p style={{fontSize: "17px"}}>
                        Ao longo das fases da OBI, fui desafiado a resolver uma série de problemas complexos que exigiram o uso de algoritmos eficientes para manipulação de grandes volumes de dados, otimização de tempo e 
                        espaço e resolução de problemas matemáticos e computacionais. Trabalhei com estruturas como listas, pilhas, filas, árvores, grafos e algoritmos de busca e ordenação, sempre buscando soluções rápidas e eficazes.
                    </p>
                    <h4>Resultado</h4>
                    <p>Alcancei a <strong>Fase Nacional</strong> (3° Fase)</p>
                </div>
            </InfoBox>
        );
    }

    if (activeExperience === "oboi") {
        return (
            <InfoBox $marginTop={marginTop} $timeTransition={timeTransition}>
                <h2>Olímpiada Brasileira Online de Programação</h2>
                <h3>(OBOI) | 2024</h3>
                <Line />

                <div style={{ width: "calc(98%)", textAlign: "start" }}>
                    <p style={{fontSize: "16.5px"}}>
                        Ao longo da OBOI, enfrentei uma série de desafios que exigiam o uso de algoritmos avançados e técnicas de otimização para lidar
                        com problemas que envolviam grandes volumes de dados, além de questões de desempenho e escalabilidade. Durante as provas, trabalhei
                        com estruturas de dados como listas, pilhas, filas, árvores e grafos, aplicando algoritmos de busca, ordenação e divisão e conquista.
                    </p>
                    <p style={{fontSize: "16.5px"}}>
                        A OBOI foi uma oportunidade valiosa para testar meus conhecimentos em um ambiente competitivo e, ao mesmo tempo, aprender a pensar de
                        forma mais estratégica, desenvolvendo uma visão mais ampla de como resolver problemas de forma otimizada e com foco em resultados. 
                        A experiência me proporcionou uma base sólida que, sem dúvida, será útil em desafios futuros, tanto no meio acadêmico quanto no mercado de trabalho.
                    </p>
                    <h4>Resultado</h4>
                    <p>Conquistei uma medalha de <strong>BRONZE</strong></p>
                </div>
            </InfoBox>
        );
    }
}
