import { css, createGlobalStyle } from "styled-components";

// ALL GLOBAL STYLE
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

*,
*::before,
*::after,
body, 
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif; 
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: inherit;
}

button{
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

ul {
    list-style: none;
    color: inherit;
    margin: 0;
    padding: 0;
}

:root, .light-theme {
    --white-color: #ff0000;
    --gray-bg: lightgray;
    --brand-color: hotpink;
    --brand-color1: limegreen;
    --primary-color: #212121;
    --primary-bg: #fff;
  }

  .dark-theme {
    --primary-color: #fff;
    --primary-bg: #212121;
  }


`;

// GLOBAL CENTER AND COLUMN STYLE
// to use it :
// ${GloColumn};

export const GloCenter = () => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;
};

export const GloColumn = () => {
    return css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
};

// GLOBAL MARGIN AND PADDING
// to use it :
// ${GloPadding};
export const GloMargin = () => {
    return css`
        margin: 4rem 6rem;

        @media screen and (max-width: 700px) {
            margin: 4rem;
        }

        @media screen and (max-width: 550px) {
            margin: 4rem 2rem;
        }
    `;
};

export const GloPadding = () => {
    return css`
        padding: 4rem 6rem;

        @media screen and (max-width: 700px) {
            padding: 4rem;
        }

        @media screen and (max-width: 550px) {
            padding: 4rem 2rem;
        }
    `;
};

// MEDIA QUERIES
// to use it :
// ${GloSmall({
// 	flexDirection: "column" ,
// 	justifyContent : "space-between"
// 	})}
export const GloSmall = (props) => {
    return css`
        @media only screen and (max-width: 576px) {
            ${props}
        }
    `;
};

export const GloMedium = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
};

export const GloLarge = (props) => {
    return css`
        @media only screen and (max-width: 992px) {
            ${props}
        }
    `;
};

export const GloXL = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
    `;
};

export const GloXXL = (props) => {
    return css`
        @media only screen and (max-width: 1400px) {
            ${props}
        }
    `;
};

// NOTES -----------------------
/* Padding for media queries */
// .GloPadding{
//     padding: 4rem 6rem;
// }

// .GloMargin {
//     margin: 4rem 6rem;
// }

// @media screen and (max-width: 700px) {
//   .GloPadding {
//     padding: 4rem;
//   }

//   .GloMargin {
//     margin: 4rem;
//   }
// }

// @media screen and (max-width: 550px) {
//   .GloPadding {
//     padding: 4rem 2rem;
//   }

//   .GloMargin {
//     margin: 4rem 2rem;
//   }
// }
// NOTES ----------------------------------------------
