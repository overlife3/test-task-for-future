import React from "react";
import ListBook from "../components/ListBook/ListBook";
import { booksMock } from "../MOCK/MOCK";

function ListBookContainer() {
  return <ListBook items={booksMock} onLoadMore={() => {}} />;
}

export default ListBookContainer;
