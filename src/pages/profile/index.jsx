import React from 'react'
import Sidebar from '../../components/common/bars/sideBar'
import * as S from "./indexStyle";
import BigContentBox from '../../components/common/contentsBox/big'

const Profile = () => {
  return (
    <div>
      <S.Div>
        <Sidebar/>
        <S.All>
        <S.Content>
          <S.Profile>
            <S.ProfileImage src='/images/profile.svg'/>
            <S.ProfileText>
              <div style={{fontSize:"52px", fontWeight:"bold"}}>김엉한</div>
              <div style={{fontSize:"20px"}}>imground11@gmail.com</div>
            </S.ProfileText>
          </S.Profile>
        </S.Content>
        <S.BookMark>
            <S.BookMarkText>
              <S.TopNav>
                <S.Title>내 북마크</S.Title>
                <S.Hr/>
               </S.TopNav>
            </S.BookMarkText>
            <S.BookMarks>
            <BigContentBox/>
            <BigContentBox/>
            <BigContentBox/>
            <BigContentBox/>
            <BigContentBox/>
            </S.BookMarks>
          </S.BookMark>
          </S.All>
        </S.Div>
    </div>
  )
}

export default Profile;
