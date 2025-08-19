import React, { useState } from 'react'

export default function HeroSection({ onSearch }) {
  const [zip,setZip] = useState('')

  function submit(e){
    e.preventDefault()
    if(onSearch) onSearch({ zip })
  }

  async function useLocation(){
    if(!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(pos=>{
      const { latitude, longitude } = pos.coords
      if(onSearch) onSearch({ lat: latitude, lng: longitude })
    }, ()=>{ console.warn('geo failed') })
  }

  return (
    <div className='max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8'>
      <div className='flex-1'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-closetDark mb-4'>Don't let 3% keep you from buying your dream home.</h1>
        <p className='text-lg text-gray-600 mb-6'>Closied guides you step-by-step through offers, inspections, escrow, and closing — so you can confidently buy without an agent.</p>
        <form onSubmit={submit} className='flex gap-2 max-w-xl'>
          <input value={zip} onChange={e=>setZip(e.target.value)} placeholder='Enter ZIP code' className='flex-1 px-4 py-3 border rounded-l-md' />
          <button className='bg-closetBlue px-4 py-3 text-white rounded-r-md' type='submit'>Search</button>
          <button type='button' onClick={useLocation} className='ml-3 px-4 py-3 bg-white border rounded text-closetDark'>Use my location</button>
        </form>
      </div>
      <div className='w-full md:w-1/2 hidden md:block'>
        <div className='bg-gradient-to-br from-sky-200 to-sky-400 rounded-2xl h-64 flex items-center justify-center'>
          <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' alt='hero' className='rounded-lg shadow-lg' />
        </div>
      </div>
    </div>
  )
}
