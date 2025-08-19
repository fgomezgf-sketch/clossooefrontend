import axios from 'axios';

const RAILWAY = 'https://closiedbackend-production.up.railway.app';

// Use Vite env var if set, otherwise fallback to Railway
const API_BASE =
  (import.meta.env.VITE_API_BASE && import.meta.env.VITE_API_BASE.startsWith('http'))
    ? import.meta.env.VITE_API_BASE
    : RAILWAY;

const api = axios.create({ baseURL: API_BASE, timeout: 15000 });

async function fetchListingsFromBackend(params = {}) {
  try {
    const res = await api.get('/listings', { params });
    return res.data;
  } catch (e) {
    console.warn('Backend listings fetch failed, falling back to mock data', e.message || e);
    throw e;
  }
}

// --- MOCK DATA (no RapidAPI calls) ---
const mockListings = [
  {
    id: 1,
    img: "https://via.placeholder.com/400x250",
    price: 450000,
    address: "123 Main St, Springfield",
    beds: 3,
    baths: 2,
    sqft: 1800,
    description: "Charming family home with large backyard.",
    permalink: "#"
  },
  {
    id: 2,
    img: "https://via.placeholder.com/400x250",
    price: 875000,
    address: "456 Oak Ave, Metropolis",
    beds: 4,
    baths: 3,
    sqft: 2500,
    description: "Modern house with open floor plan and pool.",
    permalink: "#"
  }
];

export async function fetchLatestListings({ zip, lat, lng } = {}) {
  try {
    const data = await fetchListingsFromBackend({ postal_code: zip, lat, lng });
    const results = data?.properties || data?.data?.properties || data?.listings || data?.results || data;
    if (Array.isArray(results) && results.length) return results;
  } catch (e) {
    // fallthrough to mock
  }
  return mockListings;
}

export default api;
