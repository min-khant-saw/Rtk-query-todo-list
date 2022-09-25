import {
  nanoid,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import axios from "axios";

import logger from "redux-logger";

export const fetchData = createAsyncThunk(
  "json/user",
  async (_, { dispatch }) => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => data.data);
  }
);

export const deleteData = createAsyncThunk("json/delete-user", async (id) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
    .then((data) => data.data);
  return id;
});

const userData = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "users",
  initialState: userData.getInitialState({
    loading: false,
    status: "offline",
    error: null,
  }),
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
      state.status = "idle";
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.status = "online";
      userData.setAll(state, payload);
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.status = "offline";
      state.error = action.error.message;
    },

    [deleteData.pending]: (state) => {
      state.loading = true;
      state.status = "idle";
    },
    [deleteData.fulfilled]: (state, { payload: id }) => {
      state.loading = false;
      state.status = "online";
      userData.removeOne(state, id);
    },
    [deleteData.rejected]: (state, action) => {
      state.loading = false;
      state.status = "offline";
      state.error = action.error.message;
    },
  },
});

const combieReduce = combineReducers({
  users: userSlice.reducer,
});

const store = configureStore({
  reducer: combieReduce,
  // middleware: [...getDefaultMiddleware(), logger],
});

export const selector = userData.getSelectors((state) => state.users);

export default store;
