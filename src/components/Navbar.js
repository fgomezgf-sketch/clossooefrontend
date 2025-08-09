import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({token,onLogout}){
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">Closied</Link>
        <Link to="/listings" className="nav-link">Listings</Link>
      </div>
      <div className="nav-right">
        {token ? (
          <>
            <Link to="/dashboard" className="btn">Dashboard</Link>
            <button onClick={onLogout} className="btn subtle">Sign out</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">Sign in</Link>
            <Link to="/register" className="btn primary">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}