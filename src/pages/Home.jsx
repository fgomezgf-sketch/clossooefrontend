import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import ListingCard from '../components/ListingCard'
import { fetchLatestListings } from '../services/api'
import {
  HomeIcon,
  BuildingOfficeIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

const BedIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 10V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1v10h2v-2h18v2h2V10h-2Zm-2 0H5V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3Z" />
  </svg>
);

const BathIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 13V9a4 4 0 0 0-4-4h-1V3a2 2 0 1 0-4 0v2h-1a4 4 0 0 0-4 4v4H3v2h1v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3h1v-2h-1ZM13 5V3a1 1 0 1 1 2 0v2h-2Zm5 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3h12v3Z" />
  </svg>
);


export default function Home(){
  const [listings,setListings] = useState([])
  const [loading,setLoading] = useState(false)

  async function doSearch(params){
    setLoading(true)
    try{
      const data = await fetchLatestListings(params)
      const results = data?.properties || data?.data?.properties || data?.listings || data?.results || data
      setListings(Array.isArray(results)? results.slice(0,12) : [])
    }catch(e){
      console.error(e)
      setListings([])
    }
    setLoading(false)
  }

  const mock = [
    { id:'m1', img:'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg', address:'123 Oak Ave, Austin, TX', price:'$450,000', beds:3, baths:2, sqft:1800 },
    { id:'m2', img:'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg', address:'54 Ocean Dr, Miami, FL', price:'$1,250,000', beds:5, baths:4, sqft:4200 },
    { id:'m3', img:'hhttps://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg', address:'9 Maple Ln, Asheville, NC', price:'$320,000', beds:2, baths:1, sqft:900 },
    { id:'m4', img:'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg', address:'88 Pine St, Seattle, WA', price:'$780,000', beds:4, baths:3, sqft:2100 },
  ]

  const show = listings.length ? listings.slice(0,4) : mock

  return (
    <div>
      <HeroSection onSearch={doSearch} />
      <section className='max-w-7xl mx-auto px-6 py-12'>
        <h2 className='text-2xl font-bold mb-6'>Latest Properties</h2>
        {loading ? <div>Loading listings…</div> : (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {show.map(l=> <ListingCard key={l.id || l.property_id || l.listing_id || l.address} item={l} />)}
          </div>
        )}
      </section>

      <section className='bg-white border-t mt-12'>
        <div className='max-w-4xl mx-auto px-6 py-12'>
          <h3 className='text-xl font-bold mb-4'>Why Closied?</h3>
          <ol className='list-decimal pl-5 space-y-3 text-gray-700'>
            <li><strong>Search & Compare:</strong> See listings near you and evaluate them with our analytics.</li>
            <li><strong>DIY Workflow:</strong> Step-by-step guided processes (inspection, appraisal, escrow, closing) to buy without an agent.</li>
            <li><strong>Document Center:</strong> Upload and manage offers, inspection reports, and closing docs.</li>
            <li><strong>AI Market Analysis:</strong> Competitive market analysis pulls recent sold comps to estimate fair value.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}
