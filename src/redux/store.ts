import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { list } from "../api/list";
import books from "./reducers/books";
import search from "./reducers/search";
import loadMore from "./reducers/loadMore";

const rootReducer = combineReducers({
  search: search,
  books: books,
  loadMore: loadMore,
  [list.reducerPath]: list.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(list.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
