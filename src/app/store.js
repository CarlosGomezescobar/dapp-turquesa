import { configureStore } from '@reduxjs/toolkit'

import contractReducer from "../reducers/contractSlice"


export const store = configureStore({
  reducer: {
    contract: contractReducer,
  },
})