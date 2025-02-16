import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import { fetchUserData, updateUserData } from '@/apis/user';

interface UserState {
  userInfo: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userInfo: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
      state.loading = false;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const fetchUser = (): AppThunk => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const userData = await fetchUserData(); // Your API call
    dispatch(fetchUserSuccess(userData));
  } catch (error) {
    console.error('something wrong', error);
    dispatch(fetchUserFailure('Failed to fetch user'));
  }
};

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData: { name: string; email: string; age: number }, { rejectWithValue }) => {
    try {
      console.log('Updating user with data:', userData);
      return await updateUserData(userData);
    } catch (error: any) {
      console.error('Error updating user:', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to update user');
    }
  }
);


export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
