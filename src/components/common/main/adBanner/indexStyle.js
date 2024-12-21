import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  margin-top: 112px;
  margin-bottom: 30px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const ContestWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
  width: ${(props) => `${props.slideCount * 100}%`};
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
  position: absolute;
  bottom: 20px;
  gap: 10px;
`;

export const SlideButton = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.currentIndex === props.i ? "#2b32b2" : "#e6e6e6"};
  display: flex;
  border-radius: 50%;
`;
