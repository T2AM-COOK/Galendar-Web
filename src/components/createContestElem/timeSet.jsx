import React from 'react';
import * as S from "./timeSetStyle";

const JoinSet = () => {
  return (
    <S.Div>
      <S.Space>
        <S.Image src='images/calendar.svg'/>
        <S.Text>텍스트입니다.</S.Text>
      </S.Space>
      <S.Slash>
      ~
      </S.Slash>
      <S.Space>
        <S.Image src='images/calendar.svg'/>
        <S.Text>텍스트입니다.</S.Text>
      </S.Space>
    </S.Div>
  )
}

const TimeSet = () =>{

    return(
      <S.Div>
      <S.Space>
        <S.Image src='images/calendar.svg'/>
        <S.Text>텍스트입니다.</S.Text>
      </S.Space>
      <S.Slash>
      ~
      </S.Slash>
      <S.Space>
        <S.Image src='images/calendar.svg'/>
        <S.Text>텍스트입니다.</S.Text>
      </S.Space>
    </S.Div>
    )

}

export {JoinSet, TimeSet}
