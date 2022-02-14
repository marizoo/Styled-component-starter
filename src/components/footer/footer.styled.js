import styled from "styled-components";
import { GloCenter, GloColumn, GloPaddingSm } from "../../styles/GlobalStyles";

export const ScFooter = styled.div`
    width: 100vw;
    background: var(--primary-bg);
    color: var(--primary-color);
    ${GloCenter};
    ${GloPaddingSm};
    ${GloColumn};
    line-height: 1.6rem;
    border-top: var(--primary-color);
`;
