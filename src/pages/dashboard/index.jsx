import React, { useState } from "react";
import EditarSenha from "../modificarSenha";
import AddCliente from "../AddCliente";
import AddFuncionario from "../addFuncionario";
import EditarCliente from "../editarCliente";
import EditarFuncionario from "../editarFuncionario";
import EditarUsuario from "../editarUsuario";
import RemoveCliente from "../removeCliente";
import RemoveFuncionario from "../removeFuncionario";
import RemoveUsuario from "../removeUsuario";
import PerfilPage from "../perfil";

const Dashboard = () => {
  const [showButton, setShowButton] = useState(true);

  const toggleButton = () => {
    setShowButton(!showButton);
  }
  var buttonText = showButton ? "|||" : "|||";

  const [currentPage, setCurrentPage] = useState('PerfilPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'PerfilPage':
        return <PerfilPage/>
      case 'EditarCliente':
        return <EditarCliente/>
      case 'EditarFuncionario': 
        return <EditarFuncionario/>
      case 'EditarUsuario':
        return <EditarUsuario/>
      case 'EditarSenha':
        return <EditarSenha/>
      case 'AddCliente':
        return <AddCliente/>
      case 'AddFuncionario':
        return <AddFuncionario/>
      case 'RemoveCliente':
        return <RemoveCliente/>
      case 'RemoveFuncionario':
        return <RemoveFuncionario/>
      case 'RemoveUsuario':
        return <RemoveUsuario/>
      default: 
      return null;
    }
  };

  return (
    <div className="dashboard">
        {showButton && <nav className="nav-bar">
          <ul> 
          <li><a href="#" onClick={() => setCurrentPage('PerfilPage')}>Perfil</a></li>
          <li><a href="#" onClick={() => setCurrentPage('EditarCliente')}>Editar Cliente</a></li>
            <li><a href="#" onClick={() => setCurrentPage('EditarFuncionario')}>Editar Funcionário</a></li>
          <li><a href="#" onClick={() => setCurrentPage('EditarUsuario')}>Editar Usuário</a></li>
          <li><a href="#" onClick={() => setCurrentPage('EditarSenha')}>Editar Senha</a></li>
          <li><a href="#" onClick={() => setCurrentPage('AddCliente')}>Adicionar Cliente</a></li>
          <li><a href="#" onClick={() => setCurrentPage('AddFuncionario')}>Adicionar Funcionário</a></li>
          <li><a href="#" onClick={() => setCurrentPage('RemoveCliente')}>Deletar Cliente</a></li>
          <li><a href="#" onClick={() => setCurrentPage('RemoveFuncionario')}>Deletar Funcionário</a></li>
          <li><a href="#" onClick={() => setCurrentPage('RemoveUsuario')}>Deletar Usuário</a></li>
        </ul>
      </nav>}
        <button className="nav-button" onClick={toggleButton}>{buttonText}</button>
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  )
}

export default Dashboard