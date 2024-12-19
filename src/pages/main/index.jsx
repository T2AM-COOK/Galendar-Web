import React from "react";
import * as S from "./indexStyle";
import Topbar from "../../components/common/bars/topBar";
import MainCalendar from "../../components/common/calendar";
import RecommendBoxLength from "../../components/common/recommend/length";

const Main = () => {
  return (
    <S.Container>
      <Topbar />
      <S.Content>
        <S.Contents>
          <MainCalendar />
          <RecommendBoxLength />
        </S.Contents>
        <S.Banner>
          <img src="/images/whitelogo.svg" />
        </S.Banner>
      </S.Content>
    </S.Container>
  );
};
export default Main;
