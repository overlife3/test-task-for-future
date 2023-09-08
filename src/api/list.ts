import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { buildUrlParams } from "../helpers/buildUrlParams";
import { buildUrlVolumes } from "../helpers/buildUrlVolumes";
import { filterBooksData } from "../helpers/filterBooksData";
import { Book, ParamsUrl, SearchFields, VolumesUrl } from "../types/types";

type ArgsGetList = SearchFields;

export type ResultGetList = {
  items: Book[];
  totalItems: number;
};
const APIKey = process.env.REACT_APP_API_KEY;

export const list = createApi({
  reducerPath: "list",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/books/v1/",
  }),
  endpoints: (builder) => ({
    getListBooks: builder.query<ResultGetList, ArgsGetList>({
      query: (args) => ({
        url: `${buildUrlVolumes(args)}${buildUrlParams(args)}&key=${APIKey}`,
      }),
      transformResponse: (res: any[]) => {
        return filterBooksData(res);
      },
    }),
  }),
});

export const { useGetListBooksQuery } = list;
