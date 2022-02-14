import styled from "styled-components";
import { GloPaddingSm } from "../../styles/GlobalStyles";

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

    .navbarLogo {
        h2 {
            color: var(--col-brand);
        }
    }

    .navbarLinks {
        display: flex;
        align-items: center;

        .navbarButton {
        }

        .navbarMenu {
            cursor: pointer;
            margin-left: 1rem;
            transition: all 0.3s ease;

            .navbarMenu-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                text-align: end;
                background: var(--primary-bg);
                padding: 2rem;
                position: absolute;
                top: 70px;
                right: 90px;
                margin-top: 1rem;
                min-width: 210px;
                border-radius: 5px;
                box-shadow: var(--primary-boxShadow);
                transition: all 0.3s ease;
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
