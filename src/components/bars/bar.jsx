import React from "react";
import * as M from "./barStyle";
import { Link } from "react-router-dom";
const Sidebar = ()=>{
    return(
        <M.Container>
            <Link to="/"><M.LogoImage src='images/logo.svg' alt/></Link>
            <M.ProfileContainer>
                <M.ProfileMenu>
                    <div>내 정보</div>
                    <div>북마크</div>
                    <div style={{color:"#B01E1E"}}>로그아웃</div>
                </M.ProfileMenu>
                <M.ProfileImage src='/images/profile.svg' alt="프로필"/>
            </M.ProfileContainer>
        </M.Container>
    );
}

export default Sidebar;