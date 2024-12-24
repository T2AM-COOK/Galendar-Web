import React from "react";
import * as S from "./indexStyle";
import Topbar from "../../components/common/bars/topBar";
import RecommendBox from "../../components/common/main/recommend";
import MyProfile from "../../components/common/main/myProfile";
import AdBanner from "../../components/common/main/adBanner";
import Banner from "../../components/common/bars/banner";
import MainCalendar from "../../components/common/main/calendar";

const Main = () => {
  return (
    <S.Container>
      <S.TopContent>
        <AdBanner />
        <MyProfile />
      </S.TopContent>
      <Topbar />
      <S.Content>
        <S.Contents>
          <MainCalendar />
          <S.SideContainer>
            <RecommendBox />
          </S.SideContainer>
        </S.Contents>
        <Banner />
      </S.Content>
    </S.Container>
  );
};
export default Main;
