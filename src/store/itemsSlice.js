import {createSlice} from "@reduxjs/toolkit";
import { DEFAULT_VALUES } from "../data/items";

const itemsSlice = createSlice({
  name: 'items',
  initialState: DEFAULT_VALUES,
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;