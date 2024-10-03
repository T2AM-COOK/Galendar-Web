import React, { useState, forwardRef } from "react";
import * as S from "./indexStyle";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale";

const DateStyle = forwardRef(({ value, onClick }, ref) => (
  <div className="example-custom-input" onClick={onClick} ref={ref} style={{cursor:"pointer", display:"flex", alignItems:"center"}}>
    <S.Image src='/images/calendar.svg'/>
    {value}
  </div>
));

const JoinSet = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <S.Div>
      <S.Space>
          <DatePicker 
          locale={ko}
          selected={startDate}
          onChange={(date)=>setStartDate(date)}
          dateFormat="yyyy.MM.dd"
          customInput={<DateStyle />}
          />
      </S.Space>
      <S.Slash>~</S.Slash>
      <S.Space>
      <DatePicker
        selected={startDate}
          onChange={(date)=>setStartDate(date)}
          dateFormat="yyyy.MM.dd"
          customInput={<DateStyle />}
          />
      </S.Space>
    </S.Div>
  )
}

const TimeSet = () =>{
  const [startDate, setStartDate] = useState(new Date());
    return(
      <S.Div>
      <S.Space>
      <DatePicker 
          selected={startDate}
          onChange={(date)=>setStartDate(date)}
          dateFormat="yyyy.MM.dd"
          customInput={<DateStyle />}
          />
      </S.Space>
      <S.Slash>
      ~
      </S.Slash>
      <S.Space>
      <DatePicker 
          selected={startDate}
          onChange={(date)=>setStartDate(date)}
          dateFormat="yyyy.MM.dd"
          customInput={<DateStyle />}
          />
      </S.Space>
    </S.Div>
    )

}

export {JoinSet, TimeSet}
