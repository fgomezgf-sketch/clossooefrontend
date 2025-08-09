import React, {useEffect, useState} from 'react';
import { searchByZip } from '../services/realtor';
import { Link } from 'react-router-dom';

export default function Listings({token}){
  const [zip,setZip] = useState('90210');
  const [listings,setListings] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  const doSearch = async (z)=>{
    setLoading(true); setError(null);
    try{
      const data = await searchByZip(z);
      // The RapidAPI response shape varies; adapt to expected structure
      const props = data?.properties || data?.data || [];
      setListings(props);
    }catch(e){ setError('Search failed'); }
    setLoading(false);
  };

  useEffect(()=>{
    doSearch(zip);
  },[]);

  return (
    <div>
      <h1>Listings</h1>
      <div className="search-row">
        <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="Enter ZIP code" />
        <button className="btn" onClick={()=>doSearch(zip)}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="muted">{error}</p>}
      <div className="grid" style={{marginTop:12}}>
        {listings.length===0 && !loading && <p>No listings found.</p>}
        {listings.map((l,idx)=> (
          <div key={l.property_id || idx} className="card">
            <img src={l?.photo?.href || '/assets/home1.jpg'} alt={l?.address?.line || l?.location?.address?.address_line} />
            <h3>{l?.address?.line || l?.location?.address?.address_line || 'Unknown'}</h3>
            <p className="price">${l?.price?.toLocaleString?.() ?? l?.list_price}</p>
            <Link to={'/property/'+(l.property_id || idx)} className="btn small">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}