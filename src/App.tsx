import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import MissingPage from "./pages/Missing";
import MainTemplate from "./templates/Main/Main";
import BookTemplate from "./templates/Book/Book";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<MainTemplate />} />
          <Route path="/:bookId" element={<BookTemplate />} />
          {/* Можно было обойтись без динамических путей, а просто в store сохранить объект книги, и эти данные отображать */}
        </Route>
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </>
  );
}

export default App;
