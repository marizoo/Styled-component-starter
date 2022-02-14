import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import Hero from "./components/hero/Hero";
import ToggleTheme from "./UI/toggleTheme/ToggleTheme";

const ScApp = styled.div`
    width: 100vw;
    background: var(--primary-bg);
    color: var(--primary-color);
    position: relative;
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
                <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
                <Navbar />
                <Hero />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;
