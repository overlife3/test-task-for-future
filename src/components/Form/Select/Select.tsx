import classnames from "classnames";
import { FC, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import SvgSelector from "../../SvgSelector/SvgSelector";
import style from "./Select.module.scss";

type Props = {
  options: string[];
  value: string | null;
  placeholder?: string;
  cn?: string;
  onChange: (option: string | null) => void;
};

const Select: FC<Props> = ({ options, placeholder, value, cn, onChange }) => {
  const selectRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useOutsideClick(selectRef, () => {
    setIsOpen(false);
  });

  const selectClassName = classnames(style.select, { [style.open]: isOpen });

  const handleOption = (option: string | null) => {
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className={style.field + " " + cn} ref={selectRef}>
      <div className={selectClassName}>
        <div className={style.placeholder} onClick={handleOpen}>
          {value || placeholder}
          <span className={style.svg}>
            <SvgSelector name="down" />
          </span>
        </div>
        <div className={style.options_list_container}>
          <ul className={style.options_list}>
            {placeholder && (
              <li className={style.option} onClick={() => handleOption(null)}>
                {placeholder}
              </li>
            )}
            {options.map((option) => (
              <li
                className={style.option}
                onClick={() => handleOption(option)}
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
