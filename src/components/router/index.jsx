import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateForm from '../pages/createContest'
import MainPage from '../pages/main'
import Login from '../pages/login'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/makecontest' element={<CreateForm />}></Route>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
