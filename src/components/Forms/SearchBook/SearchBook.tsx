import React from "react";
import InputSearch from "../../Form/InputSearch/InputSearch";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Category, SortValues } from "../../../types/types";
import Select from "../../Form/Select/Select";
import { categories, sortValues } from "../../../data/data";
import style from "./SearchBook.module.scss";

type Props = {
  onSubmit: () => void;
};

type FormState = {
  name: string;
  category: Category;
  sorting: SortValues;
};

function SearchBook({ onSubmit }: Props) {
  const {
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormState>({
    defaultValues: {
      name: "",
      category: "all",
      sorting: "relevance",
    },
    mode: "onSubmit",
  });

  return (
    <form className={style.form}>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputSearch
            cn={style.search_input}
            onChange={onChange}
            value={value}
            onSearch={() => {}}
          />
        )}
      />
      <div className={style.bottom_fields}>
        <label className={style.field}>
          <p className={style.field_title}>Categories</p>
          <Controller
            name="category"
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
          <p className={style.field_title}>Categories</p>
          <Controller
            name="sorting"
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
