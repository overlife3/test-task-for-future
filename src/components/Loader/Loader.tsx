import React from "react";
import classNames from "classnames";
import loaderGif from "../../assets/gifs/loader.gif";
import style from "./Loader.module.scss";

type Props = {
  cn?: string;
  visible: boolean;
};

function Loader({ visible, cn }: Props) {
  const loaderCn = classNames(style.loader, cn);
  if (!visible) return null;
  return (
    <div className={loaderCn}>
      <img src={loaderGif} alt="loading..." />
    </div>
  );
}

export default Loader;
