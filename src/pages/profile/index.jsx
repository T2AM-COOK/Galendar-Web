import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/bars/sideBar";
import * as S from "./indexStyle";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");

  const getMe = async () => {
    try {
      const res = await axios.get("http://3.37.189.59/user/me", {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      if (res) {
        setUser(res.data.data);
      }
    } catch (e) {
      console.log("대회가 불러와지지 않았습니다.");
    }
  };

  useEffect(() => {
    getMe();
  }, []);

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
