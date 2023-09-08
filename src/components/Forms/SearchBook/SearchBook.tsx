import React, { useRef } from "react";
import InputSearch from "../../Form/InputSearch/InputSearch";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { SearchFields } from "../../../types/types";
import Select from "../../Form/Select/Select";
import { categories, sortValues } from "../../../data/data";
import style from "./SearchBook.module.scss";

type Props = {
  onSubmit: (data: SearchFields) => void;
};

function SearchBook({ onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    control,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<SearchFields>({
    defaultValues: {
      intitle: "",
      subject: "all",
      orderBy: "relevance",
    },
    mode: "onSubmit",
  });

  const onSearch = () => {
    const current = formRef.current;
    if (current) {
      formRef.current.dispatchEvent(new Event("submit", { cancelable: true }));
    }
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
    >
      <Controller
        name="intitle"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputSearch
            cn={style.search_input}
            onChange={onChange}
            value={value}
            onSearch={onSearch}
          />
        )}
      />
      <div className={style.bottom_fields}>
        <label className={style.field}>
          <p className={style.field_title}>Categories</p>
          <Controller
            name="subject"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                options={categories}
                value={value}
                cn={style.select}
              />
            )}
          />
        </label>
        <label className={style.field}>
          <p className={style.field_title}>Sorting by</p>
          <Controller
            name="orderBy"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                options={sortValues}
                value={value}
                cn={style.select}
              />
            )}
          />
        </label>
      </div>
    </form>
  );
}

export default SearchBook;
