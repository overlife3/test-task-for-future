import classNames from "classnames";
import React from "react";
import { Controller, Control } from "react-hook-form";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./InputSearch.module.scss";

type Props = {
  onSearch: () => void;
  onChange: (value: string) => void;
  value: string;
  cn?: string;
};

function InputSearch({ onSearch, cn, onChange, value }: Props) {
  const searchCn = classNames(style.search, cn);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };

  return (
    <label className={searchCn}>
      <input
        type="text"
        className={style.input}
        onChange={handleChange}
        value={value}
      />
      <button className={style.search_btn} onClick={onSearch}>
        <SvgSelector name="search" />
      </button>
    </label>
  );
}

export default InputSearch;
