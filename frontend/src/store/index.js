import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";
import userIsLoggedReducer from "./UserIsLoggedReducer";

export const store = configureStore({
  reducer: { ProductsReducer, userIsLoggedReducer },
});
