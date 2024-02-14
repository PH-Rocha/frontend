import { useState } from "react";
import { editFuncionario } from "../../services/request_api";

function editFuncionario() {
  const [funcionario, setFuncionario] = useState ({
    id: '',
    novoNome: '',
    novaIdade: '',
    novoCargo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFuncionario((funcioinarioAnterior) => ({
      ...funcioinarioAnterior,
      [name]: value
    }));
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    console.log('Novos dados do funcionário:', funcionario);

    await editFuncionario(funcionario);
  }

  return(
    <>
    <h1>Editar Funcionário</h1>
    <form onSubmit={handleEdit}>
      <label>id do funcionário</label>
      <input type="text" name="id" value={funcionario.id} onChange={handleChange} />
      <label>Novo Nome</label>
      <input type="text" name="novoNome" value={funcionario.novoNome} onChange={handleChange} />
      <label>Nova Idade</label>
      <input type="text" name="novaIdade" value={funcionario.novaIdade} onChange={handleChange} />
      <label>Novo Cargo</label>
      <input type="text" name="novoCargo" value={funcionario.novoCargo} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
    </>
  )
}


export default editFuncionario;