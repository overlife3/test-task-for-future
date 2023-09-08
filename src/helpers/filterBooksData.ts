import { ResultGetList } from "../api/list";
import { filterBookData } from "./filterBookData";

export const filterBooksData = (data: any): ResultGetList => {
  const books = data.items.map((item: any) => filterBookData(item));
  return {
    totalItems: data.totalItems,
    items: books,
  };
  // https://www.googleapis.com/books/v1/volumes?q=intitle:node+orderBy:newest+subject:computers&maxResults=30&key=AIzaSyBoWgJkvRcKr3dGJ3mPGQLwo-K_bjs8JHQ
};
