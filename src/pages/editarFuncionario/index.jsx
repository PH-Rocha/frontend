import { useEffect, useState } from "react";
import { editFuncionario } from "../../services/request_api";
import { useNavigate } from "react-router-dom";
import { getUsuarios } from "../../services/request_api";

function EditarFuncionario() {
  const navigate = useNavigate();
  const [funcionario, setFuncionario] = useState ({
    id: '',
    novoNome: '',
    novaIdade: '',
    novoCargo: '',
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

        const response = await getUsuarios({ headers: { Authorization:`${token}`}});
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
      console.log('Funcionário editado com sucesso! Redirecionando para /Home')
      navigate('/Home');
    } catch (error) {
      console.error('Erro ao editar funcionário:', error);
    }
    
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
      <label htmlFor="usuario">Usuários:</label>
      <select name="id_usuario" id="usuario" value={funcionario.id_usuario} onChange={handleChange}>
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


export default EditarFuncionario;