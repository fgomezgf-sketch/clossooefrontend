import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login({setToken}){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const base = process.env.REACT_APP_API_BASE || '';

  const submit = async (e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(base + '/api/auth/login', { email, password });
      if(res.data.token){ localStorage.setItem('token', res.data.token); setToken(res.data.token); navigate('/dashboard'); }
    }catch(e){ alert('Login failed'); }
  };

  const googleConnect = ()=>{ window.location.href = base + '/api/google/auth'; };

  return (
    <div className="auth">
      <h2>Sign in</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn" type="submit">Sign in</button>
      </form>
      <div style={{marginTop:10}}>or</div>
      <button onClick={googleConnect} className="btn primary">Sign in with Google</button>
    </div>
  );
}