import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateContest from '../pages/createContest/index'
import Main from "../pages/main/index"
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Profile from "../pages/profile/index"
import BookMark from '../pages/bookMark'
import ContestInfo from '../pages/contestMain'
import StartPage from '../pages/startPage'
import Search from '../pages/searchResult'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<StartPage/>}/>
            <Route path='/createcontest' element={<CreateContest />}></Route>
            <Route path='/main' element={<Main />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/bookmark' element={<BookMark/>}></Route>
            <Route path='/contestinfo' element={<ContestInfo/>}></Route>
            <Route path='/search/' element={<Search/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
