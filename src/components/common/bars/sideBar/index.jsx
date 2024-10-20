import React from "react";
import * as S from "./indexStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ()=>{
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    const useVisible = () =>{
        setVisible(!visible);
    }

    const goProfile = () =>{
        navigate("/profile");
    }
    const goBookMark = () =>{
        navigate("/bookmark");
    }
    const goLogin = () =>{
        navigate("/login");
    }
    
    return(
        <S.Container>
            <Link to="/main"><S.LogoImage src='/images/logo.svg' alt/></Link>
            <S.ProfileContainer>
                <S.ProfileMenu style={{ display: visible ? "block" : "none" }}>
                    <S.Profile>
                    <div style={{textDecoration:"none"}} onClick={goProfile}>내 정보</div>
                    <div style={{textDecoration:"none"}} onClick={goBookMark}>북마크</div>
                    <div style={{color:"#B01E1E", textDecoration:"none"}} onClick={goLogin}>로그아웃</div>
                    </S.Profile>
                </S.ProfileMenu>
                <S.ProfileImage onClick={useVisible} src='/images/profile.svg' alt="프로필"/>
            </S.ProfileContainer>
        </S.Container>
    );
}

export default Sidebar;