import React from 'react' 
import * as S from "./indexStyle";
import Sidebar from '../../components/common/bars/sideBar';
import Form from '../../components/common/createElem';

const CreateContest = () => {
  return (
    <S.Div>
      <Sidebar/>
      <Form/>
    </S.Div>
  )
}

export default CreateContest;
