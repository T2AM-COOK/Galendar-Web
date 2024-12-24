import styled from "styled-components";

export const Main = styled.div`
  background-image: url("/images/about.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: -0.5px;
  animation-duration: 1s;
`;

export const Title = styled.div`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
  font-size: 40px;
  font-weight: 600;
  animation-duration: 4s;
  animation-name: Nav;
  @keyframes Nav {
    from {
      margin-top: 10vh;
    }

    to {
      margin-top: 0vh;
    }
  }
`;

export const Hr = styled.hr`
  width: 20%;
  animation-duration: 5s;
  animation-name: H;
  @keyframes H {
    from {
      width: 0%;
    }

    to {
      width: 20%;
    }
  }
`;

export const MainContainer = styled.div`
  width: 40vw;
  height: 80%;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation-duration: 2s;
  animation-name: Open;
  transition-timing-function: ease-in-out;
  @keyframes Open {
    from {
      width: 0vw;
    }

    to {
      width: 40vw;
    }
  }
`;

export const Text = styled.div`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
  font-family: "Pretendard", sans-serif !important;
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.5px;
  animation-duration: 5s;
  animation-name: Text;
  transition-timing-function: ease-in-out;
  @keyframes Text {
    from {
      opacity: 0;
    }

    to {
      opacity: 100;
    }
  }
`;

export const Bottom = styled.div`
  gap: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
