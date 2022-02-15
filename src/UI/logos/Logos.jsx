import React from "react";
import {
    SiJavascript,
    SiRedux,
    SiStyledcomponents,
    SiHashnode,
    SiTwitter,
    SiInstagram,
} from "react-icons/si";
import {
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaReact,
    FaSass,
    FaBootstrap,
    FaMedium,
    FaDev,
    FaYoutube,
    FaPinterest,
} from "react-icons/fa";

import styled from "styled-components";
import { GloCenter } from "../../styles/GlobalStyles";

const ScLogos = styled.div`
    ${GloCenter};
    width: 100vw;

    .logosContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;

        &__top {
            display: flex;
            flex-direction: column;
        }

        &__1 {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;

            &__title {
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            &__logos {
                display: flex;
            }
        }
        &__2 {
            display: flex;
            flex-direction: column;
            &__title {
                display: flex;
                align-items: center;
                justify-content: center;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            &__logos {
                display: flex;
            }
        }
        &__3 {
            display: flex;
            flex-direction: column;

            &__logos {
                display: flex;
            }
        }
        &__4 {
            display: flex;
            flex-direction: column;

            &__logos {
                display: flex;
            }
        }

        p {
            margin: 2rem;
            font-size: 40px;
        }
    }
`;

const Logos = () => {
    return (
        <ScLogos>
            <div className="logosContainer">
                <div className="logosContainer__top">
                    <h3 className="logosContainer__top__title">
                        My most used tech stacks
                    </h3>
                </div>
                <div className="logosContainer__1">
                    <div className="logosContainer__1__title">
                        For Vanilla Flavored Websites
                    </div>
                    <div className="logosContainer__1__logos">
                        <p>
                            <FaHtml5 />
                        </p>
                        <p>
                            <FaCss3Alt />
                        </p>
                        <p>
                            <FaSass />
                        </p>
                        <p>
                            <SiJavascript />
                        </p>
                    </div>
                </div>
                <div className="logosContainer__2">
                    <div className="logosContainer__2__title">
                        For React Websites & Apps
                    </div>
                    <div className="logosContainer__2__logos">
                        <p>
                            <FaReact />
                        </p>
                        <p>
                            <SiStyledcomponents />
                        </p>
                        <p>
                            <FaSass />
                        </p>
                    </div>
                </div>
                <div className="logosContainer__3">
                    <h3 className="logosContainer__3__title">
                        I am familiar with using
                    </h3>
                </div>
                <div className="logosContainer__3__logos">
                    <p>
                        <SiRedux />
                    </p>
                    <p>
                        <FaBootstrap />
                    </p>
                </div>
                <div className="logosContainer__4">
                    <h3 className="logosContainer__4__title">
                        I save all my works on
                    </h3>
                </div>
                <div className="logosContainer__4__logos">
                    <p>
                        <FaGithub />
                    </p>
                </div>
                <div className="logosContainer__4">
                    <h3 className="logosContainer__4__title">
                        I write when I can on
                    </h3>
                </div>
                <div className="logosContainer__4__logos">
                    <p>
                        <SiHashnode />
                    </p>
                    <p>
                        <FaMedium />
                    </p>
                    <p>
                        <FaDev />
                    </p>
                </div>
                <div className="logosContainer__4">
                    <h3 className="logosContainer__4__title">
                        Sometimes, I creep around & slide on DMs:
                    </h3>
                </div>
                <div className="logosContainer__4__logos">
                    <p>
                        <SiTwitter />
                    </p>
                    <p>
                        <SiInstagram />
                    </p>
                    <p>
                        <FaYoutube />
                    </p>
                    <p>
                        <FaPinterest />
                    </p>
                </div>
            </div>
        </ScLogos>
    );
};

export default Logos;

//  <p><SiMaterialui /></p>
// <p><SiJest /></p>
