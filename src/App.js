import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeTeste from './pages/Home';
import AddUsuario from './pages/AddUsuario';
import LogarUsuario from './pages/Login';
import AddCliente  from './pages/AddCliente';
import AddFuncionario from './pages/addFuncionario';
import EditarUsuario from './pages/editarUsuario';
import EditarCliente from './pages/editarCliente';
import EditarFuncionario from './pages/editarFuncionario';
import RemoveCliente from './pages/removeCliente';
import RemoveFuncionario from './pages/removeFuncionario';
import RemoveUsuario from './pages/removeUsuario';
import EditarSenha from './pages/modificarSenha';
import Dashboard from './pages/dashboard';
import PerfilPage from './pages/perfil';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeTeste/>}/>
        <Route path='/login' element={<LogarUsuario/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/adicionar' element={<AddUsuario/>}/>
        <Route path='/adicionar-cliente' element={<AddCliente/>}/>
        <Route path='/adicionar-funcionario' element={<AddFuncionario/>}/>
        <Route path='/editar-usuario' element={<EditarUsuario/>}/>
        <Route path='/editar-cliente' element={<EditarCliente/>}/>
        <Route path='/editar-funcionario' element={<EditarFuncionario/>}/>
        <Route path='/deletar-cliente' element={<RemoveCliente/>}/>
        <Route path='/deletar-funcionario' element={<RemoveFuncionario/>}/>
        <Route path='/deletar-usuario' element={<RemoveUsuario/>}/>
        <Route path='/modificar-senha' element={<EditarSenha/>}/>
        <Route path='/perfil' element={<PerfilPage/>}/>
      </Routes>
    </>
  );
}

export default App;
