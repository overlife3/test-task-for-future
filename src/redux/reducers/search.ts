import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_RESULTS } from "../../constant";
import { SearchFields } from "../../types/types";

type State = SearchFields;

const initialState: State = {
  // убрать три поля, которые я ввожу в форме. Или оставлю, но буду сохранять эти данные только после того,как получу данные
  intitle: "",
  orderBy: "relevance",
  subject: "all",
  maxResults: MAX_RESULTS,
  startIndex: 0,
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState: initialState,
  reducers: {
    setFields: (state, action: PayloadAction<SearchFields>) => {
      state.intitle = action.payload.intitle;
      state.orderBy = action.payload.orderBy;
      state.subject = action.payload.subject;
    },
    increaseStartIndex: (state) => {
      state.startIndex += MAX_RESULTS + 1;
    },
  },
});

export const actions = searchReducer.actions;
export default searchReducer.reducer;
