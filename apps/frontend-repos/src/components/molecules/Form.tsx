'use client';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { Button, TextField, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', JSON.stringify(user));
      setError('');
      router.push('/');
    } catch (err) {
      console.error('something wrong', err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Form;
