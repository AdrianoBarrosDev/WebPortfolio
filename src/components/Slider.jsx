import React, { useState } from "react";
import styled from "styled-components";
import "../styles/Global.css";
import "../styles/Slider.css";
import { Elipse } from "./GeometricForms";
import { InfoAI, InfoCompetitive, InfoSoftware, InfoWeb } from "./InfoBoxSlider";
import { TextBox } from "./TextBox";


// Styled Project Button
const SliderButton = styled.button`
    width: 60px;
    height: 60px;
    margin: 0px 18px;
    background-color: #9696A6;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    position: relative;
    z-index: 2;
    transition: transform 0.2s ease;
    cursor: pointer;

    img {
        width: auto;
        height: auto;
        position: absolute;
        top: 20%;
        left: 30%;
        transform: rotate(360deg);
    }

    /* Styles to the loading circle*/
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
        border: 30px solid #2D2E4D;
        border-radius: 50%;
        outline: none;
        transform: translate(-50%, -50%);
        opacity: 0; /* Initialy invisible */
    }

    /* Effects on hover */
    &:hover {
        transform: translateY(-10px);
    }
    &:hover::before {
        animation: spin 0.4s linear 1 forwards;
        opacity: 1; /* Make the circle visible */
    }

    /* Rotation Animation */
    @keyframes spin {
        0% {
            transform: translate(-50%, -50%) rotate(90deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(540deg);
            border: 2px solid #9696A6;
        }
    }
`;



export function SliderPortfolio() {
    
    // Fixed Positions (ndexes represent the order of elements in the array)
    const positions = ["sideLeft", "center", "sideRight", "back"];
    const boxTypes = ["boxSides", "box", "boxSides", "boxSides"];
    const infoTypes = ["infoBoxSides", "infoBox", "infoBoxSides", "infoBoxSides"];

    // Initial state of elements in the slider
    const [order, setOrder] = useState([
        { id: "boxCompetitive", component: <InfoCompetitive infoType={"infoBoxSides"}/> },
        { id: "boxWeb", component: <InfoWeb infoType={"infoBox"}/> },
        { id: "boxSoftware", component: <InfoSoftware infoType={"infoBoxSides"}/> },
        { id: "boxBack", component: <InfoAI infoType={"infoBoxSides"}/> }
    ]);

    // Function to rotate the elements to left
    const moveLeft = () => {
        setOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            newOrder.push(newOrder.shift()); // Move the first element to the end
            return newOrder;
        });
    };

    // Function to rotate the elements to right
    const moveRight = () => {
        setOrder((prevOrder) => {
            const newOrder = [...prevOrder];
            newOrder.unshift(newOrder.pop()); // Move the last element to the beginning
            return newOrder;
        });
    };

    return (
        <div className="row position-relative overflow-y-hidden d-none d-lg-block" style={{ margin: "57px 0px 0px 0px" }}>
            <div className="row d-flex justify-content-center align-items-center p-0">

                {/* Dynamically render the TextBoxes, applying the new tipes (positions) */}
                {order.map((item, index) => {

                    return (
                        <React.Fragment key={`button-right-${index}`}>
                            {index === 1 && <SliderButton onClick={moveLeft}>
                                    <img src="../../images/ButtonSlider.png" alt="Arrow"/>
                                </SliderButton>
                            }

                            {index === 2 && <SliderButton onClick={moveRight}>
                                    <img src="../../images/ButtonSlider.png" alt="Arrow" style={{transform: "rotate(180deg)", left: "36%"}}/>
                                </SliderButton>
                            }

                            <TextBox key={item.id} id={item.id} type={positions[index]} class={boxTypes[index]}>
                                {React.cloneElement(item.component, { infoType: infoTypes[index] })}
                            </TextBox>
                        </React.Fragment>
                    );

                })}

                {/* Purple Elipse */}
                <Elipse />

            </div>
        </div>
    );
}
