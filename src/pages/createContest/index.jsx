import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import Sidebar from "../../components/common/bars/sideBar";
import {
  Fee,
  Join,
  Region,
} from "../../components/common/createElem/selections";
import axios from "axios";
import { JoinSet, TimeSet } from "../../components/common/createElem/dates";

const CreateContest = () => {
  const [imglink, setImgLink] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [link, setLink] = useState();
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const [submitStartDate, setSubmitStartDate] = useState(new Date());
  const [submitEndDate, setSubmitEndDate] = useState(new Date());
  const [contestStartDate, setContestStartDate] = useState(new Date());
  const [contestEndDate, setContestEndDate] = useState(new Date());
  const [cost, setCost] = useState("");
  const [targets, setTargets] = useState([]);
  const [regions, setRegions] = useState([]);

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
          "https://3.37.189.59:8080/contest",
          contestData
        );
        if (res) {
          alert("대회 생성완료");
          localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken);
          setImgLink("");
          setTitle("");
          setContent("");
          setLink("");
          setSubmitStartDate("");
          setSubmitEndDate("");
          setContestStartDate("");
          setContestEndDate("");
          setTargets([]);
          setRegions([]);
        }
      } catch {
        alert("에러가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    console.log(targets);
  }, [targets]);

  const change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgLink(URL.createObjectURL(file));
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
            }}
          >
            <S.Poster
              htmlFor="file"
              style={imglink ? { display: "none" } : { display: "flex" }}
            >
              <div style={{}}>업로드</div>
            </S.Poster>
            <input
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
              onChange={change}
            />
            {imglink &&
              (console.log(imglink),
              (
                <img
                  src={imglink}
                  alt="이미지가 아닙니다."
                  style={{ width: "284px", height: "224px" }}
                />
              ))}
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
