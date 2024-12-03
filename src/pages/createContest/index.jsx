import React, { useState } from "react";
import * as S from "./indexStyle";
import Sidebar from "../../components/common/bars/sideBar";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import {
  Fee,
  Join,
  Region,
} from "../../components/common/createElem/selections";
import axios from "axios";
import { JoinSet, TimeSet } from "../../components/common/createElem/dates";
const getFormattedDate = () => format(new Date(), "yyyy-MM-dd");

const CreateContest = () => {
  const navgiate = useNavigate();
  const [imglink, setImgLink] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const now = new Date();
  const [submitStartDate, setSubmitStartDate] = useState(getFormattedDate);
  const [submitEndDate, setSubmitEndDate] = useState(getFormattedDate);
  const [contestStartDate, setContestStartDate] = useState(getFormattedDate);
  const [contestEndDate, setContestEndDate] = useState(getFormattedDate);
  const [cost, setCost] = useState("");
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const contestData = {
    title: title,
    content: content,
    cost: cost,
    link: link,
    imglink: imglink,
    submitStartDate: submitStartDate,
    submitEndDate: submitEndDate,
    contestStartDate: contestStartDate,
    contestEndDate: contestEndDate,
    targets: targets,
    regions: regions,
  };

  const isCreateReady = () => {
    return (
      title &&
      content &&
      cost &&
      link &&
      imglink &&
      submitStartDate &&
      submitEndDate &&
      contestStartDate &&
      contestEndDate &&
      targets &&
      regions
    );
  };

  const createContest = async () => {
    if (isCreateReady()) {
      try {
        const res = await axios.post(
          "http://3.37.189.59/contest",
          contestData,
          {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          }
        );
        if (res) {
          alert("대회 생성완료");
          navgiate("/main");
        }
      } catch {
        alert("에러가 발생했습니다.");
      }
    }
  };

  const postImage = async () => {

  }

  const change = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setImgLink(reader.result);
    };
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
            onChange={(e) => setContent(e.target.value)}
          />
          <S.FormName>접수 기간</S.FormName>
          <JoinSet
            now={now}
            submitStartDate={submitStartDate}
            submitEndDate={submitEndDate}
            setSubmitStartDate={setSubmitStartDate}
            setSubmitEndDate={setSubmitEndDate}
          />
          <S.FormName>대회 기간</S.FormName>
          <TimeSet
            now={now}
            contestStartDate={contestStartDate}
            contestEndDate={contestEndDate}
            setContestStartDate={setContestStartDate}
            setContestEndDate={setContestEndDate}
          />
          <S.FormName>참가 대상</S.FormName>
          <Join targets={targets} setTargets={setTargets} />
          <S.FormName>지역</S.FormName>
          <Region regions={regions} setRegions={setRegions} />
          <S.FormName>참가 비용</S.FormName>
          <Fee setCost={setCost} />
          <S.FormName>링크</S.FormName>
          <S.NameField
            type="text"
            placeholder="링크를 입력해주세요."
            onChange={(e) => setLink(e.target.value)}
          />
          <S.FormName>포스터 사진</S.FormName>
          <p
            style={{
              width: "284px",
              height: "224px",
              border: "3px dotted #2B32B2",
              borderRadius: "3px",
            }}
          >
            <S.Poster
              htmlFor="file"
              style={{
                backgroundImage: imglink ? `url(${imglink})` : "none",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div style={{ background: "white" }}>업로드</div>
            </S.Poster>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={change}
              accept=".svg, .jpg, .png"
            />
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
              onClick={isCreateReady() ? createContest : null}
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
