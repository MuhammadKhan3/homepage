import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './homepage/homeslice'
export const store = configureStore({
  reducer: {
    homeReducer:HomeReducer
  },
})