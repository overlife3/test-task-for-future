import classNames from "classnames";
import React from "react";
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
    <div className={searchCn}>
      <input
        type="text"
        className={style.input}
        onChange={handleChange}
        value={value}
      />
      <button type="submit" onClick={onSearch} className={style.search_btn}>
        <SvgSelector name="search" />
      </button>
    </div>
  );
}

export default InputSearch;
