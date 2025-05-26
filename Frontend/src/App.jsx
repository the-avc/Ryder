import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserProtector from './pages/UserProtector'
import UserLogout from './pages/UserLogout'
import CaptainLogout from './pages/CaptainLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtector from './pages/CaptainProtector'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home' element={
          <UserProtector>
            <Home />
          </UserProtector>
        } />
        <Route path='/user/logout' element={
          <UserProtector>
            <UserLogout />
          </UserProtector>
        } />
        <Route path='/captain/logout' element={
          <CaptainProtector>
            <CaptainLogout />
          </CaptainProtector>
        } />
        <Route path='/captain-home' element={
          <CaptainProtector>
            <CaptainHome />
          </CaptainProtector>
        } />
      </Routes>
    </div>
  )
}

export default App
