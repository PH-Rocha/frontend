import { useEffect, useState } from "react";
import { editCliente, getCliente } from "../../services/request_api";
import { getUsuarios } from "../../services/request_api";
import { useNavigate, useParams } from "react-router-dom";

function EditarCliente() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    id: '',
    nome: '',
    idade: '',
    id_usuario: ''
  });


  const [usuarios, setUsuarios] = useState([]);

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

        const response = await getUsuarios({ headers: { Authorization: `${token}` } });
        console.log('Usuários recuperados:', response.data);
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios();
  }, [navigate]);

  useEffect(() => {
    if (id) {
      buscarCliente(id);
    }
  }, [id]);

  const buscarCliente = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log('token', token);

      const clienteDados = await getCliente(id, token);
      console.log('dados do cliente:', clienteDados.data);

      setCliente(clienteDados.data);
    } catch (error) {
      console.error('Erro ao buscar cliente:', error);
    }
  };

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

    try {
      await editCliente(cliente, token);
      console.log('Cliente editado com sucesso! Redirecionando para /Dashboard');
      navigate('/Dashboard');
    } catch (error) {
      console.error('Erro ao editar cliente:', error);
    }
  }

  return (
    <div className="page-edita-cliente">
      <h1>Editar Cliente</h1>
      <form onSubmit={handleEdit}>
        <div>
          <label>Id:</label>
          <input type="text" name="id" value={cliente.id} onChange={handleChange} />
        </div>
        <div>
          <label>Novo nome:</label>
          <input type="text" name="nome" value={cliente.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Nova idade:</label>
          <input type="text" name="idade" value={cliente.idade} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="usuario">Usuários:</label>
          <select name="id_usuario" id="usuario" value={cliente.id_usuario} onChange={handleChange}>
            <option value="">Selecione um usuário</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.login}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}


export default EditarCliente;