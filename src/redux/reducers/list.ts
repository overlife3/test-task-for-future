import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_RESULTS } from "../../constant";
import { SearchFields } from "../../types/types";

type State = {
  emptyRequest: boolean;
};

const initialState: State = {
  emptyRequest: true,
};

const listReducer = createSlice({
  name: "listReducer",
  initialState: initialState,
  reducers: {
    setEmptyRequest: (state, action: PayloadAction<boolean>) => {
      state.emptyRequest = action.payload;
    },
  },
});

export const actions = listReducer.actions;
export default listReducer.reducer;
