import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TodoApi } from "../Api/createApi";

const store = configureStore({
  reducer: {
    [TodoApi.reducerPath]: TodoApi.reducer,
  },
  middleware: [...getDefaultMiddleware(), TodoApi.middleware], // add MiddleWare Auto Make Refresh
});

setupListeners(store.dispatch);

export default store;
