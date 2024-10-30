import React from "react";
import * as S from "./indexStyle";

const Join = ({ targets, setTargets }) => {
  const ageOptions = [
    { id: "EVERYONE", label: "누구나" },
    { id: "ELEMENTARY", label: "초등학생" },
    { id: "MIDDLE", label: "중학생" },
    { id: "HIGH", label: "고등학생" },
    { id: "UNIVERSITY", label: "대학생" },
    { id: "POSTGRADUATE", label: "대학원생" },
    { id: "FOREIGNER", label: "외국인" },
    { id: "OTHER", label: "그 외" },
  ];

  const handleChangeCheck = (checked, item) => {
    if (checked) {
      setTargets((prev) => [...prev, item]);
    } else {
      setTargets((prev) => prev.filter((el) => el !== item));
    }
  };

  return (
    <div>
      <S.Form>
        {ageOptions.map((option) => (
          <S.Val key={option.id}>
            <input
              type="checkbox"
              name="age"
              id={option.id}
              value={option.id}
              onChange={(e) =>
                handleChangeCheck(e.target.checked, e.target.value)
              }
            />
            <label htmlFor={option.id} style={{ cursor: "pointer" }}>
              <S.ValText>{option.label}</S.ValText>
            </label>
          </S.Val>
        ))}
      </S.Form>
    </div>
  );
};

const Region = ({ regions, setRegions }) => {
  const regionOptions = [
    { id: "all", label: "전체" },
    { id: "online", label: "온라인" },
    { id: "nationwide", label: "전국" },
    { id: "seoul", label: "서울" },
    { id: "busan", label: "부산" },
    { id: "incheon", label: "인천" },
    { id: "daegu", label: "대구" },
    { id: "daejeon", label: "대전" },
    { id: "gwangju", label: "광주" },
    { id: "ulsan", label: "울산" },
    { id: "kyonggi", label: "경기" },
    { id: "gyeongbuk", label: "경북" },
    { id: "gyeongnam", label: "경남" },
    { id: "jeonbuk", label: "전북" },
    { id: "jeonnam", label: "전남" },
    { id: "chungbuk", label: "충북" },
    { id: "chungnam", label: "충남" },
    { id: "gangwon", label: "강원" },
    { id: "abroad", label: "해외" },
  ];

  const handleChangeCheck = (checked, item) => {
    if (checked) {
      setRegions((prev) => [...prev, item]);
    } else {
      setRegions((prev) => prev.filter((el) => el !== item));
    }
  };

  return (
    <div>
      <S.Form>
        {regionOptions.map((option) => (
          <S.Val key={option.id}>
            <input
              type="checkbox"
              name="land"
              id={option.id}
              value={option.id}
              onChange={(e) =>
                handleChangeCheck(e.target.checked, e.target.value)
              }
            />
            <label htmlFor={option.id} style={{ cursor: "pointer" }}>
              <S.ValText>{option.label}</S.ValText>
            </label>
          </S.Val>
        ))}
      </S.Form>
    </div>
  );
};

const Fee = ({ setCost }) => {
  const feeOptions = [
    { id: "PAID", label: "유료" },
    { id: "FREE", label: "무료" },
  ];

  return (
    <S.Form>
      {feeOptions.map((option) => (
        <S.Val key={option.id}>
          <input
            type="radio"
            id={option.id}
            name="howFee"
            onChange={() => setCost(option.id)}
          />
          <label htmlFor={option.id} style={{ cursor: "pointer" }}>
            <S.ValText>{option.label}</S.ValText>
          </label>
        </S.Val>
      ))}
    </S.Form>
  );
};

export { Join, Region, Fee };
