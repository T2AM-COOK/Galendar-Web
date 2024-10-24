import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  background-color: #f9f9f9;
`;

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
`;

export const Content = styled.div`
  margin-left: 90px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  @font-face {
    font-family: "Paperlogy";
    src: url("./fonts/Paperlogy-8Bold.ttf") format("truetype");
  }
  font-family: "Paperlogy";
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 399px;
  height: 160px;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 212px;
  height: 86px;
`;

export const BookMarkText = styled.div`
  margin-top: 40px;
`;
export const TopNav = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const Hr = styled.hr`
  width: 100%;
  border: 1px solid #b5b5b5;
`;

export const BookMark = styled.div`
  margin-top: 40px;
  margin-left: 90px;
`;

export const All = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookMarks = styled.div``;
