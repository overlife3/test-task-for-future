import React from "react";
import ListBook from "../../components/ListBook/ListBook";
import Loader from "../../components/Loader/Loader";
import { useAppSelector } from "../../hooks/useAppSelector";
import style from "./ListBookContainer.module.scss";
function ListBookContainer() {
  const { data, error, isLoading } = useAppSelector((store) => store.books);

  if (error) return <p className={style.error}>Error</p>;

  if (isLoading) return <Loader visible={isLoading} cn={style.loader} />;

  if (data.length === 0)
    return <h3 className={style.missing}>There are no such books</h3>;

  return <ListBook items={data} />;
}

export default ListBookContainer;
