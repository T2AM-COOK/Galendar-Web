import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";
import useGetBookmarkList from "../../../hooks/useGetBookmarkList";
import { useNavigate } from "react-router-dom";

const MainCalendar = () => {
  const date = new Date();
  const [viewYear, setViewYear] = useState(date.getFullYear());
  const [viewMonth, setViewMonth] = useState(date.getMonth() + 1);
  const [thisDates, setThisDates] = useState([]);
  const { bookmarkContests } = useGetBookmarkList();
  const navigate = useNavigate();

  // 저번 달 마지막 날짜와 이번 달 마지막 날짜
  const prevLast = new Date(viewYear, viewMonth - 1, 0); // 저번 달 마지막 날
  const prevThis = new Date(viewYear, viewMonth, 0); // 이번 달 마지막 날
  const PTDate = prevThis.getDate(); // 이번 달 마지막 날
  const PLDay = prevLast.getDay(); // 저번 달 마지막 요일

  // 날짜 이동 함수
  const Decrease = () => {
    setViewMonth(viewMonth > 1 ? viewMonth - 1 : 12);
    setViewYear(viewMonth === 1 ? viewYear - 1 : viewYear);
  };

  const Increase = () => {
    setViewMonth(viewMonth < 12 ? viewMonth + 1 : 1);
    setViewYear(viewMonth === 12 ? viewYear + 1 : viewYear);
  };

  // 날짜 생성
  useEffect(() => {
    let newThisDates = [];
    for (let i = 1; i <= PTDate; i++) {
      newThisDates.unshift(i);
    }
    setThisDates(newThisDates.reverse());
  }, [viewMonth, viewYear]);

  const setDate = () => {
    setViewMonth(date.getMonth() + 1);
    setViewYear(date.getFullYear());
  };

  return (
    <div>
      <S.MainBox>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.Date>
            <S.DateButton onClick={Decrease}>
              <img src="/images/decreasearrow.svg" />
            </S.DateButton>
            <S.ViewDate onClick={setDate}>
              {viewYear}.{viewMonth <= 9 ? `0${viewMonth}` : `${viewMonth}`}
            </S.ViewDate>
            <S.DateButton onClick={Increase}>
              <img src="/images/increasearrow.svg" />
            </S.DateButton>
          </S.Date>
        </div>
        <S.DateBox cellSpacing={0} cellPadding={5} bgcolor="">
          <thead>
            <tr style={{ display: "flex", justifyContent: "space-around" }}>
              <S.Td style={{ color: "#FF0000" }}>SUN</S.Td>
              <S.Td>MON</S.Td>
              <S.Td>TUE</S.Td>
              <S.Td>WED</S.Td>
              <S.Td>THU</S.Td>
              <S.Td>FRI</S.Td>
              <S.Td style={{ color: "#2B32B2" }}>SAT</S.Td>
            </tr>
          </thead>
          <tbody>
            <S.Tr>
              {PLDay !== 6
                ? Array.from({ length: PLDay + 1 }).map((_, index) => (
                    <S.DayBox
                      key={`${index}`}
                      style={{ background: "#FBFBFB" }}
                    ></S.DayBox>
                  ))
                : ""}
              {thisDates.map((date, index) => (
                <S.DayBox key={`${index}`}>
                  {date}
                  {bookmarkContests.map((i) =>
                    i.contestStartDate ===
                    `${viewYear}-${
                      viewMonth < 10 ? "0" + viewMonth : viewMonth
                    }-${date < 10 ? "0" + date : date}` ? (
                      <S.ContestMark
                        onClick={() => navigate(`/contestInfo/${i.contestId}`)}
                      >
                        {i.title}
                      </S.ContestMark>
                    ) : (
                      ""
                    )
                  )}
                </S.DayBox>
              ))}
            </S.Tr>
          </tbody>
        </S.DateBox>
      </S.MainBox>
    </div>
  );
};

export default MainCalendar;
