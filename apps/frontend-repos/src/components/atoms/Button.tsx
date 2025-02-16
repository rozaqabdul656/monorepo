// 'use client';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from '@/store/userSlices';
// import { Button, Typography } from '@mui/material';
// import { RootState } from '@/store/store';

// const FetchButton = () => {
//   const dispatch = useDispatch();
//   const { userInfo, loading, error } = useSelector((state: RootState) => state.user);

//   return (
//     <div>
//       <Button variant="contained" onClick={() => dispatch(fetchUser())} disabled={loading}>
//         {loading ? 'Loading...' : 'Fetch User'}
//       </Button>
//       {userInfo && <Typography>User: {userInfo.name}</Typography>}
//       {userInfo && <Typography>Email: {userInfo.email}</Typography>}
//       {userInfo && <Typography>Age: {userInfo.age}</Typography>}
//       {error && <Typography color="error">{error}</Typography>}
//     </div>
//   );
// };

// export default FetchButton;
