import React from "react";
import * as S from "./indexStyle";
import Topbar from "../../components/common/bars/topBar";
import MainCalendar from "../../components/common/calendar";
import RecommendBoxLength from "../../components/common/recommend/length";

const Main = () => {
  return (
    <div style={{ height: "130vh", width: "100%" }}>
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
    </div>
  );
};
export default Main;
