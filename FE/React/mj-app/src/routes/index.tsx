import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/MainPage';
import { Home } from '../pages/HomePage';
import { Login } from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/success" element={<Main />} />
    </Routes>
  );
}
