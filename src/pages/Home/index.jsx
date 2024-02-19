import React  from "react";
import { Link } from "react-router-dom";

function HomeTeste() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <ul>
        <li>
          <Link to="/login">Fazer login</Link>
        </li>
        <li>
          <Link to={"/modificar-senha"}>Mudar a senha</Link>
        </li>
        <li>
          <Link to="/adicionar">Adicionar Usuário</Link>
        </li>
        <li>
          <Link to="/adicionar-cliente">Adicionar cliente</Link>
        </li>
        <li>
          <Link to="/adicionar-funcionario">Adicionar funcionário</Link>
        </li>
        <li>
          <Link to="/editar-usuario">Editar usuário</Link>
        </li>
        <li>
          <Link to="/editar-cliente">Editar cliente</Link>
        </li>
        <li>
          <Link to="/editar-funcionario">Editar funcionário</Link>
        </li>
        <li>
          <Link to="/deletar-usuario">Deletar usuário</Link>
        </li>
        <li>
          <Link to="/deletar-cliente">Deletar cliente</Link>
        </li>
        <li>
          <Link to="/deletar-funcionario">Deletar funcionário</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomeTeste;