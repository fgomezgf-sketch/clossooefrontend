import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Workflows from './pages/Workflows'

export default function App(){
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/workflows' element={<Workflows />} />
        </Routes>
      </main>
      <footer className='text-center text-sm text-gray-500 py-6'>© {new Date().getFullYear()} Closied</footer>
    </div>
  )
}
