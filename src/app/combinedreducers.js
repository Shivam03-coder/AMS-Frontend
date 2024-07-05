import { combineReducers } from "@reduxjs/toolkit";
import { Apiservices } from "./middlewares/apiservices";
import { userSlice } from "./slices/userslice";
export const rootReducers = combineReducers({
  user: userSlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});
