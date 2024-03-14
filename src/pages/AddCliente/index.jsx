import { useEffect, useState } from "react";
import { addCliente } from "../../services/request_api";
import { getUsuarios } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function AddCliente() {
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    nome: '',
    idade: '',
    id_usuario: ''
  });

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.log('Token não encontrado. Redirecionando para /login');
          navigate("/login");
          return;
        }

        const response = await getUsuarios({ headers: { Authorization: `${token}` } });
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscas usuários:', error);
      }
    }

    fetchUsuarios();
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCliente((clienteAnterior) => {
      return {
        ...clienteAnterior,
        [name]: value
      }
    });
  }

  const salvaCliente = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token não encontrado. Redirecionando para /login');
      navigate("/login");
      return;
    }

    try {
      await addCliente(cliente, token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  }

  return (
    <div className="page-add-cliente">
      <h1>Adicionar cliente</h1>
      <form onSubmit={salvaCliente}>
        <div>
          <label htmlFor="nome">nome</label>
          <input type="text" id="nome" name="nome" value={cliente.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="idade" >idade</label>
          <input type="text" id="idade" name="idade" value={cliente.idade} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="id_usuario" >Usuários:</label>
          <select name="id_usuario" id="id_usuario" value={cliente.id_usuario} onChange={handleChange}>
            <option value="">Selecione um usuário</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.login}
              </option>
            ))}
          </select>
        </div>
        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default AddCliente;