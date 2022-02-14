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


/* SMOOTHSHOW ANIMATION */
.smoothShow {
	-webkit-animation: smooth-show 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: smooth-show 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes smooth-show {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes smooth-show {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

/* ROOT COLOR */

:root, .light-theme {
    --primary-color: #212121;
    --primary-bg: #fff;
    --primary-boxShadow: 0 0 5px rgba(0, 0, 0, 0.2);
    --col-brand: #ff69b4;
    --col-brand-darker: #c04e87;
    --col-white: #fff;
    --col-black: black;
    --col-gray: gray;
    --col-lightgray: lightgray;
  }

  .dark-theme {
    --primary-color: #fff;
    --primary-bg: #212121;
    --primary-boxShadow: 0 0 5px rgba(255, 255, 255, 0.377);
  }

`;

// FUNCTIONS -----------------------------------
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

export const GloPaddingSm = () => {
    return css`
        padding: 2rem 6rem;

        @media screen and (max-width: 700px) {
            padding: 2rem;
        }

        @media screen and (max-width: 550px) {
            padding: 1.5rem 1rem;
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
// SMOOTH ANIMATION
// .scale-up-center {
// 	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// 	animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
// }

// @-webkit-keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }

// @keyframes scale-up-center {
//   0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//   }
// }

// NOTES ----------------------------------------------
