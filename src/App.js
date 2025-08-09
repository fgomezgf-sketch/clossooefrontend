import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SingleListing from "./pages/SingleListing";
import Search from './pages/Search';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
export default function App(){ return (<Router><Navbar/><main className='container'><Routes><Route path='/' element={<Home/>}/><Route path='/search' element={<Search/>}/><Route path='/dashboard/*' element={<Dashboard/>}/><Route path='/login' element={<Login/>}/><Route path='/register' element={<Register/>}/></Routes></main></Router>);}        <Route path="/listing/:id" element={<SingleListing />} />
