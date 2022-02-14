import React, { useState } from "react";
import Button from "../../UI/button/Button";
import { ScNavbar } from "./navbar.styled";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

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

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

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
                </div>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
