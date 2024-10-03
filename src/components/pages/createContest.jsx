import React from 'react' 
import Sidebar from '../bars/bar'
import Form from "../createContestElem/createContestElem"
import * as M from "./createContestStyle";
const CreateForm = () => {
  return (
    <M.Div>
      <Sidebar/>
      <Form/>
    </M.Div>
  )
}

export default CreateForm;
