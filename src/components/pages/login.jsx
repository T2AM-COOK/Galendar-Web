import React from 'react'
import * as M from "./loginstyle";
import { LoginComponent } from '../login/loginContainers';
const Login = () => {
  return (
    <M.Div>
        <M.Calendar src="/images/cal.svg">
          <M.Text>로그인</M.Text>
          <LoginComponent/>
        </M.Calendar>
    </M.Div>
  );
}

export default Login
