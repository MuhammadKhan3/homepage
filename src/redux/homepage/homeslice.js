import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 floorData:{
    floor:"First Floor",
    square:56500,
    shop:"F1",
    shopFeet:714.12,
    totalPrice:43151875
  },
}

export const HomeSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    updateFloor: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
      state.floorData=action.payload;
    },
  
  },
})

// Action creators are generated for each case reducer function
export const { updateFloor } = HomeSlice.actions

export default HomeSlice.reducer