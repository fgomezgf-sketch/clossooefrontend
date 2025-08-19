import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className='bg-closetDark text-white px-6 py-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-xl font-bold'>C</div>
          <span className='text-xl font-semibold'>Closied</span>
        </Link>
        <div className='flex items-center gap-4'>
          <Link to='/search' className='hidden md:inline text-gray-200 hover:text-white'>Search</Link>
          <Link to='/workflows' className='hidden md:inline text-gray-200 hover:text-white'>Workflows</Link>
          <Link to='/register' className='bg-closetBlue px-4 py-2 rounded text-white hover:bg-blue-700'>Register</Link>
          <Link to='/login' className='border border-white/20 px-4 py-2 rounded text-white hover:bg-white/5'>Sign in</Link>
        </div>
      </div>
    </nav>
  )
}
