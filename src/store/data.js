import { createSlice } from "@reduxjs/toolkit";

const initialDataState = { data: [], message: "", loading: false };

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    loadData(state, action) {
      state.data = action.payload;
    },
    loadingToggle(state, action) {
      state.loading = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
