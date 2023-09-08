import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listBooksThunk } from "../../api/thunks/listBooksThunk";
import { loadMoreThunk } from "../../api/thunks/loadMoreThunk";
import { MAX_RESULTS } from "../../constant";
import { ResultGetList } from "../../types/types";
import { actions as actionsSearch } from "./search";

type State = {
  isLoading: boolean;
  error: any;
  emptyResponse: boolean;
};

const initialState: State = {
  isLoading: false,
  error: null,
  emptyResponse: false,
};

const loadMoreReducer = createSlice({
  name: "loadMoreReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMoreThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      loadMoreThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      loadMoreThunk.fulfilled,
      (state, action: PayloadAction<ResultGetList>) => {
        const numberBooks = action.payload.items.length;
        state.isLoading = false;

        if (numberBooks < MAX_RESULTS) {
          state.emptyResponse = true;
        }
      }
    );
    builder.addCase(
      listBooksThunk.fulfilled,
      (state, action: PayloadAction<ResultGetList>) => {
        const numberBooks = action.payload.items.length;

        if (numberBooks < MAX_RESULTS) {
          state.emptyResponse = true;
        }
      }
    );
    builder.addCase(actionsSearch.setFields.type, (state) => {
      state.emptyResponse = false;
    });
  },
});

export const actions = loadMoreReducer.actions;
export default loadMoreReducer.reducer;
