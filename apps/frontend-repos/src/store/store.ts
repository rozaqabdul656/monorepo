// import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlices';
import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<Promise<void>, RootState, unknown, Action<string>>; // D
