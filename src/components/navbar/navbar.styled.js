import styled from "styled-components";
import { GloColumn, GloPadding } from "../../styles/GlobalStyles";

export const ScNavbar = styled.div`
    ${GloPadding};
    ${GloColumn};
    background: var(--primary-bg);
    height: 300px;
    width: 100vw;
    color: var(--primary-color);
    position: sticky;
`;
