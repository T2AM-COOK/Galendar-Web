import React, { useState } from 'react' 
import * as S from "./indexStyle";
import Sidebar from '../../components/common/bars/sideBar';
import { JoinSet, TimeSet } from '../../components/common/createElem/dates';
import { Fee, Join, Region } from '../../components/common/createElem/selections';

const CreateContest = () => {

  const [changeImg, setChangeImg] = useState();

  const change = (e) =>{
    setChangeImg(e.target.value);
  }
  return (
    <S.Div>
      <Sidebar/>
        <S.Content>
          <S.Form>
            <S.CreateContest>대회 생성</S.CreateContest>  
            <S.Hr/>
            <S.FormName>대회 이름</S.FormName>
            <S.NameField placeholder='대회 이름을 입력해주세요'/>
            <S.FormName>대회 내용</S.FormName>
            <S.TextField placeholder='대회 내용을 입력해주세요'/>
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
            <S.NameField placeholder='링크를 입력해주세요.'/>
            <S.FormName>포스터 사진</S.FormName>
            <S.PosterContainer>
            <S.Poster for='file'>
              업로드
            </S.Poster>
            최대 용량은 1MB입니다.
            </S.PosterContainer>
            <input type="file" name="file" id="file" style={{display:"none"}} onChange={change}></input>
            {changeImg}
            <S.ButtonContainer>
              <S.Button>대회 생성</S.Button>
            </S.ButtonContainer>
        </S.Form>
      </S.Content>
    </S.Div>
  )
}

export default CreateContest;
