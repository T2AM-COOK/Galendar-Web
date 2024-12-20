import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 256px;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-right: 1px solid #e6e6e6;
`;

export const LogoImage = styled.img`
  cursor: pointer;
  margin-top: 1vw;
  -webkit-user-drag: none;
`;
