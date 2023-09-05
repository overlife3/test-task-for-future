import React from "react";
import style from "./Book.module.scss";

function Book() {
  return (
    <section className={style.section}>
      <div className={style.cover}>
        <div className={style.image}>
          <img />
        </div>
      </div>
    </section>
  );
}

export default Book;
