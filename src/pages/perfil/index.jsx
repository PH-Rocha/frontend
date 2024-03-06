import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuario } from "../../services/request_api";


function PerfilPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    login: '',
    email: '',
  });

  const [cliente, setCliente] = useState({
    nome: '',
    idade: '',
  });

  const [funcionario, setFuncionario] = useState({
    nome: '',
    idade: '',
    cargo: ''
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.log('Token não encontrado! redirecionando para /login');
          navigate('/login');
          return;
        }

        const id = localStorage.getItem('id');

        const UsuarioResponse = await getUsuario(id, token);
        console.log(UsuarioResponse.data);
        setUsuario({
          login: UsuarioResponse.data.login,
          email: UsuarioResponse.data.email
        });

        setCliente({
          nome: UsuarioResponse.data.cliente.nome,
          idade: UsuarioResponse.data.cliente.idade
        });

        setFuncionario({
          nome: UsuarioResponse.data.funcionario.nome,
          idade: UsuarioResponse.data.funcionario.idade,
          cargo: UsuarioResponse.data.funcionario.cargo
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h1>Perfil</h1>
      <h3>Dados do usuário</h3>
      <ul>
        <li key={usuario.id}>Login: {usuario.login}</li>
        <li key={usuario}>Email:{usuario.email}</li>
      </ul>
      <h3>Dados do Cliente</h3>
      <ul>
        <li key={cliente}>Nome:{cliente.nome}</li>
        <li key={cliente}>Idade:{cliente.idade}</li>
      </ul>
      <h3>Dados do funcionario</h3>
      <ul>
        <li key={funcionario}>Nome:{funcionario.nome}</li>
        <li key={funcionario}>Idade:{funcionario.idade}</li>
        <li key={funcionario}>cargo:{funcionario.cargo}</li>
      </ul>
    </div>
  )
}

export default PerfilPage;