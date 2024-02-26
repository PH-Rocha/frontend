import { useState } from "react";
import { removeCliente } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function RemoveCliente() {
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
      await removeCliente(id, token);
      console.log('Cliente removido com sucesso! Redirecionado para /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao remover cliente:', error);
    }
  }

  return (
    <>
      <h1>Remover Cliente</h1>
      <form onSubmit={handleRemover}>
        <label>Informe o ID do cliente:</label>
        <input type="text" value={id} onChange={handleChangeId}/>
        <label>Código de Exclusão:</label>
        <input type="text" value={codigoExclusao} onChange={handleChangeCodigoExclusao}/>
        <button type="submit">Remover Cliente</button>
      </form>
    </>
  );
}

export default RemoveCliente;