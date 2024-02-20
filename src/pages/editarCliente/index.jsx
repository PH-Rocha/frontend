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
        console.log('token', token);

        if (!token) {
          console.log('Token não encontrado. Redirecionando para /login');
          navigate('/login');
          return;
        }

        const response = await getUsuarios({headers: {Authorization:`${token}`}});
        console.log('Usuários recuperados:', response.data);
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
    console.log('token:', token);

    if (!token) {
      console.log('Token não encontrado. Redirecionando para /login');
      navigate('/login');
      return;
    }

    try{
      await editCliente(cliente, token);
      console.log('Cliente editado com sucesso! Redirecionando para /Home');
      navigate('/Home');
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
    }
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
            <option key={usuario.id} value={usuario.id}>
              {usuario.login}
            </option>
          ))}
        </select>
      <button type="submit">Salvar</button>
    </form>
    </>
  )
} 


export default EditarCliente;