import { useEffect, useState } from "react";
import { removeCliente } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function RemoveCliente() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [codigoExclusao, setCodigoExclusao] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setToken(token);
  }, [navigate]);

  const handleChange = (event) => {
    setCodigoExclusao(event.target.value);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log('Código de Exclusão:', codigoExclusao);

    try {
      await removeCliente(codigoExclusao, { Authorization: token });
    } catch (error) {
      console.error('Erro ao excluir cliente', error);
    }
  }

  return(
    <>
    <h1>Deletar cliente</h1>
      <form onSubmit={handleDelete}>  
        <label>Código de exclusão</label>
        <input type="text" value={codigoExclusao} onChange={handleChange}/>
        <button type="submit">Excluir</button>
      </form>
    </>
  )
}

export default RemoveCliente;