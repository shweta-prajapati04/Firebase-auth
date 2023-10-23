import { useState } from 'react'
import './App.css'
import { GoogleAuth } from './GoogleAuth'
import { SIgnUp } from './Pages/SIgnUp'
import { Signin } from './Pages/Signin'
import Reset from './Pages/Reset'

function App() {

  return (
    <>
    <GoogleAuth/>
    <h2>Sign Up</h2>
    <SIgnUp/>
    <h2>Login</h2>
    <Signin/>
    <h2>Reset Pasword</h2>
    <Reset/>
    </>
  )
}

export default App
