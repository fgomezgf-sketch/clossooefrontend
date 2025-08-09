import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Property from './pages/Property';
import Workflow from './pages/Workflow';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App(){
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(()=>{
    const t = localStorage.getItem('token');
    if(t) setToken(t);
  },[]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <Router>
      <Navbar token={token} onLogout={handleLogout} />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/listings' element={<Listings token={token} />} />
          <Route path='/property/:id' element={<Property token={token} />} />
          <Route path='/dashboard/*' element={token ? <Dashboard token={token} /> : <Navigate to='/login' />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
        </Routes>
      </main>
    </Router>
  );
}