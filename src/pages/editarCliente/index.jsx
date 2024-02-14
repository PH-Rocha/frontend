import { useState } from "react";
import { editCliente } from "../../services/request_api";

function editCliente() {
  const [cliente, setCliente] = useState({
    id: '',
    novoNome: '',
    novaIdade: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((clienteAnterior) => ({
      ...clienteAnterior,
      [name]: value
    }));
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    console.log('Novos dados do cliente:', cliente);

    await editCliente(cliente);
  }

  return(
    <>
    <h1>Editar Cliente</h1>
    <form onSubmit={handleEdit}>
      <label>Id do cliente</label>
      <input type="text" name="id" value={cliente.id} onChange={handleChange} />
      <label>Novo nome</label>
      <input type="text" name="novoNome" value={cliente.novoNome} onChange={handleChange} />
      <label>Nova idade</label>
      <input type="text" name="novaIdade" value={cliente.novaIdade} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
    </>
  )
} 


export default editCliente;