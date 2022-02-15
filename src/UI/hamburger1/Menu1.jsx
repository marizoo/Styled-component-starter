import React from "react";
import styled from "styled-components";
import { GloMedium, GloSmall } from "../../styles/GlobalStyles";

const ScMenu1 = styled.div`
    height: 100vh;
    z-index: 5;
    background: var(--col-lightgray);
    display: flex;
    justify-content: center;
    position: fixed;
    box-shadow: var(--primary-boxShadow);
    right: -300px;
    transition: all 1s ease;
    width: 250px;
    ${GloSmall({ height: "350px", width: "580px", alignItems: "center" })}
    ${GloMedium({ height: "350px", width: "800px", alignItems: "center" })}

    &.active {
        right: 0;
    }

    ul {
        list-style: none;
        width: 85%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: end;
        color: var(--col-gray);

        li {
            transition: all 0.3s ease;
            cursor: pointer;
            color: inherit;
            text-decoration: none;
            font-size: 20px;
            font-weight: 400;
            letter-spacing: 1px;
            margin: 1.2rem 0;
            cursor: pointer;
            &:hover {
                color: var(--col-brand);
            }
        }
    }
`;

const Menu1 = ({ toggleMenu, setToggleMenu }) => {
    const closeMenu = () => {
        setToggleMenu(false);
    };
    return (
        <>
            {toggleMenu && (
                <ScMenu1 className={toggleMenu && "active"}>
                    <ul>
                        <li onClick={closeMenu}>
                            <a href="#about">About</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#blog">Blog</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#testimonial">Testimonial</a>
                        </li>
                        <li onClick={closeMenu}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </ScMenu1>
            )}
        </>
    );
};

export default Menu1;
