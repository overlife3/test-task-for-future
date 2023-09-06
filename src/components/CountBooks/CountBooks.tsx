import React from "react";
import style from "./CountBooks.module.scss";

type Props = {
  count: number;
};

function CountBooks({ count }: Props) {
  return <p className={style.count_books}>Found {count} results</p>;
}

export default CountBooks;
