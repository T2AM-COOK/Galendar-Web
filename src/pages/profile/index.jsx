import React from 'react'
import Sidebar from '../../components/common/bars/sideBar'
import * as S from "./indexStyle";
import ProfileContent from '../../components/common/profileForm/index';

const Profile = () => {
  return (
    <div>
        <S.Div>
        <Sidebar/>
        <S.Content>
        <ProfileContent/>
        </S.Content>
        </S.Div>
    </div>
  )
}

export default Profile;
