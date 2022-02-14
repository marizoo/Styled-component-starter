import React from "react";
import Button from "../../UI/button/Button";
import { ScNavbar } from "./navbar.styled";

const Navbar = () => {
    return (
        <ScNavbar>
            <h1>THIS IS THE NAV BAR</h1>
            <h1>testing</h1>
            <h1>column and buttons</h1>
            <Button>just button</Button>
            <Button brand>brand button</Button>
            <Button outline> outline button</Button>
        </ScNavbar>
    );
};

export default Navbar;
