import { createSlice } from "@reduxjs/toolkit";

// this is the initatl state values for the redux store
// add to this for new vars and set whatever default you want
const initialState = {
  view: null,
  selectedID: "none",
  storeHighlight: null,
};

// next, for every key in the initialState
// add a reducer and a basic setter action
// this is the simple way to just set it
// look up redux doc for more advances ways to add/alter actions
export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setview: (state, action) => {
      state.view = action.payload;
    },
    setselectedID: (state, action) => {
      state.selectedID = action.payload;
    },
    setstoreHighlight: (state, action) => {
      state.storeHighlight = action.payload;
    },
  },
});

// finally, add a new export for the
// reducer/action info that you added above
export const { setview } = mainSlice.actions;
export const { setselectedID } = mainSlice.actions;
export const { setstoreHighlight } = mainSlice.actions;

export default mainSlice.reducer;
