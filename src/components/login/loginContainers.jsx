import React from "react";
import * as M from "./loginContainersStyle";

const LoginComponent = () =>{
    return(
        <M.LoginContainer>
        <M.LoginInput placeholder="아이디를 입력하세요">
        <M.LoginImg src="/images/loginperson.svg"/>
        </M.LoginInput>
    </M.LoginContainer>
    );
}

const RegisterComponent = () =>{
    return(
        <div>

        </div>
    );
}

export {LoginComponent, RegisterComponent};