import React from "react";
import { loadMoreThunk } from "../../api/thunks/loadMoreThunk";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
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

  if (emptyResponse) return null; // если пришло книг меньше шага пагинации, то кнопка должна скрываться

  if (isLoading) return <Loader visible={isLoading} cn={style.loader} />;

  if (error)
    return (
      <Error
        cn={style.error}
        message="An error has occurred"
        textBtn="Repeat"
        onClick={() => dispatch(loadMoreThunk())}
      />
    );

  return <Button cn={style.btn} onClick={onClick} text={"Load more"} />;
}

export default LoadMoreContainer;
