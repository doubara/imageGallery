import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

// page imports
import AuthLayout from './Components/Authentication/AuthLayout';
import Home from './Components/UI/Home';

// components import
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<AuthLayout></AuthLayout>}>
          {/* <Route index element={<SignIn />}></Route> */}
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>

        </Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
