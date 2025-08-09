import React, {useState, useEffect} from 'react';
import { searchByZip } from '../services/realtor';
import { Link } from 'react-router-dom';

export default function ListingsPreview({ initialZip='', allowGeo=null }){
  const [zip,setZip] = useState(initialZip || '90210');
  const [listings,setListings] = useState([]);

  useEffect(()=>{ if(initialZip) doSearch(initialZip); },[initialZip]);

  const doSearch = async (z)=>{
    try{
      const data = await searchByZip(z);
      const props = data?.properties || data?.data || [];
      setListings(props);
    }catch(e){ setListings([]); }
  };

  return (
    <div>
      <div className="search-row">
        <input value={zip} onChange={e=>setZip(e.target.value)} placeholder="ZIP code" />
        <button className="btn" onClick={()=>doSearch(zip)}>Search</button>
      </div>
      <div className="grid" style={{marginTop:12}}>
        {listings.slice(0,6).map((l,idx)=> (
          <div key={l.property_id || idx} className="card">
            <img src={l?.photo?.href || '/assets/home1.jpg'} alt={l?.address?.line} />
            <h3>{l?.address?.line || 'Unknown'}</h3>
            <p className="price">${l?.price?.toLocaleString?.() ?? l?.list_price}</p>
            <Link to={'/property/'+(l.property_id || idx)} className="btn small">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}