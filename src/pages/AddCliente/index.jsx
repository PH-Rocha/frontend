import { useState } from "react";
import { addCliente } from "../../services/request_api";

function addCliente() {
  const [cliente, setCliente] = useState ({
    nome: '',
    idade: '',
    id_usuario: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCliente((clienteAnterior) => {
      return {
        ...clienteAnterior,
        [name]: value
      }
    });
  }

  const salvarCliente = async (event) => {
    event.preventDefault();
    console.log(cliente);

    await addCliente(cliente);
  }

  return (
    <>
      <h1>Adicionar cliente</h1>
      <form onSubmit={salvarCliente}>  
        <label>nome</label>
        <input type="text" name="nome" value={cliente.nome} onChange={handleChange}/>
        <label>idade</label>
        <input type="text" name="idade" value={cliente.idade} onChange={handleChange}/>
        <label>Id do Usuario</label>
        <input type="text" name="id_usuario" value={cliente.id_usuario} onChange={handleChange}/>
      </form>
    </>
  )
}

export default addCliente;