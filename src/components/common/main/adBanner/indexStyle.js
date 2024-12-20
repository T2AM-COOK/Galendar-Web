import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 112px;
  margin-bottom: 30px;
  overflow: hidden;
`;

export const ContestWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
  width: ${(props) => `${props.slideCount * 100}%`};
  transform: translateX(${(props) => `-${props.currentIndex * 100}%`});
`;

export const Contest = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-position: center;
  flex: 1 0 100%;
  cursor: pointer;
`;
