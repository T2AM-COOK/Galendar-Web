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
  const now = new Date();
  const [recieptStartDate, setRecieptStartDate] = useState(new Date());
  const [recieptFinishDate, setRecieptFinishDate] = useState(new Date());

  return (
    <S.Div>
    <S.Space>
      <S.DatePicker>
        <DatePicker
            locale={ko}
            selected={recieptStartDate}
            onChange={(date)=>date >= now ? setRecieptStartDate(date) : alert("미래의 시간으로 정해주세요.")}
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
            selected={recieptFinishDate}
            onChange={(date)=>date >= now ? setRecieptFinishDate(date) : alert("미래의 시간으로 정해주세요.")}
            dateFormat="yyyy.MM.dd"
            customInput={<DateStyle />}
            />
        </S.DatePicker>
    </S.Space>
</S.Div>
  )
}

const TimeSet = () =>{
  const now = new Date();
  const [contestStartDate, setContestStartDate] = useState(new Date());
  const [contestFinishDate, setContestFinishDate] = useState(new Date());
    return(
      <S.Div>
        <S.Space>
          <S.DatePicker>
            <DatePicker
                locale={ko}
                selected={contestStartDate}
                onChange={(date)=>date >= now? setContestStartDate(date) : alert("미래의 시간으로 정해주세요.")}
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
                selected={contestFinishDate}
                onChange={(date)=>date >= now? setContestFinishDate(date) : alert("미래의 시간으로 정해주세요.")}
                dateFormat="yyyy.MM.dd"
                customInput={<DateStyle />}
                />
            </S.DatePicker>
        </S.Space>
    </S.Div>
    )

}

export {JoinSet, TimeSet}
