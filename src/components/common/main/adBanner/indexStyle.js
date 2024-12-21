import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  margin-top: 112px;
  margin-bottom: 30px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  display: flex;
  position: relative;
`;

export const ContestWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
  width: ${(props) => `${props.slideCount * 100}vw`};
  transform: translateX(${(props) => `-${props.currentIndex * 100}vw`});
`;

export const Contest = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  height: 100%;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  box-sizing: border-box;
`;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  gap: 10px;
  width: 100%;
`;

export const SlideButton = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.currentIndex === props.index ? "#2b32b2" : "#e6e6e6"};
  border-radius: 50%;
  cursor: pointer;
`;
