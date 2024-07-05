import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./combinedreducers";
import { Apiservices } from "./middlewares/apiservices";
import { setupListeners } from "@reduxjs/toolkit/query";

export const Store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apiservices.middleware),
});

setupListeners(Store.dispatch);
