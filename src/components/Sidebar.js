import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Sidebar({children}){
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h3>Account</h3>
        <nav>
          <NavLink to="profile" className={({isActive})=> isActive ? 'active' : ''}>Profile</NavLink>
          <NavLink to="saved" className={({isActive})=> isActive ? 'active' : ''}>Saved Homes</NavLink>
          <NavLink to="workflows" className={({isActive})=> isActive ? 'active' : ''}>Workflows</NavLink>
          <NavLink to="documents" className={({isActive})=> isActive ? 'active' : ''}>Documents</NavLink>
        </nav>
      </aside>
      <section className="dashboard-content">
        {children}
        <Outlet />
      </section>
    </div>
  );
}