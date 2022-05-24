import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data"
import uiReducer from "./ui"



const store = configureStore({
  reducer: { data: dataReducer, UI: uiReducer },
});

export default store;
