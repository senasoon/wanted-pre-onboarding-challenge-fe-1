import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage, MainPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
