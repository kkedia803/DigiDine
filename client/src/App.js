import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate, useNavigate, useParams, Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthComponent from './api/auth/Test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/sign-ups' element={<AuthComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
