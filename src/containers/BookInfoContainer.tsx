import React from "react";
import BookInfo from "../components/BookInfo/BookInfo";
import { bookMock } from "../MOCK/MOCK";

function BookInfoContainer() {
  return <BookInfo item={bookMock} />;
}

export default BookInfoContainer;
