import classNames from "classnames";
import React from "react";
import style from "./Button.module.scss";

type Props = {
  cn?: string;
  onClick: () => void;
  text: string;
};

function Button({ onClick, text, cn }: Props) {
  const btnCn = classNames(style.btn, cn);
  return (
    <button onClick={onClick} className={btnCn}>
      {text}
    </button>
  );
}

export default Button;
