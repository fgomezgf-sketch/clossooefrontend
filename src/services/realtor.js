import axios from 'axios';

const RAPIDAPI_HOST = process.env.REACT_APP_REALTOR_RAPIDAPI_HOST || 'realtor.p.rapidapi.com';
const RAPIDAPI_KEY = process.env.REACT_APP_REALTOR_RAPIDAPI_KEY || '';

// Example function: search by postal code
export async function searchByZip(zip, page=1){
  const url = 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale';
  const params = {
    "postal_code": zip,
    "limit": "20",
    "offset": (page-1)*20,
    "sort": "relevance"
  };
  try{
    const res = await axios.post(url, params, {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    });
    return res.data;
  }catch(e){
    console.error('Realtor API error', e.message);
    throw e;
  }
}