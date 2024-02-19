import { useEffect, useState } from "react";
import { editCliente } from "../../services/request_api";
import { getUsuarios } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function EditarCliente() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    id: '',
    novoNome: '',
    novaIdade: '',
    id_usuario: ''
  });


  const [usuarios, setUsuarios] = useState ([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await getUsuarios({ headers: { Authorization: `${token}`}});
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios();
  }, [navigate]);

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

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

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
      <label htmlFor="usuario">Usuários:</label>
      <select name="id_usuario" id="usuario" value={cliente.id_usuario} onChange={handleChange}>
          <option value="">Selecione um usuário</option>
          {usuarios.map(usuario => (
            <option key={usuario.login} value={usuario.login}>
              {usuario.novoNome}
            </option>
          ))}
        </select>
      <button type="submit">Salvar</button>
    </form>
    </>
  )
} 


export default EditarCliente;