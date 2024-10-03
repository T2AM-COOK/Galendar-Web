import React from "react"
import * as S from "./buttonCheckStyle";

const Join = () =>{
    return(
    <div>
        <S.Label>
            <S.Val><input type="checkbox" name="age" id="everyone"></input><S.ValText>누구나</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="elementary"></input><S.ValText>초등학생</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="middle"></input><S.ValText>중학생</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="high"></input><S.ValText>고등학생</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="academic"></input><S.ValText>대학생</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="postgraduate"></input><S.ValText>대학원생</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="normal"></input><S.ValText>일반인</S.ValText></S.Val>
            <S.Val><input type="checkbox" name="age" id="foreign"></input><S.ValText>외국인</S.ValText></S.Val>
        </S.Label>
    </div>
    )
}

const Region = () =>{
    return(
        <div>
            <S.Label>
                <S.Val><input type="checkbox" name="land" id="all"></input><S.ValText>전체</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="online"></input><S.ValText>온라인</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="nation"></input><S.ValText>전국</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="seoul"></input><S.ValText>서울</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="busan"></input><S.ValText>부산</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="incheon"></input><S.ValText>인천</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="daegu"></input><S.ValText>대구</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="daejeon"></input><S.ValText>대전</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="gwangju"></input><S.ValText>광주</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="ulsan"></input><S.ValText>울산</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="gyeongi"></input><S.ValText>경기</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="kyungbuk"></input><S.ValText>경북</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="kyungnam"></input><S.ValText>경남</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="jeonbuk"></input><S.ValText>전북</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="jeonnam"></input><S.ValText>전남</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="chungbuk"></input><S.ValText>충북</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="chungnam"></input><S.ValText>충남</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="gangwon"></input><S.ValText>강원</S.ValText></S.Val>
                <S.Val><input type="checkbox" name="land" id="abroad"></input><S.ValText>해외</S.ValText></S.Val>
            </S.Label>
        </div>
        )
}

const Fee = () =>{
    return(
        <div>
            <S.Label>
                <S.Val><input type="radio" id="howFee" name="howFee"></input><S.ValText>유료</S.ValText></S.Val>
                <S.Val><input type="radio" id="howFee" name="howFee"></input><S.ValText>무료</S.ValText></S.Val>
            </S.Label>
        </div>
    )
}

export {Join, Region, Fee};