import React from "react";
import SearchBook from "../components/Forms/SearchBook/SearchBook";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { actions as actionsSearch } from "../redux/reducers/search";
import { actions as actionsBooks } from "../redux/reducers/books";
function SearchBookContainer() {
  const dispatch = useAppDispatch();

  return (
    <SearchBook
      onSubmit={(data) => {
        dispatch(actionsSearch.setFields(data));
      }}
    />
  );
}

export default SearchBookContainer;
