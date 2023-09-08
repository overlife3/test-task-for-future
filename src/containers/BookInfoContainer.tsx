import React from "react";
import { useParams } from "react-router-dom";
import BookInfo from "../components/BookInfo/BookInfo";
import { useAppSelector } from "../hooks/useAppSelector";

function BookInfoContainer() {
  const { bookId } = useParams();
  const books = useAppSelector((store) => store.books.data);
  const book = books.find((item) => item.id === bookId);
  if (!book) return <p>Error</p>;
  return <BookInfo item={book} />;
}

export default BookInfoContainer;
