import React, { useState, useEffect } from "react";
// import CarouselContent from "../carouselContent/CarouselContent";
import { ScCarousel } from "./carousel.styled";

// carousel arrays
const items = [
    {
        id: "001",
        title: "I LOVE CHEESE CAKE",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eum assumenda fugit animi repellat, repudiandae reiciendis culpa ullam soluta ab non",
    },
    {
        id: "002",
        title: "TACOS EVERY TUESDAY",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eum assumenda fugit animi repellat, repudiandae reiciendis culpa ullam soluta ab non",
    },
    {
        id: "003",
        title: "CHEESE BURGERS AND FRIES",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eum assumenda fugit animi repellat, repudiandae reiciendis culpa ullam soluta ab non",
    },
    {
        id: "004",
        title: "PINEAPPLES ON PIZZAS",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eum assumenda fugit animi repellat, repudiandae reiciendis culpa ullam soluta ab non",
    },
    {
        id: "005",
        title: "LASAGNA BABY",
        subtitle:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione eum assumenda fugit animi repellat, repudiandae reiciendis culpa ullam soluta ab non",
    },
];

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    // touchstart
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    // touchmove
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    return (
        <ScCarousel>
            <div className="carousel">
                <div className="carousel__wrapper">
                    {currentIndex > 0 && (
                        <button
                            className="carousel__wrapper__left-arrow"
                            onClick={prev}
                        >
                            &lt;
                        </button>
                    )}
                    <div
                        className="carousel__wrapper__content"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        {children}
                    </div>
                    {currentIndex < length - 1 && (
                        <button
                            className="carousel__wrapper__right-arrow"
                            onClick={next}
                        >
                            &gt;
                        </button>
                    )}
                </div>
            </div>
        </ScCarousel>
    );
};

export default Carousel;
