import React from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import useGetMe from "../../hooks/useGetMe";

const Profile = () => {
  const { user } = useGetMe();

  if (!user) {
    return;
  }

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
                  {user.name}
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
