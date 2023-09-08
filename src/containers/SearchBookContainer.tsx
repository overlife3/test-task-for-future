import React from "react";
import SearchBook from "../components/Forms/SearchBook/SearchBook";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { actions as actionsSearch } from "../redux/reducers/search";
import { listBooksThunk } from "../api/thunks/listBooksThunk";
import { isRequestListAllowed } from "../helpers/isRequestListAllowed";
import { getListBooks } from "../api/getlistBooks";
function SearchBookContainer() {
  const dispatch = useAppDispatch();

  return (
    <SearchBook
      onSubmit={(data) => {
        dispatch(actionsSearch.setFields(data));
        getListBooks(dispatch, data);
      }}
    />
  );
}

export default SearchBookContainer;
