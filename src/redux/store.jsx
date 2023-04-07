import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./slices/bookApi";
import tokenSlice from "./slices/tokenSlice";
import userSlice from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST } from "redux-persist";

const persistConfig = {
  key: "user",
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    user: persistedUserSlice,
    token: tokenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(bookApi.middleware),
  devTools: false,
});

export let persistor = persistStore(store);
