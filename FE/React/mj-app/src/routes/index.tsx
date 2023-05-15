import React from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Main } from '../pages/Main';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Main />} />
      </Routes>
      <Link to="/main"></Link>
      <Link to="/main">main</Link>
    </BrowserRouter>
  )
}
