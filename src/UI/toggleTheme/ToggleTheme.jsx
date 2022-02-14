import React from "react";
import styled from "styled-components";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const ScToggleTheme = styled.div`
    font-size: 30px;
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 10;
`;

const ToggleTheme = ({ onToggleTheme, mainCss }) => {
    return (
        <ScToggleTheme onClick={onToggleTheme}>
            {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}
        </ScToggleTheme>
    );
};

export default ToggleTheme;
