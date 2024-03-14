import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logarUsuario } from '../../services/request_api';

function LogarUsuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    login: '',
    senha: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUsuario((usuarioAnterior) => {
      return {
        ...usuarioAnterior,
        [name]: value
      }
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log('Tentativa de login:', usuario);

      const response = await logarUsuario(usuario);

      console.log('Resposta do login:', response);

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);

        localStorage.setItem('id', response.data.id);

        console.log('id', response.data.id);

        setUsuario({ login: '', senha: '' });

        navigate('/Dashboard');

      } else {
        console.error('Erro ao fazer login: Token não recebido.');
      }
    } catch (error) {
      console.error('Erro ao fazer o login', error.message);
    }
  }

  return (
    <div className="page-login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='login' >Login</label>
          <input type='text' id='login' name='login' value={usuario.login} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='senha' >Palavra-passe</label>
          <input type='password' id='senha' name='senha' value={usuario.senha} onChange={handleChange} />
        </div>
        <button type='submit'>Entrar</button>
      </form>
      <p>Não tem conta?<Link to="/adicionar">Cadastre-se aqui</Link></p>
    </div>
  );
}

export default LogarUsuario;