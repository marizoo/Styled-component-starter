import React from "react";
import Button from "../../UI/button/Button";
import Hamburger1 from "../../UI/hamburger1/Hamburger1";
// import HamburgerRI from "../../UI/hamburger-RI/HamburgerRI";

import { ScNavbar } from "./navbar.styled";

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#about">About</a>
        </p>
        <p>
            <a href="#works">Works</a>
        </p>
        <p>
            <a href="#blog">Blog</a>
        </p>
        <p>
            <a href="#contact">Contact Me</a>
        </p>
    </>
);

const Navbar = ({ toggleMenu, setToggleMenu }) => {
    return (
        <ScNavbar>
            <div className="navbarLogo">
                <h2>LOGO</h2>
            </div>
            <div className="navbarLinks">
                <div className="navbarButton">
                    <Button brand>CONTACT ME</Button>
                </div>
                <div className="navbarMenu">
                    {/* <HamburgerRI
                        Menu={Menu}
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                    /> */}
                    <Hamburger1
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                    />
                </div>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
