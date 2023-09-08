import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookInfo from "../../components/BookInfo/BookInfo";
import { useAppSelector } from "../../hooks/useAppSelector";
import Error from "../../components/Error/Error";
import style from "./BookInfoContainer.module.scss";

function BookInfoContainer() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const books = useAppSelector((store) => store.books.data);
  const book = books.find((item) => item.id === bookId);

  const goBack = () => {
    navigate(-1);
  };

  if (!book)
    return (
      <Error
        message="The book was not found"
        textBtn="Go back"
        onClick={goBack}
        cn={style.error}
      />
    );

  return <BookInfo item={book} />;
}

export default BookInfoContainer;
