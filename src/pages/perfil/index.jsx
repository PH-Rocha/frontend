import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuario } from "../../services/request_api";


function PerfilPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    id: '',
    login: '',
    email: '',
    codigoExclusao: ''
  });

  const [cliente, setCliente] = useState({
    id: '',
    nome: '',
    idade: ''
  });

  const [funcionario, setFuncionario] = useState({
    id: '',
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
          id: UsuarioResponse.data.id,
          login: UsuarioResponse.data.login,
          email: UsuarioResponse.data.email,
          codigoExclusao: UsuarioResponse.data.codigoExclusao
        });

        setCliente({
          id: UsuarioResponse.data.cliente.id,
          nome: UsuarioResponse.data.cliente.nome,
          idade: UsuarioResponse.data.cliente.idade
        });

        setFuncionario({
          id: UsuarioResponse.data.funcionario.id,
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
    <>
      <h1 className="title">Perfil</h1>
        <div key={usuario} className="usuario">
          <h3>Dados do Usuário</h3>
          <p>Id: {usuario.id}</p>
          <p>Login: {usuario.login}</p>
          <p>Email: {usuario.email}</p>
          <p>Código de exclusão: {usuario.codigoExclusao}</p>
        </div>
        <div key={cliente} className="cliente">
          <h3>Dados do Cliente</h3>
          <p>Id: {cliente.id}</p>
          <p>Nome: {cliente.nome}</p>
          <p>Idade: {cliente.idade}</p>
        </div>
        <div key={funcionario} className="funcionario">
          <h3>Dados do funcionário</h3>
          <p>Id: {funcionario.id}</p>
          <p>Nome: {funcionario.nome}</p>
          <p>cargo: {funcionario.cargo}</p>
        </div>
    </>
  )
}

export default PerfilPage;