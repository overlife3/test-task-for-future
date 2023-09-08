import { ResultGetList } from "../types/types";
import { filterBookData } from "./filterBookData";

export const filterBooksData = (data: any): ResultGetList => {
  const books = data.items.map((item: any) => filterBookData(item));
  return {
    totalItems: data.totalItems,
    items: books,
  };
};
