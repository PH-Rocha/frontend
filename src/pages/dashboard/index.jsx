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
      default: 
      return null;
    }
  };

  return (
    <>
    
    </>
  )
}