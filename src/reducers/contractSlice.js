import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalContracts: 0,
  loading: false,
  data: ""
}

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
   addDataContracts: (state,action)=>{
    state.data = action.payload
    state.loading = true
   },
   
  },
  
})


export const { addDataContracts, loadData} = contractSlice.actions

export default contractSlice.reducer