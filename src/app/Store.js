import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./combinedreducers";
import { Apiservices } from "./middlewares/apiservices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistConfig } from "./persist/persistconfig";
import { persistReducer, persistStore } from "redux-persist";

// REDUX PERSISIST CONFIGURATION
const persistedReducer = persistReducer(persistConfig, rootReducers);

const Store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(Apiservices.middleware),
});

setupListeners(Store.dispatch);

const persistor = persistStore(Store);

export { Store, persistor };
