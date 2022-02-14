import React from "react";
import styled, { css } from "styled-components";
import { GloSmall } from "../../styles/GlobalStyles";

const ScButton = styled.button`
    padding: 3px 20px;
    border: 0;
    cursor: pointer;
    background: lightgray;
    color: black;
    border-radius: 5px;
    font-weight: 500;
    margin: 5px 0;
    transition: all 0.3s ease;
    display: flex;
    font-size: 16px;

    ${GloSmall({ fontSize: "12px", fontWeight: "300", background: "green" })};

    &:hover {
        background: gray;
    }

    ${(props) =>
        props.brand &&
        css`
            background: var(--brand-color);
            color: white;

            &:hover {
                background: var(--brand-color1);
            }
        `};

    ${(props) =>
        props.outline &&
        css`
            border: 1.5px solid var(--brand-color);
            color: var(--brand-color);
            background: 0;

            &:hover {
                background: var(--brand-color);
                color: black;
            }
        `};
`;

const Button = ({ children, onClick, type, brand, outline }) => {
    return (
        <ScButton
            brand={brand}
            outline={outline}
            onClick={onClick}
            type={type || "button"}
        >
            {children}
        </ScButton>
    );
};

export default Button;
