import { useState } from "react";
import { removeCliente } from "../../services/request_api";

function removeCliente() {
  const [codigoExclusao, setCodigoExclusao] = useState('');

  const handleChange = (event) => {
    setCodigoExclusao(event.target.value);
  }

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log('Código de Exclusão:', codigoExclusao);

    await removeCliente(codigoExclusao);
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

export default removeCliente;