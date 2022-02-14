import React from "react";
import styled from "styled-components";

const ScMenu1 = styled.div`
    height: 100vw;
    width: 210px;
    z-index: 5;
    background: var(--primary-bg);
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    position: fixed;
    transition: 1s all ease;
    right: -300px;
    box-shadow: var(--primary-boxShadow);

    &.active {
        right: 0;
    }

    ul {
        list-style: none;
        width: 80%;
        height: 20%;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: var(--primary-color);

        li {
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
                color: var(--col-brand);
            }

            color: inherit;
            text-decoration: none;
            font-size: 20px;
            font-weight: 300;
            cursor: pointer;
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
