import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container slideCount={slideCount}>
      <S.ContestWrapper currentIndex={currentIndex} slideCount={slideCount}>
        <S.Contest img={"/images/logo.svg"} />
        <S.Contest style={{ background: "red" }} />
        <S.Contest style={{ background: "blue" }} />
      </S.ContestWrapper>
    </S.Container>
  );
};

export default AdBanner;
