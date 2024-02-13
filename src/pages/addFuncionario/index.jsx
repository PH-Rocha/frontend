import { useState } from "react";
import { addFuncionario } from "../../services/request_api";

function addFuncionario() {
  const [funcionario, setFuncionario] = useState({
    nome: '',
    idade: '',
    cargo: '',
    id_usuario: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFuncionario((funcionarioAnterior) => {
      return {
        ...funcionarioAnterior,
        [name]: value
      }
    });
  }

  const salvaFuncionario = async (event) => {
    event.preventDeafult();
    console.log(funcionario);

    await addFuncionario(funcionario);

  }

  return (
    <>
    <h1>Adicionar funcionario</h1>
      <form onSubmit={salvaFuncionario}>  
        <label>nome</label>
        <input type="text" name="nome" value={funcionario.nome} onChange={handleChange}/>
        <label>idade</label>
        <input type="text" name="idade" value={funcionario.idade} onChange={handleChange}/>
        <label>Id do Usuario</label>
        <input type="text" name="id_usuario" value={funcionario.id_usuario} onChange={handleChange}/>
        <button type='submit'>Salvar</button>
      </form>
    </>
  )
}