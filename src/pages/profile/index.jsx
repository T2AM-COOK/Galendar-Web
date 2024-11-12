import React from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil";

const Profile = () => {
  const [user] = useRecoilState(userState);
  return (
    <div>
      <S.Div>
        <Sidebar />
        <S.All>
          <S.Content>
            <S.Profile>
              <S.ProfileImage src="/images/profile.svg" />
              <S.ProfileText>
                <div style={{ fontSize: "52px", fontWeight: "bold" }}>
                  내 정보
                </div>
                <div style={{ fontSize: "20px" }}>{user.email}</div>
              </S.ProfileText>
            </S.Profile>
          </S.Content>
        </S.All>
      </S.Div>
    </div>
  );
};

export default Profile;
