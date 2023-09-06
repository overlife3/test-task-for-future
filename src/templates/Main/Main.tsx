import React from "react";
import CountBooksContainer from "../../containers/CountBooksContainer";
import ListBookContainer from "../../containers/ListBookContainer";
import style from "./Main.module.scss";

function Main() {
  return (
    <section className={style.section}>
      <CountBooksContainer />
      <ListBookContainer />
    </section>
  );
}

export default Main;
