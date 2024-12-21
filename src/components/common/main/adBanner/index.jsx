import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgData = ["/images/bannerImg.svg", "/images/hackerground.svg"];
  const slideCount = imgData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <S.Container>
      <S.ContestWrapper currentIndex={currentIndex} slideCount={slideCount}>
        {imgData.map((i, index) => (
          <S.Contest key={index} img={i} />
        ))}
      </S.ContestWrapper>
      <S.SlideWrapper>
        {imgData.map((i, index) => (
          <S.SlideButton currentIndex={currentIndex} i={index} />
        ))}
      </S.SlideWrapper>
    </S.Container>
  );
};

export default AdBanner;
