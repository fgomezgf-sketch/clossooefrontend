import React, { useState } from 'react'

export default function Register(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function submit(e){
    e.preventDefault()
    alert('Register will call backend /auth/register')
  }

  return (
    <div className='max-w-md mx-auto mt-12 p-6 bg-white rounded shadow'>
      <h2 className='text-2xl font-bold mb-4'>Create account</h2>
      <form onSubmit={submit} className='space-y-4'>
        <input className='w-full p-3 border rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
        <input type='password' className='w-full p-3 border rounded' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} />
        <button className='w-full bg-closetBlue text-white p-3 rounded'>Create account</button>
      </form>
    </div>
  )
}
