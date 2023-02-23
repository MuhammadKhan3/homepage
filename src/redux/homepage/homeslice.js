import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 floorData:{
    floor:"First Floor",
    square:56500,
    shop:"F1",
    shopFeet:714.12,
    totalPrice:43151875
  },
  GroundFloor:[
    {
      floor:"Ground Floor",
      square: 95000,
      shop:"G1",
      shopFeet:652.56 ,
      totalPrice:61993200
    },
    {
      floor:"Ground Floor",
      square:95000,
      shop:"G2",
      shopFeet:639.31 ,
      totalPrice: 60734450,
      sold:true,
    },
    {
      floor:"Ground Floor",
      square:95000 ,
      shop:"G3",
      shopFeet:639.31 ,
      totalPrice: 60734450
    },
    {
      floor:"Ground Floor",
      square:95000,
      shop:"G4",
      shopFeet:612.81  ,
      totalPrice: 40751865,

    }
  ],
  LowerGround:[

      {
        floor:"Lower Ground",
        square:66500,
        shop:"L1",
        shopFeet:652.56 ,
        totalPrice:43395240
      },
      {
        floor:"Lower Ground",
        square:66500,
        shop:"L2",
        shopFeet:639.31 ,
        totalPrice: 42514115
      },
      {
        floor:"Lower Ground",
        square:66500,
        shop:"L3",
        shopFeet:639.31 ,
        totalPrice: 42514115
      },
      {
        floor:"Lower Ground",
        square:66500,
        shop:"L4",
        shopFeet:612.81  ,
        totalPrice: 40751865,
        sold:true
      }
  ],
  Mezzanine:[
    {
      floor:"Mezzanine",
      square: 71500,
      shop:"M1", 
      shopFeet:714.12 ,
      totalPrice:51059580,
      sold:true,
    },
    {
      floor:"Mezzanine",
      square:71500,
      shop:"M2",
      shopFeet:699.62,
      totalPrice:50022830,
    },
    {
      floor:"Mezzanine",
      square:71500,
      shop:"M3",
      shopFeet:699.62,
      totalPrice: 50022830
    },
    {
      floor:"Mezzanine",
      square:71500,
      shop:"M4",
      shopFeet:670.62,
      totalPrice: 47949330,
    }
  ],
  FirstFloor:[
    {
      floor:"First Floor",
      square:  56500,
      shop:"F1", 
      shopFeet:714.12 ,
      totalPrice: 40347780,
      sold:true,
    },
    {
      floor:"First Floor",
      square:56500,
      shop:"F2",
      shopFeet:699.62,
      totalPrice:39528530,
    },
    {
      floor:"First Floor",
      square:71500,
      shop:"F3",
      shopFeet:699.62,
      totalPrice: 39528530,
      sold:true,
    },
    {
      floor:"First Floor",
      square:71500,
      shop:"F4",
      shopFeet:670.62,
      totalPrice: 37890030,
    }
  ],
  SecondFloor:[
    {
      floor:"Second Floor",
      square:  56500,
      shop:"F1", 
      shopFeet:714.12 ,
      totalPrice: 40347780,
      sold:true,
    },
    {
      floor:"Second Floor",
      square:56500,
      shop:"F2",
      shopFeet:699.62,
      totalPrice:39528530,
    },
    {
      floor:"Second Floor",
      square:71500,
      shop:"F3",
      shopFeet:699.62,
      totalPrice: 39528530,
      sold:true,
    },
    {
      floor:"Second Floor",
      square:71500,
      shop:"F4",
      shopFeet:670.62,
      totalPrice: 37890030,
    }
  ]
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