import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Register({setToken}){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const base = process.env.REACT_APP_API_BASE || '';

  const submit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(base + '/api/auth/register', { email, password });
      if(res.data.token){ localStorage.setItem('token', res.data.token); setToken(res.data.token); navigate('/dashboard'); }
    }catch(e){ alert('Register failed'); }
  };

  return (
    <div className="auth">
      <h2>Create account</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn" type="submit">Create Account</button>
      </form>
    </div>
  );
}