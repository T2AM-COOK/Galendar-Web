import React, { useEffect, useState, useRef } from "react";
import * as S from "./indexStyle";

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgData = ["/images/bannerImg.svg", "/images/hackerground.svg"];
  const slideCount = imgData.length;

  const intervalRef = useRef(null);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slideCount]);

  const handleSlideButtonClick = (index) => {
    setCurrentIndex(index);
    startInterval();
  };

  return (
    <S.Container>
      <S.ContestWrapper currentIndex={currentIndex} slideCount={slideCount}>
        {imgData.map((img, index) => (
          <S.Contest key={index} img={img} />
        ))}
      </S.ContestWrapper>
      <S.SlideWrapper>
        {imgData.map((_, index) => (
          <S.SlideButton
            key={index}
            currentIndex={currentIndex}
            index={index}
            onClick={() => handleSlideButtonClick(index)}
          />
        ))}
      </S.SlideWrapper>
    </S.Container>
  );
};

export default AdBanner;
