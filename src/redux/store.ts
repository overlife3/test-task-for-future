import { combineReducers, configureStore } from "@reduxjs/toolkit";
import books from "./reducers/books";
import search from "./reducers/search";
import loadMore from "./reducers/loadMore";
import list from "./reducers/list";

const rootReducer = combineReducers({
  search: search,
  books: books,
  loadMore: loadMore,
  list: list,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
