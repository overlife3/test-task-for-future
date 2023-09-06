import React from "react";
import CardBookContainer from "../../containers/CardBookContainer";
import { Book } from "../../types/types";
import style from "./ListBook.module.scss";
type Props = {
  items: Book[];
  onLoadMore: () => void;
};

function ListBook({ items, onLoadMore }: Props) {
  return (
    <div className={style.container}>
      <div className={style.list}>
        {items.map((item) => (
          <div className={style.item}>
            <CardBookContainer item={item} />
          </div>
        ))}
      </div>
      <button onClick={onLoadMore} className={style.load_more}>
        Load more
      </button>
    </div>
  );
}

export default ListBook;
