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
import TestePage from "../ListarDados";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('EditarSenha');

  const renderPage = () => {
    switch (currentPage) {
      case 'EditarSenha':
        return <EditarSenha/>
      case 'EditarCliente':
        return <EditarCliente/>
      case 'EditarFuncionario': 
        return <EditarFuncionario/>
      case 'EditarUsuario':
        return <EditarUsuario/>
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
      case 'TestePage': 
        return <TestePage/>
      default: 
      return null;
    }
  };

  return (
    <div className="dashboard">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage('EditarSenha')}>Editar Senha</li>
          <li onClick={() => setCurrentPage('EditarCliente')}>Editar Cliente</li>
          <li onClick={() => setCurrentPage('EditarFuncionario')}>Editar Funcionário</li>
          <li onClick={() => setCurrentPage('EditarUsuario')}>Editar Usuário</li>
          <li onClick={() => setCurrentPage('AddCliente')}>Adicionar Cliente</li>
          <li onClick={() => setCurrentPage('AddFuncionario')}>Adicionar Funcionário</li>
          <li onClick={() => setCurrentPage('RemoveCliente')}>Remover Cliente</li>
          <li onClick={() => setCurrentPage('RemoveFuncionario')}>Remover Funcionário</li>
          <li onClick={() => setCurrentPage('RemoveUsuario')}>Remover Usuário</li>
          <li onClick={() => setCurrentPage('TestePage')}>Listar Dados</li>
        </ul>
      </nav>
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  )
}

export default Dashboard