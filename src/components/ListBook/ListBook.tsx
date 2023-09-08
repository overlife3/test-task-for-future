import React from "react";
import CardBookContainer from "../../containers/CardBookContainer";
import LoadMoreContainer from "../../containers/LoadMoreContainer/LoadMoreContainer";
import { Book } from "../../types/types";
import style from "./ListBook.module.scss";

type Props = {
  items: Book[];
};

function ListBook({ items }: Props) {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {items.map((item) => (
          <div className={style.item} key={item.id}>
            <CardBookContainer item={item} />
          </div>
        ))}
      </div>
      <LoadMoreContainer />
    </div>
  );
}

export default ListBook;
