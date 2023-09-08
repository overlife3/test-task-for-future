export type Category =
  | "all"
  | "art"
  | "biography"
  | "computers"
  | "history"
  | "medical"
  | "poetry";

export type SortValues = "relevance" | "newest";

export interface Book {
  id: string;
  title: string;
  authors: string[];
  description: string;
  image: string;
  categories: string[];
}

export type EmptySearch = {
  intitle: "";
  subject: "all";
};

export type Search = VolumesUrl;

export type VolumesUrl = {
  intitle: string;
  subject: Category;
};

export type ParamsUrl = {
  orderBy: SortValues;
  maxResults: number;
  startIndex: number;
};

export type SearchFields = VolumesUrl & ParamsUrl;

export type ResultGetList = {
  items: Book[];
  totalItems: number;
};
