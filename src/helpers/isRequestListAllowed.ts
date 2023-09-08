import { EmptySearch, Search, SearchFields } from "../types/types";
import { areObjectsEqual } from "./areObjectsEqual";

export const isRequestListAllowed = (search: Search) => {
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

  return !areObjectsEqual(request, emptyRequest);
};
