import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import StudentAdmin from './components/StudentAdmin'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/login' element={<Login />} />,
            <Route path='/dashboard' element={<Dashboard />} />,
            <Route path='/student-admin' element={<StudentAdmin />} />,
          </Route>,
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
