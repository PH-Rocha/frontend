import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddUsuario from './pages/AddUsuario';
import LogarUsuario from './pages/Login';
import AddCliente  from './pages/AddCliente';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/login' element={<LogarUsuario/>} />
        <Route path='/adicionar' element={<AddUsuario/>} />
        <Route path='/cliente' element={<AddCliente/>}/>
      </Routes>
    </>
  );
}

export default App;
