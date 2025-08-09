import React, {useEffect, useState} from 'react';
import ListingsPreview from './ListingsPreview';

export default function Home(){
  const [geoZip, setGeoZip] = useState('');
  const [allowGeo, setAllowGeo] = useState(null);

  useEffect(()=>{
    if(!navigator.geolocation) { setAllowGeo(false); return; }
    navigator.geolocation.getCurrentPosition(async (pos)=>{
      setAllowGeo(true);
      // Optionally reverse-geocode to a zip; leaving blank for manual entry
    }, ()=> setAllowGeo(false));
  },[]);

  return (
    <div>
      <header className="hero">
        <div>
          <h1>Find your next home — without an agent</h1>
          <p>Closied guides you through offers, inspections, financing and closing.</p>
        </div>
        <img src="/assets/hero.jpg" alt="houses" className="hero-img" />
      </header>

      <section style={{marginTop:20}}>
        <h2>Start searching</h2>
        <p>{allowGeo === null ? 'Checking location...' : allowGeo ? 'Using device location (you can enter a ZIP below to override)' : 'Location blocked — enter a ZIP code to search'}</p>
        <ListingsPreview initialZip={geoZip} allowGeo={allowGeo} />
      </section>
    </div>
  );
}