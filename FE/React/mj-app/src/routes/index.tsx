import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main';
import { Home } from '../components/Home';
import { Login } from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
