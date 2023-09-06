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
  title: string;
  authors: string[];
  description: string;
  image: string;
  categories: string[];
}
