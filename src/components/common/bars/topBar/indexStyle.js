import styled from "styled-components";
import { Box } from "../../main/myProfile/indexStyle";

export const Container = styled(Box)`
  background: white;
  width: 100vw;
  justify-content: space-around;
  gap: 40%;
  height: 82px;
  position: fixed;
  top: 0px;
  border-bottom: 1px solid #e6e6e6;
`;

export const Nav = styled(Box)`
  width: 30vw;
  font-size: 1.2rem;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const Text = styled.div`
  cursor: pointer;
`;

export const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;
