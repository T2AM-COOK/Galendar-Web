import React from 'react'
import * as S from "./indexStyle";
import BookMarkContent from '../bookMark/index';

const ProfileContent = () => {
  return (
    <div style={{marginTop:"50px"}}>
      <S.Profile>
      <div style={{display:"flex"}}>
      <S.ProfileImage src='/images/profile.svg'/>
      <S.ProfileText>
        <div style={{fontSize:"52px", fontWeight:"bold"}}>niddong</div>
        <div style={{fontSize:"20px"}}>imground11@gmail.com</div>
      </S.ProfileText>
      </div>
      <div>
        <S.ProfileButton>프로필 수정</S.ProfileButton>
      </div>
      </S.Profile>
      <BookMarkContent/>
    </div>  
  )
}

export default ProfileContent;
