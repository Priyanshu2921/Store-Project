import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
   
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
})
