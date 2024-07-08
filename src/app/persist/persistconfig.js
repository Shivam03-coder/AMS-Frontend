import storage from "redux-persist/lib/storage";

// PERSIST CONFIGURATION

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userstate"], // list of reducers to persist
};

export { persistConfig };
