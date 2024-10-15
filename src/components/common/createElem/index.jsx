import {useRef, React, useState} from 'react'
import * as S from "./indexStyle";
import { Fee, Join, Region } from './selections/index';
import { TimeSet, JoinSet } from './dates/index';

const Form = () => {
  return (
    <S.Div>
    <form>
    <S.CreateContest>대회 생성</S.CreateContest>  
    <S.Hrr></S.Hrr>
    <S.FormName>대회 이름</S.FormName>
    <S.NameField placeholder='대회 이름을 입력해주세요'></S.NameField>
    <S.FormName>대회 내용</S.FormName>
    <S.TextField placeholder='대회 내용을 입력해주세요'></S.TextField>
    <S.FormName>접수 기간</S.FormName>
    <JoinSet/>
    <S.FormName>대회 기간</S.FormName>
    <TimeSet/>
    <S.FormName>참가 대상</S.FormName>
    <Join/>
    <S.FormName>지역</S.FormName>
    <Region/>
    <S.FormName>참가 비용</S.FormName>
    <Fee/>
    <S.FormName>링크</S.FormName>
    <S.NameField placeholder='링크를 입력해주세요.'></S.NameField>
    <S.FormName>포스터 사진</S.FormName>
    <S.Poster type='file'/>
    <S.ButtonContainer>
    <S.Button>대회 생성</S.Button>
    </S.ButtonContainer>
    </form>
    </S.Div>
  );
}

export default Form;
