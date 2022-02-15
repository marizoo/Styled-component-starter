import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import Hero from "./components/hero/Hero";
import ToggleTheme from "./UI/toggleTheme/ToggleTheme";
import Logos from "./UI/logos/Logos";
import Menu1 from "./UI/hamburger1/Menu1";
import Carousel from "./components/carousel/Carousel";

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

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
                <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                <Menu1 toggleMenu={toggleMenu} />
                <Hero />
                <Carousel>
                    <img
                        src="https://via.placeholder.com/1600x300"
                        alt="placeholder"
                    />
                    <img
                        src="https://via.placeholder.com/1600x300"
                        alt="placeholder"
                    />
                    <img
                        src="https://via.placeholder.com/1600x300"
                        alt="placeholder"
                    />
                </Carousel>
                <Logos />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;
