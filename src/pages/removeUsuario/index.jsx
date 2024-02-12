import { useState } from "react";
import { removeUsuario } from "../../services/request_api";

function removeUsuario(){
  const [codigoExclusao, setCodigoExclusao] = useState('');

  const handleChange = (event) => {
    setCodigoExclusao(event.target.value);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log('Código de Exclusão:', codigoExclusao);

    await removeUsuario(codigoExclusao);
  }

  return(
    <>
      <h1>Deletar Usuário</h1>
      <form onSubmit={handleDelete}>  
        <label>Código de exclusão</label>
        <input type="text" value={codigoExclusao} onChange={handleChange}/>
        <button type="submit">Excluir</button>
      </form>
    </>
  );
}

export default removeUsuario;