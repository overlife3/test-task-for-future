import { ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { isRequestListAllowed } from "../helpers/isRequestListAllowed";
import { actions } from "../redux/reducers/list";
import { Search } from "../types/types";
import { listBooksThunk } from "./thunks/listBooksThunk";

export const getListBooks = (dispatch: any, data: Search) => {
  if (isRequestListAllowed(data)) {
    dispatch(listBooksThunk());
    dispatch(actions.setEmptyRequest(false));
  } else dispatch(actions.setEmptyRequest(true));
};
