import React from "react";
import { SiJavascript, SiRedux, SiStyledcomponents } from "react-icons/si";
import {
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaReact,
    FaSass,
    FaBootstrap,
} from "react-icons/fa";

import styled from "styled-components";
import { GloCenter } from "../../styles/GlobalStyles";

const ScLogos = styled.div`
    ${GloCenter};
    width: 100vw;
    height: 500px;

    .logosContainer {
        display: flex;
        flex-wrap: wrap;
        width: 80%;

        p {
            margin: 2rem;
            font-size: 50px;
        }
    }
`;

const Logos = () => {
    return (
        <ScLogos>
            <div className="logosContainer">
                <p>
                    <FaHtml5 />
                </p>
                <p>
                    <FaCss3Alt />
                </p>
                <p>
                    <SiJavascript />
                </p>
                <p>
                    <FaGithub />
                </p>
                <p>
                    <FaReact />
                </p>
                <p>
                    <SiRedux />
                </p>
                <p>
                    <FaBootstrap />
                </p>
                <p>
                    <FaSass />
                </p>
                <p>
                    <SiStyledcomponents />
                </p>
            </div>
        </ScLogos>
    );
};

export default Logos;

//  <p><SiMaterialui /></p>
// <p><SiJest /></p>
