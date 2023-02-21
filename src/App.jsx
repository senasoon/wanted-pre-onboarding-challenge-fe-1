import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, SignUpPage, TodoDetailPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/detail/:id" element={<TodoDetailPage />} />
    </Routes>
  );
};

export default App;
