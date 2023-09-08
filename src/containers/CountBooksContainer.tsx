import React from "react";
import CountBooks from "../components/CountBooks/CountBooks";
import { useAppSelector } from "../hooks/useAppSelector";

function CountBooksContainer() {
  const { totalItems } = useAppSelector((store) => store.books);
  const emptyRequest = useAppSelector((store) => store.list.emptyRequest);

  if (emptyRequest) return null;

  if (!totalItems) return null;

  return <CountBooks count={totalItems} />;
}

export default CountBooksContainer;
