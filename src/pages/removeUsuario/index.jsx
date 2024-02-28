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
    <>
      <h1>Remover Usuário</h1>
      <form onSubmit={handleRemover}>
        <label>Informe o ID do Usuário:</label>
        <input type="text" value={id} onChange={handleChangeId}/>
        <label>Código de Exclusão:</label>
        <input type="text" value={codigoExclusao} onChange={handleChangeCodigoExclusao}/>
        <button type="submit">Remover Cliente</button>
      </form>
    </>
  );
}

export default RemoveUsuario;