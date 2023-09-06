import classNames from "classnames";
import React from "react";
import style from "./Cover.module.scss";
type Props = {
  imageCn?: string;
  altCn?: string;
  src: string;
};

function Cover({ imageCn, altCn, src }: Props) {
  const imageClassName = classNames(style.img, imageCn);
  const altClassName = classNames(style.alt, altCn);

  return (
    <>
      {src ? (
        <img src={src} alt={"Loading error"} className={imageClassName} />
      ) : (
        <div className={altClassName}>The cover was not found</div>
      )}
    </>
  );
}

export default Cover;
