import React, { useEffect } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import { useGetMe } from "../../store/getMe";

const Profile = () => {
  const { user, fetchUser } = useGetMe();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
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
    </>
  );
};

export default Profile;
