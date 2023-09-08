import React from "react";
import { useGetListBooksQuery } from "../api/list";
import CountBooks from "../components/CountBooks/CountBooks";
import { useAppSelector } from "../hooks/useAppSelector";

function CountBooksContainer() {
  const { totalItems } = useAppSelector((store) => store.books);

  if (!totalItems) return null;

  return <CountBooks count={totalItems} />;
}

export default CountBooksContainer;
