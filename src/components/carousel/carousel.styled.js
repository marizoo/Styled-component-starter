import styled from "styled-components";

export const ScCarousel = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    .carousel {
        display: flex;
        width: 100%;
        position: relative;

        &__wrapper {
            overflow: hidden;
            width: 100%;
            height: 100%;

            &__left-arrow,
            &__right-arrow {
                position: absolute;
                z-index: 1;
                top: 50%;
                transform: translateY(-50%);
                width: 48px;
                height: 48px;
                border-radius: 24px;
                background-color: var(--primary-bg);
                color: var(--primary-color);
                border: 1px solid #ddd;
            }

            &__left-arrow {
                left: 24px;
            }
            &__right-arrow {
                right: 24px;
            }

            @media (hover: none) and (pointer: coarse) {
                &__left-arrow,
                &__right-arrow {
                    display: none;
                }
            }

            &__content {
                display: flex;
                transition: all 250ms linear;
                -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
                scrollbar-width: none; /* hide scrollbar in Firefox */

                &::-webkit-scrollbar,
                &::-webkit-scrollbar {
                    display: none;
                }

                & > * {
                    width: 100%;
                    flex-shrink: 0;
                    flex-grow: 1;
                }
            }
        }
    }
`;
