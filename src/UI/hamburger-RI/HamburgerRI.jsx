import React from "react";
import styled from "styled-components";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const ScHamburgerRI = styled.div``;

const HamburgerRI = ({ toggleMenu, setToggleMenu, Menu }) => {
    return (
        <ScHamburgerRI>
            {toggleMenu ? (
                <RiCloseLine
                    color="var(--primary-color)"
                    size={27}
                    onClick={() => setToggleMenu(false)}
                />
            ) : (
                <RiMenu3Line
                    color="var(--primary-color)"
                    size={27}
                    onClick={() => setToggleMenu(true)}
                />
            )}
            {toggleMenu && (
                <div className="navbarMenu-container smoothShow">
                    <Menu />
                </div>
            )}
        </ScHamburgerRI>
    );
};

export default HamburgerRI;
