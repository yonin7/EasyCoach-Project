import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data"
import uiReducer from "./ui"
import shotsReducer from "./shots"



const store = configureStore({
  reducer: { data: dataReducer, UI: uiReducer, shots: shotsReducer },
});

export default store;
