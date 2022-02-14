import React from "react";
import styled from "styled-components";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { GloMedium, GloSmall } from "../../styles/GlobalStyles";

const ScToggleTheme = styled.div`
    font-size: 30px;
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    ${GloMedium({ fontSize: "25px" })};
    ${GloSmall({ fontSize: "18px" })};
`;

const ToggleTheme = ({ onToggleTheme, mainCss }) => {
    return (
        <ScToggleTheme onClick={onToggleTheme}>
            {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}
        </ScToggleTheme>
    );
};

export default ToggleTheme;
