import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import EmployeesReducer from "./EmployeesReducer";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "store",
  storage,
};

const reducer = combineReducers({
  employees: EmployeesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistStor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
