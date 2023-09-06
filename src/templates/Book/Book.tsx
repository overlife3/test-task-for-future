import React from "react";
import BookInfoContainer from "../../containers/BookInfoContainer";
import style from "./Book.module.scss";

function Book() {
  return (
    <section className={style.section}>
      <BookInfoContainer />
    </section>
  );
}

export default Book;
