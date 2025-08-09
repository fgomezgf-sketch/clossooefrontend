import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Profile from './dashboard/Profile';
import Saved from './dashboard/Saved';
import Workflows from './dashboard/Workflows';
import Documents from './dashboard/Documents';

export default function Dashboard(){ 
  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<div><h2>Welcome to your dashboard</h2></div>} />
        <Route path="profile" element={<Profile />} />
        <Route path="saved" element={<Saved />} />
        <Route path="workflows" element={<Workflows />} />
        <Route path="documents" element={<Documents />} />
      </Routes>
    </Sidebar>
  );
}