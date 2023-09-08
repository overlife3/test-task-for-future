import React from "react";
import { loadMoreThunk } from "../../api/thunks/loadMoreThunk";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { actions } from "../../redux/reducers/search";
import style from "./LoadMoreContainer.module.scss";

function LoadMoreContainer() {
  const dispatch = useAppDispatch();
  const { isLoading, error, emptyResponse } = useAppSelector(
    (store) => store.loadMore
  );
  const onClick = () => {
    dispatch(actions.increaseStartIndex());
    dispatch(loadMoreThunk());
  };

  if (emptyResponse) return null;

  if (isLoading) return <Loader visible={isLoading} cn={style.loader} />;

  return <Button cn={style.btn} onClick={onClick} text={"Load more"} />;
}

export default LoadMoreContainer;
