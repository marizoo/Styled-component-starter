import styled from "styled-components";
import { GloMedium, GloPaddingSm, GloSmall } from "../../styles/GlobalStyles";

export const ScNavbar = styled.div`
    ${GloPaddingSm};
    background: var(--primary-bg);
    width: 100vw;
    color: var(--primary-color);
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-color);
    ${GloMedium({ flexDirection: "column" })}

    .navbarLogo {
        h2 {
            color: var(--col-brand);
        }
        ${GloMedium({ marginBottom: "1rem" })}
    }

    .navbarLinks {
        display: flex;
        align-items: center;

        .navbarButton {
        }

        .navbarMenu {
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 1rem;
            ${GloMedium({ marginLeft: "5rem" })};
            ${GloSmall({ marginLeft: "3rem" })};

            .navbarMenu-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                text-align: end;
                background: var(--primary-bg);
                padding: 2rem;
                margin-top: 1rem;
                border-radius: 5px;
                box-shadow: var(--primary-boxShadow);
                transition: all 0.3s ease;
                position: absolute;
                min-width: 210px;
                top: 70px;
                right: 90px;
                ${GloMedium({ top: "60px", right: "70px", minWidth: "180px" })};
                ${GloSmall({ top: "100px", right: "30px", minWidth: "180px" })};
            }

            .navbarMenu-container p {
                margin: 1rem 0;
                transition: all 0.3s ease;

                &:hover {
                    color: var(--col-brand);
                }
            }
        }
    }
`;
