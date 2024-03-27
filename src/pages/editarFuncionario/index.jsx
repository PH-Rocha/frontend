import { useEffect, useState } from "react";
import { editFuncionario, getFuncionario } from "../../services/request_api";
import { useNavigate, useParams } from "react-router-dom";
import { getUsuarios } from "../../services/request_api";

function EditarFuncionario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [funcionario, setFuncionario] = useState({
    id: '',
    nome: '',
    idade: '',
    cargo: '',
    id_usuario: ''
  });

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const token = localStorage.getItem('token');
        console.log('token:', token);

        if (!token) {
          console.log('Token não encontrado! Redirecionando para /login');
          navigate("/login");
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
      buscarFuncionario(id);
    }
  }, [id]);

  const buscarFuncionario = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log('token', token);

      const funcionarioDados = await getFuncionario(id, token);
      console.log('dados do funcionário', funcionarioDados.data);

      setFuncionario(funcionarioDados.data);
    } catch (error) {
      console.error('Erro ao buscar o funcionário:', error);
    }
  }

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

    const token = localStorage.getItem('token');
    console.log('token', token);

    if (!token) {
      console.log('Token não encontrado. Redirecionando para /login')
      navigate('/login');
      return;
    }

    try {
      await editFuncionario(funcionario, token);
      console.log('Funcionário editado com sucesso! Redirecionando para /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao editar funcionário:', error);
    }

  }

  return (
    <div className="page-edita-funcionario">
      <h1>Editar Funcionário</h1>
      <form onSubmit={handleEdit}>
        <div>
          <label>id:</label>
          <input type="text" name="id" value={funcionario.id} onChange={handleChange} />
        </div>
        <div>
          <label>Novo Nome:</label>
          <input type="text" name="nome" value={funcionario.nome} onChange={handleChange} />
        </div>
        <div>
          <label>Nova Idade:</label>
          <input type="text" name="idade" value={funcionario.idade} onChange={handleChange} />
        </div>
        <div>
          <label>Novo Cargo:</label>
          <input type="text" name="cargo" value={funcionario.cargo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="usuario">Usuários:</label>
          <select className="select" name="id_usuario" id="usuario" value={funcionario.id_usuario} onChange={handleChange}>
            <option value="">Selecione um usuário</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.login}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="button">Salvar</button>
      </form>
    </div>
  )
}


export default EditarFuncionario;