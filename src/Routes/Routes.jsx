import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Contact, Trial, News } from '../Pages';

export const Switch = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trial" element={<Trial />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};
