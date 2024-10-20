import React, { useState, forwardRef } from "react";
import * as S from "./indexStyle";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale";

const DateStyle = forwardRef(({ value, onClick }, ref) => (
  <div className="example-custom-input" onClick={onClick} ref={ref} style={{cursor:"pointer", display:"flex", alignItems:"center"}}>
    <S.Day>
      <img src='/images/calendar.svg'/>
      {value}
    </S.Day>
  </div>
));

const JoinSet = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.Div>
    <S.Space>
      <S.DatePicker>
        <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date)=>setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            customInput={<DateStyle />}
            />
        </S.DatePicker>
    </S.Space>
  <S.Slash>~</S.Slash>
  <S.Space>
      <S.DatePicker>
        <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date)=>setStartDate(date)}
            dateFormat="yyyy.MM.dd"
            customInput={<DateStyle />}
            />
        </S.DatePicker>
    </S.Space>
</S.Div>
  )
}

const TimeSet = () =>{
  const [startDate, setStartDate] = useState(new Date());
    return(
      <S.Div>
        <S.Space>
          <S.DatePicker>
            <DatePicker
                locale={ko}
                selected={startDate}
                onChange={(date)=>setStartDate(date)}
                dateFormat="yyyy.MM.dd"
                customInput={<DateStyle />}
                />
            </S.DatePicker>
        </S.Space>
      <S.Slash>~</S.Slash>
      <S.Space>
          <S.DatePicker>
            <DatePicker
                locale={ko}
                selected={startDate}
                onChange={(date)=>setStartDate(date)}
                dateFormat="yyyy.MM.dd"
                customInput={<DateStyle />}
                />
            </S.DatePicker>
        </S.Space>
    </S.Div>
    )

}

export {JoinSet, TimeSet}
