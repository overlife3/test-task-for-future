import React from "react";
import { useNavigate } from "react-router-dom";
import CardBook from "../components/CardBook/CardBook";
import { Book } from "../types/types";
type Props = {
  item: Book;
};

function CardBookContainer({ item }: Props) {
  const navigate = useNavigate();
  return (
    <CardBook
      item={item}
      onClick={() => {
        navigate(`/${item.id}`);
      }}
    />
  );
}

export default CardBookContainer;
