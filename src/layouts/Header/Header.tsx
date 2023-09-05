import React from "react";
import SearchBookContainer from "../../containers/SearchBookContainer";
import style from "./Header.module.scss";

function Header() {
  return (
    <section className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          <h1 className={style.title}>Search for books</h1>
          <SearchBookContainer />
        </div>
      </div>
    </section>
  );
}

export default Header;
