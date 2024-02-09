import './App.css';
import { Routes,Route } from 'react-router-dom';
import AddUsuario from './pages/adicionar';
import LoginUsuario from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginUsuario/>}/>
        <Route path='/adicionar' element={<AddUsuario/>}/>
      </Routes>
    </>
  );
}

export default App;
