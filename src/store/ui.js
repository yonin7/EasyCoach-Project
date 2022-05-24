import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { message: "", showGraphs: false };

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    messageHandler(state, action) {
      state.message = action.payload;
    },
    showGraphsToggle(state, action) {
      state.showGraphs = action.payload;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice.reducer;
