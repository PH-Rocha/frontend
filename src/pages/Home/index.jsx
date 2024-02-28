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
          <Link to="/adicionar">Adicionar Usuário</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomeTeste;