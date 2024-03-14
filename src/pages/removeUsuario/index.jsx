import { useState } from "react";
import { removeUsuario } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function RemoveUsuario() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [codigoExclusao, setCodigoExclusao] = useState('');

  const handleChangeId = (event) => {
    setId(event.target.value);
  }

  const handleChangeCodigoExclusao = (event) => {
    setCodigoExclusao(event.target.value);
  }

  const handleRemover = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await removeUsuario(id, token);
      console.log('Usuário removido com sucesso! Redirecionado para /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao remover usuário:', error);
    }
  }

  return (
    <div className="page-remove-usuario">
      <h1>Remover Usuário</h1>
      <form onSubmit={handleRemover}>
        <div>
          <label>Informe o ID do Usuário:</label>
          <input type="text" value={id} onChange={handleChangeId} />
        </div>
        <div>
          <label>Código de Exclusão:</label>
          <input type="text" value={codigoExclusao} onChange={handleChangeCodigoExclusao} />
        </div>
        <button type="submit">Remover Cliente</button>
      </form>
    </div>
  );
}

export default RemoveUsuario;