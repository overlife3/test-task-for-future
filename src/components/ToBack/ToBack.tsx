import classNames from "classnames";
import React from "react";
import SvgSelector from "../SvgSelector/SvgSelector";
import style from "./ToBack.module.scss";
type Props = {
  cn?: string;
  onClick?: () => void;
};

function ToBack({ cn, onClick }: Props) {
  const toBackCn = classNames(cn, style.to_back);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClick && onClick();
  };
  return (
    <button className={toBackCn} onClick={handleClick}>
      <span className={style.svg}>
        <SvgSelector name="down" />
      </span>
      Back
    </button>
  );
}

export default ToBack;
