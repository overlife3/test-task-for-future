import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { MAX_RESULTS } from "../../constant";
import { Book, ResultGetList, SearchFields } from "../../types/types";
import { actions as actionsSearch } from "./search";
import { listBooksThunk } from "../../api/thunks/listBooksThunk";
import { loadMoreThunk } from "../../api/thunks/loadMoreThunk";

type State = {
  totalItems: number | null;
  data: Book[];
  isLoading: boolean;
  error: any;
};

const initialState: State = {
  totalItems: null,
  data: [],
  isLoading: false,
  error: null,
};

const booksReducer = createSlice({
  name: "booksReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionsSearch.setFields.type, (state) => {
      state.data = [];
    });
    builder.addCase(listBooksThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.totalItems = null;
    });
    builder.addCase(
      listBooksThunk.fulfilled,
      (state, action: PayloadAction<ResultGetList>) => {
        state.data = [...state.data, ...action.payload.items];
        state.totalItems = action.payload.totalItems;
        state.isLoading = false;
      }
    );
    builder.addCase(
      listBooksThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      loadMoreThunk.fulfilled,
      (state, action: PayloadAction<ResultGetList>) => {
        state.data = [...state.data, ...action.payload.items];
      }
    );
  },
});

export const actions = booksReducer.actions;
export default booksReducer.reducer;
