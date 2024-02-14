import { useState } from "react";
import { editUsuario } from "../../services/request_api";

function editUsuario() {
  const [usuario, setUsuario] = useState ({
    id: '',
    novoLogin: '',
    novoEmail: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario((usuarioAnterior) => ({
      ...usuarioAnterior,
      [name]: value
    }))
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    console.log('Novos dados do Usuário:', usuario);

    await editUsuario(usuario);
  }

  return (
    <>
    <h1>Editae Usuário</h1>
    <form onSubmit={handleEdit}>
      <label>Id do Usuário</label>
      <input type="text" name="id" value={usuario.id} onChange={handleChange} />
      <label>Novo Login</label>
      <input type="text" name="novoLogin" value={usuario.novoLogin} onChange={handleChange} />
      <label>Novo Email</label>
      <input type="text" name="novoEmail" value={usuario.novoEmail} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
    </>
  )
}

export default editUsuario;