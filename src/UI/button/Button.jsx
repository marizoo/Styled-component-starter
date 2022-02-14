import React from "react";
import styled, { css } from "styled-components";
import { GloSmall } from "../../styles/GlobalStyles";

const ScButton = styled.button`
    padding: 3px 20px;
    border: 0;
    cursor: pointer;
    background: var(--col-lightgray);
    color: var(--col-black);
    border-radius: 5px;
    font-weight: 500;
    margin: 5px 0;
    transition: all 0.3s ease;
    display: flex;
    font-size: 16px;

    ${GloSmall({ fontSize: "12px", fontWeight: "300", background: "green" })};

    &:hover {
        background: var(--col-gray);
        color: var(--col-white);
    }

    ${(props) =>
        props.brand &&
        css`
            background: var(--col-brand);
            color: var(--col-black);

            &:hover {
                background: var(--col-brand-darker);
                color: var(--col-white);
            }
        `};

    /* hotpink: #ff69b4;
    hotpink darker: #c04e87; */

    ${(props) =>
        props.outline &&
        css`
            /* border: 1.5px solid var(--brand-color); */
            border: 1.5px solid #ff69b4;
            color: var(--col-brand);
            background: 0;

            &:hover {
                background: var(--col-brand-darker);
                color: var(--col-white);
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

// HOW TO USE:
// <Button>just button</Button>
//<Button brand>brand button</Button>
//<Button outline> outline button</Button>
