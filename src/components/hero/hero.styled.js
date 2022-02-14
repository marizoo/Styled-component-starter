import styled from "styled-components";
import { GloColumn, GloPadding } from "../../styles/GlobalStyles";

export const ScHero = styled.div`
    ${GloPadding}
    ${GloColumn};
    background: var(--primary-bg);
    color: var(--primary-color);

    h2 {
        color: hotpink;
    }
`;
