import { configureStore } from '@reduxjs/toolkit';
import userReducer from './dataSlice'

const store = configureStore({
  reducer: {
    user:userReducer
  },
})

export default store;
