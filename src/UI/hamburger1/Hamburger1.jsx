import React from "react";
import styled from "styled-components";

const ScHamburger1 = styled.div`
    cursor: pointer;
    margin-right: 35px;
    width: 32px;
    height: 25px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;

    .line1 {
        width: 100%;
        height: 3px;
        background: var(--primary-color);
        transition: all 1s ease;
        transform-origin: left;

        &.active {
            transform: rotate(45deg);
            background-color: var(--primary-color);
        }
    }

    .line2 {
        width: 100%;
        height: 3px;
        background-color: var(--primary-color);
        transition: all 1s ease;

        &.active {
            opacity: 0;
        }
    }

    .line3 {
        width: 100%;
        height: 3px;
        background-color: var(--primary-color);
        transition: all 1s ease;
        transform-origin: left;

        &.active {
            transform: rotate(-45deg);
            background-color: var(--primary-color);
        }
    }
`;

const Hamburger1 = ({ toggleMenu, setToggleMenu }) => {
    return (
        <ScHamburger1 onClick={() => setToggleMenu(!toggleMenu)}>
            <span className={toggleMenu ? "line1 active" : "line1"}></span>
            <span className={toggleMenu ? "line2 active" : "line2"}></span>
            <span className={toggleMenu ? "line3 active" : "line3"}></span>
        </ScHamburger1>
    );
};

export default Hamburger1;
