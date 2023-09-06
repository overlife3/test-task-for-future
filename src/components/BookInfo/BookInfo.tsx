import React from "react";
import { Book } from "../../types/types";
import Cover from "../Cover/Cover";
import style from "./BookInfo.module.scss";

type Props = {
  item: Book;
};

function BookInfo({ item }: Props) {
  return (
    <div className={style.container}>
      <div className={style.cover}>
        <div className={style.image_container}>
          <Cover src={item.image} imageCn={style.image} altCn={style.alt} />
        </div>
      </div>
      <div className={style.info}>
        <p className={style.categories}>{item.categories.join("/") || ""}</p>
        <p className={style.title}>{item.title || ""}</p>
        <p className={style.authors}>{item.authors.join(", ") || ""}</p>
        <p className={style.description}>{item.description || ""}</p>
      </div>
    </div>
  );
}

export default BookInfo;
