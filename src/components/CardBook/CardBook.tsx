import React from "react";
import { Book } from "../../types/types";
import Cover from "../Cover/Cover";
import style from "./CardBook.module.scss";

type Props = {
  item: Book;
  onClick: () => void;
};

function CardBook({ item, onClick }: Props) {
  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.container}>
        <Cover src={item.image} />
      </div>
      <div className={style.info}>
        <p className={style.category}>{item.categories[0] || ""}</p>
        <p className={style.title}>{item.title || ""}</p>
        <p className={style.author}>{item.authors.join(", ") || ""}</p>
      </div>
    </div>
  );
}

export default CardBook;
