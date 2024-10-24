import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import Sidebar from "../../components/common/bars/sideBar";
import { JoinSet, TimeSet } from "../../components/common/createElem/dates";
import {
  Fee,
  Join,
  Region,
} from "../../components/common/createElem/selections";
import axios from "axios";

const CreateContest = () => {
  const [changeImg, setChangeImg] = useState();
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [link, setLink] = useState();

  const contestData = {
    title: title,
    detail: detail,
    link: link,
    image: changeImg,
  };

  const isCreateReady = () => {
    return changeImg && title && detail && link;
  };

  const createContest = async () => {
    if (isCreateReady()) {
      try {
        const res = await axios.post(
          "https://3.37.189.59:8080/이름",
          contestData
        );
        if (res) {
          alert("대회 생성완료");
          localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
        }
      } catch {
        alert("에러가 발생했습니다.");
      }
    }
  };

  const change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChangeImg(URL.createObjectURL(file));
    }
  };

  return (
    <S.Div>
      <Sidebar />
      <S.Content>
        <S.Form>
          <S.CreateContest>대회 생성</S.CreateContest>
          <S.Hr />
          <S.FormName>대회 이름</S.FormName>
          <S.NameField
            placeholder="대회 이름을 입력해주세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.FormName>대회 내용</S.FormName>
          <S.TextField
            placeholder="대회 내용을 입력해주세요"
            onChange={(e) => setDetail(e.target.value)}
          />
          <S.FormName>접수 기간</S.FormName>
          <JoinSet />
          <S.FormName>대회 기간</S.FormName>
          <TimeSet />
          <S.FormName>참가 대상</S.FormName>
          <Join />
          <S.FormName>지역</S.FormName>
          <Region />
          <S.FormName>참가 비용</S.FormName>
          <Fee />
          <S.FormName>링크</S.FormName>
          <S.NameField
            placeholder="링크를 입력해주세요."
            onChange={(e) => setLink(e.target.value)}
          />
          <S.FormName>포스터 사진</S.FormName>
          <S.PosterContainer>
            <S.Poster htmlFor="file">업로드</S.Poster>
            최대 용량은 1MB입니다.
          </S.PosterContainer>
          <p
            style={{
              width: "284px",
              height: "224px",
              border: "3px dotted #2B32B2",
            }}
          >
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={change}
            />
            {changeImg && (
              <img
                src={changeImg}
                alt="이미지가 아닙니다."
                style={{ width: "284px", height: "224px", marginTop: "10px" }}
              />
            )}
          </p>
          <S.ButtonContainer>
            <S.Button
              style={
                isCreateReady()
                  ? {
                      backgroundColor: "#2B32B2",
                      color: "white",
                      border: "0px",
                    }
                  : {
                      backgroundColor: "white",
                      color: "#2B32B2",
                      border: "1px solid #2B32B2",
                    }
              }
              onClick={createContest}
            >
              대회 생성
            </S.Button>
          </S.ButtonContainer>
        </S.Form>
      </S.Content>
    </S.Div>
  );
};

export default CreateContest;
