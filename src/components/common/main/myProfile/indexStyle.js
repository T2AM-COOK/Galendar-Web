import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  height: 25%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: ${(props) =>
    props.user !== "" ? "space-between" : "center"};
  align-items: center;
  font-size: 1.4rem;
`;

export const ProfileWrapper = styled(Box)`
  width: 65%;
  margin-top: 12%;
`;

export const ProfileDetail = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 1rem;
`;

export const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const Bottom = styled(Box)`
  justify-content: space-around;
  width: 100%;
  height: 25%;
`;

export const BottomOption = styled(Box)`
  background-color: #f9f9f9;
  width: 50%;
  height: 100%;
  justify-content: center;
  font-size: 1rem;

  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;
