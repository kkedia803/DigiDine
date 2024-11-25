import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu/Menu';
import CreateMenu from './pages/Menu/CreateMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/create-menu' element={<CreateMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
