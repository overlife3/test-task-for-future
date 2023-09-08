import { useEffect } from "react";
import { listBooksThunk } from "../api/thunks/listBooksThunk";
import { useGetListBooksQuery } from "../api/list";
import { areObjectsEqual } from "../helpers/areObjectsEqual";
import { EmptySearch, Search } from "../types/types";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

export const useGetListBooks = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((store) => store.search);
  const request: Search = {
    intitle: "",
    subject: "all",
  };
  request.intitle = search.intitle;
  request.subject = search.subject;
  const emptyRequest: EmptySearch = {
    intitle: "",
    subject: "all",
  };

  useEffect(() => {
    if (!areObjectsEqual(request, emptyRequest)) {
      dispatch(listBooksThunk());
    }
  }, [search.intitle, search.orderBy, search.subject]);
};
