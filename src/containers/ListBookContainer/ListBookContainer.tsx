import React from "react";
import { listBooksThunk } from "../../api/thunks/listBooksThunk";
import Error from "../../components/Error/Error";
import ListBook from "../../components/ListBook/ListBook";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import style from "./ListBookContainer.module.scss";

function ListBookContainer() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useAppSelector((store) => store.books);

  if (isLoading) return <Loader visible={isLoading} cn={style.loader} />;

  if (error)
    return (
      <Error
        cn={style.error}
        message="An error has occurred"
        onClick={() => {
          dispatch(listBooksThunk());
        }}
        textBtn="Repeat"
      />
    );

  if (data.length === 0)
    return <h3 className={style.missing}>There are no such books</h3>;

  return <ListBook items={data} />;
}

export default ListBookContainer;
