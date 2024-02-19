import { useEffect, useState } from "react";
import { addFuncionario } from "../../services/request_api";
import { getUsuarios } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function AddFuncionario() {
  const navigate = useNavigate();
  const [funcionario, setFuncionario] = useState({
    nome: '',
    idade: '',
    cargo: '',
    id_usuario: ''
  });

  const [usuarios, setUsuarios] = useState([]);

  useEffect (() => {
    async function fetchUsuarios() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await getUsuarios({ Headers: { Authorization: `${token}`}});
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios();
  }, [navigate]);


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


    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    await addFuncionario(funcionario);

  }

  return (
    <>
    <h1>Adicionar funcionario</h1>
      <form onSubmit={salvaFuncionario}>  
        <label htmlFor="nome">nome</label>
        <input type="text"  id="nome" name="nome" value={funcionario.nome} onChange={handleChange}/>
        <label htmlFor="idade">idade</label>
        <input type="text" id="idade" name="idade" value={funcionario.idade} onChange={handleChange}/>
        <label htmlFor="usuario">Usuários:</label>
        <select name="id_usuario" id="usuario" value={funcionario.id_usuario} onChange={handleChange}>
          <option value="">Selecione um usuário</option>
          {usuarios.map(usuario => (
            <option key={usuario.login} value={usuario.login}>
              {usuario.nome}
            </option>
          ))}
        </select>
        <button type='submit'>Salvar</button>
      </form>
    </>
  )
}


export default AddFuncionario;