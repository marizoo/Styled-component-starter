import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import Button from "./UI/button/Button";
import Hero from "./components/hero/Hero";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
// import { Routes, Route, Link } from "react-router-dom";

const ScApp = styled.div`
    width: 100vw;
    background: var(--primary-bg);
    color: var(--primary-color);
`;

const ToggleButton = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    font-size: 18px;
    margin: 1rem 4rem 0 0;
`;

const App = () => {
    const [mainCss, setMainCss] = useState("light");
    const toggleTheme = () => {
        setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
    };

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <ToggleButton onClick={toggleTheme}>
                    {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}

                    {/* <Button onClick={toggleTheme}>light/dark</Button> */}
                </ToggleButton>
                <Navbar />
                <Hero />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;

// https://www.youtube.com/watch?v=377AQ0y6LPA
