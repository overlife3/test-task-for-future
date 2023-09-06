import React from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../../types/types";
import Cover from "../Cover/Cover";
import ToBack from "../ToBack/ToBack";
import style from "./BookInfo.module.scss";

type Props = {
  item: Book;
};

function BookInfo({ item }: Props) {
  const navigate = useNavigate();
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
        <ToBack onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}

export default BookInfo;
