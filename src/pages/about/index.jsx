import React from "react";
import * as S from "./indexStyle";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <S.Main>
      <S.TitleContainer>
        <S.Title>ABOUT 갈랜더</S.Title>
        <S.Hr />
      </S.TitleContainer>
      <S.MainContainer>
        <S.Text >
          <div>학교 홈페이지에 올라오는 대회 안내,</div>{" "}
          <div>학교 곳곳에 붙어있는 대회 포스터,</div>{" "}
          <div>단체 카카오워크 방에 올라오는 대회 안내</div>
          <br /> <div>이렇게 대회 공지가 올라오는 게 불편했다고요?</div>
        </S.Text>
        <S.Text style={{ fontWeight: "600", fontSize: "24px" }}>
          <div>이제 ‘갈랜더’로 대회 준비를</div>{" "}
          <div>더욱 쉽고 간편하게 하세요!</div>{" "}
          <div> 갈랜더로 대회 일정을 찾고 대회 관리를 해 보세요!</div>
        </S.Text>
        <S.Bottom>
          <div>
            <S.Text style={{ fontWeight: "800" }}>T2AM COOK</S.Text>
            <S.Text style={{ fontWeight: "400" }}>
              김성한, 김시원, 박민규 서진교, 이유진
            </S.Text>
          </div>
          <img
            src="/images/blacklogo.svg"
            width={107}
            onClick={() => navigate("/main")}
          />
        </S.Bottom>
      </S.MainContainer>
    </S.Main>
  );
};

export default About;
