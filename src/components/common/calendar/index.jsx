import React, { useEffect, useState } from 'react';
import * as S from "./indexStyle";

const MainCalendar = () => {
  const date = new Date();
  const [viewYear, setViewYear] = useState(date.getFullYear());
  const [viewMonth, setViewMonth] = useState(date.getMonth() + 1);

  // 저번 달 마지막 날짜와 이번 달 마지막 날짜
  const prevLast = new Date(viewYear, viewMonth - 1, 0); // 저번 달 마지막 날
  const prevThis = new Date(viewYear, viewMonth, 0); // 이번 달 마지막 날

  const PLDate = prevLast.getDate(); // 저번 달 마지막 날
  const PLDay = prevLast.getDay(); // 저번 달 마지막 날의 요일
  const PTDate = prevThis.getDate(); // 이번 달 마지막 날
  const PTDay = prevThis.getDay(); // 이번 달 마지막 날의 요일

  let prevDates = [];
  let thisDates = [];

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
    console.log(`저번 달 : ${viewMonth - 1}월 ${PLDate}`);
    console.log(`이번 달 : ${viewMonth}월 ${PTDate}`);
    let prevDates = [];
    let thisDates = [];
    for (let i = 1; i <= PLDate; i++) {
      prevDates.unshift(i);
    }

    for (let i = 1; i <= PTDate; i++) {
      thisDates.unshift(i);
    }
    console.log(prevDates, thisDates);
  }, [viewMonth]);

  return (
    <div>
      <S.MainBox>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        <S.DateBox cellSpacing={0} cellPadding={5} bgcolor="#F9F9F9">
          <thead>
            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.Td style={{ color: '#FF0000' }}>SUN</S.Td>
              <S.Td>MON</S.Td>
              <S.Td>TUE</S.Td>
              <S.Td>WED</S.Td>
              <S.Td>THU</S.Td>
              <S.Td>FRI</S.Td>
              <S.Td style={{ color: '#2B32B2' }}>SAT</S.Td>
            </tr>
          </thead>
          <tbody>
            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.LastDayBox><div>29</div></S.LastDayBox>
              <S.LastDayBox><div>30</div></S.LastDayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
            </tr>
            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
            </tr>
            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
            </tr>
            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
              <S.DayBox>니얼굴</S.DayBox>
            </tr>
          </tbody>
        </S.DateBox>
      </S.MainBox>
    </div>
  );
};

export default MainCalendar;
