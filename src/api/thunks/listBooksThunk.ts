import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constant";
import { buildUrlParams } from "../../helpers/buildUrlParams";
import { buildUrlVolumes } from "../../helpers/buildUrlVolumes";
import { filterBooksData } from "../../helpers/filterBooksData";
import { RootState } from "../../redux/store";
import { ResultGetList } from "../../types/types";

const APIKey = process.env.REACT_APP_API_KEY;

export const listBooksThunk = createAsyncThunk(
  "listBooksThunk",
  async (_, thunkApi): Promise<ResultGetList> => {
    const state = thunkApi.getState() as RootState;
    const search = state.search;
    const response = await fetch(
      `${BASE_URL}${buildUrlVolumes(search)}${buildUrlParams(
        search
      )}&key=${APIKey}`
    );
    if (!response.ok) {
      throw new Error("Error when requesting books");
    }
    const data = await response.json();
    return filterBooksData(data);
  }
);
