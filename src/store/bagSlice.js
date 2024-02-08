import {createSlice} from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addintoBag: (state, action) => {
      state.push(action.payload);
    },
    deleteFromBag:(state,action) => {
      return state.filter(item => item!==action.payload);
    }
  }
});

export const bagActions = bagSlice.actions;

export default bagSlice;