import React, { useEffect, useState } from "react";
import * as S from "./indexStyle";

const MainCalendar = () => {
  const date = new Date();
  const [viewYear, setViewYear] = useState(date.getFullYear());
  const [viewMonth, setViewMonth] = useState(date.getMonth() + 1);
  const [prevDates, setPrevDates] = useState([]);
  const [thisDates, setThisDates] = useState([]);

  // 저번 달 마지막 날짜와 이번 달 마지막 날짜
  const prevLast = new Date(viewYear, viewMonth - 1, 0); // 저번 달 마지막 날
  const prevThis = new Date(viewYear, viewMonth, 0); // 이번 달 마지막 날

  const PLDate = prevLast.getDate(); // 저번 달 마지막 날
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
    let newPrevDates = [];
    let newThisDates = [];

    for (let i = 1; i <= PLDate; i++) {
      newPrevDates.unshift(i);
    }
    for (let i = 1; i <= PTDate; i++) {
      newThisDates.unshift(i);
    }

    setPrevDates(newPrevDates.reverse());
    setThisDates(newThisDates.reverse());
  }, [viewMonth, viewYear]);

  return (
    <div>
      <S.MainBox>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <S.Date>
            <S.DecreaseButton onClick={Decrease}>
              <S.DecreaseArrow src="/images/decreasearrow.svg" />
            </S.DecreaseButton>
            {viewYear}.{viewMonth <= 9 ? `0${viewMonth}` : `${viewMonth}`}
            <S.IncreaseButton onClick={Increase}>
              <S.IncreaseArrow src="/images/increasearrow.svg" />
            </S.IncreaseButton>
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
              {prevDates.map((date) =>
                PLDate - date <= PLDay ? <S.LastDayBox /> : null
              )}
              {thisDates.map((date) =>
                7 - PLDay > date ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
            <S.Tr>
              {thisDates.map((date) =>
                6 - PLDay < date && date < 14 - PLDay ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
            <S.Tr>
              {thisDates.map((date) =>
                13 - PLDay < date && date < 21 - PLDay ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
            <S.Tr>
              {thisDates.map((date) =>
                20 - PLDay < date && date < 28 - PLDay ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
            <S.Tr>
              {thisDates.map((date) =>
                27 - PLDay < date && date < 35 - PLDay ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
            <S.Tr>
              {thisDates.map((date) =>
                34 - PLDay < date && date < 42 - PLDay ? (
                  <S.DayBox>
                    <div>{date}</div>
                  </S.DayBox>
                ) : null
              )}
            </S.Tr>
          </tbody>
        </S.DateBox>
      </S.MainBox>
    </div>
  );
};

export default MainCalendar;
