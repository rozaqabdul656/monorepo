'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUser } from '@/store/userSlices';
import { Button, TextField, Typography, Box, Snackbar, Alert } from '@mui/material';
// import { RootState } from '@/store/store';
import { RootState, AppDispatch } from '@/store/store'; // Correct path
const UpdateForm = () => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>(); //
  const { userInfo, loading, error } = useSelector((state: RootState) => state.user);

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  // Update form fields when userInfo is fetched
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || '');
      setEmail(userInfo.email || '');
      setAge(userInfo.age || 0);
    }
  }, [userInfo]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updateUser({ name, email, age }));
      setOpenSnackbar(true); // ✅ Show success notification
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}
    >
      {/* Fetch User Button */}
      <Button variant="contained" onClick={() => dispatch(fetchUser())} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch User'}
      </Button>

      <Typography variant="h6">Update User Info</Typography>

      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth required />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
      <TextField label="Age" value={age} onChange={(e) => setAge(parseInt(e.target.value, 10))} fullWidth required  type="number"  />

      {error && <Typography color="error">{error}</Typography>}

      {/* Update Button */}
      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update'}
      </Button>
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          User updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateForm;
