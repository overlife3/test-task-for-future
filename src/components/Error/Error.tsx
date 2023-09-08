import classNames from "classnames";
import React from "react";
import style from "./Error.module.scss";

type Props = {
  onClick: () => void;
  message: string;
  textBtn: string;
  cn?: string;
};

function Error({ onClick, message, textBtn, cn }: Props) {
  const errorCn = classNames(style.error, cn);

  return (
    <div className={errorCn}>
      <p className={style.message}>{message}</p>
      <button className={style.btn} onClick={onClick}>
        {textBtn}
      </button>
    </div>
  );
}

export default Error;
