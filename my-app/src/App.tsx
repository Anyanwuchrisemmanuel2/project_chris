import React from 'react'
import Home from './Components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LogIn from './Components/Screens/LogIn'
import SignUp from './Components/Screens/Signup/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='Login' element={<LogIn/>}/>
        <Route path='Home' element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App