import { createSlice } from "@reduxjs/toolkit";
import {data} from "../consts/shotsData"
const initialShotsState = { shots: data };

const shotsSlice = createSlice({
  name: "shots",
  initialState: initialShotsState,
  reducers: {
    loadData(state, action) {
      state.data = action.payload;
    },
  },
});

export const shotsActions = shotsSlice.actions;

export default shotsSlice.reducer;