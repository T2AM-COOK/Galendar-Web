import React, { forwardRef } from "react";
import * as S from "./indexStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";

const SetType = ({ changeDate, setChangeDate, now }) => {
  return (
    <S.Space>
      <S.DatePicker>
        <DatePickerSelector
          changeDate={changeDate}
          setChangeDate={setChangeDate}
          now={now}
        />
      </S.DatePicker>
    </S.Space>
  );
};

const DatePickerSelector = ({ changeDate, setChangeDate, now }) => {
  return (
    <DatePicker
      locale={ko}
      selected={changeDate}
      onChange={(date) =>
        date >= now ? setChangeDate(date) : alert("미래의 시간으로 정해주세요.")
      }
      dateFormat="yyyy.MM.dd"
      customInput={<DateStyle />}
    />
  );
};

const DateStyle = forwardRef(({ value, onClick }, ref) => (
  <div
    className="example-custom-input"
    onClick={onClick}
    ref={ref}
    style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
  >
    <S.Day>
      <img src="/images/calendar.svg" alt="캘린더" />
      {value}
    </S.Day>
  </div>
));

const JoinSet = ({
  now,
  submitStartDate,
  submitEndDate,
  setSubmitStartDate,
  setSubmitEndDate,
}) => {
  return (
    <S.Div>
      <SetType
        DatePickerSelector={DatePickerSelector}
        changeDate={submitStartDate}
        setChangeDate={setSubmitStartDate}
        now={now}
      />
      <S.Slash>~</S.Slash>
      <SetType
        DatePickerSelector={DatePickerSelector}
        changeDate={submitEndDate}
        setChangeDate={setSubmitEndDate}
        now={now}
      />
    </S.Div>
  );
};

const TimeSet = ({
  now,
  contestStartDate,
  contestEndDate,
  setContestStartDate,
  setContestEndDate,
}) => {
  return (
    <S.Div>
      <SetType
        DatePickerSelector={DatePickerSelector}
        changeDate={contestStartDate}
        setChangeDate={setContestStartDate}
        now={now}
      />
      <S.Slash>~</S.Slash>
      <SetType
        DatePickerSelector={DatePickerSelector}
        changeDate={contestEndDate}
        setChangeDate={setContestEndDate}
        now={now}
      />
    </S.Div>
  );
};

export { JoinSet, TimeSet };
