import { useState } from "react";
import { logarUsuario } from '../../services/request_api';

function LogarUsuario() {
  const [ usuario, setUsuario ] = useState({
    login: '',
    senha: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setUsuario((usuarioAnterior) => {
      return {
        ...usuarioAnterior,
        [name]:value
      }
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log('Tentativa de login:', usuario);

      const response = await logarUsuario(usuario);

      console.log('Resposta do login:', response);
    } catch (error) {
      console.error('Erro ao fazer o login', error.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Login</label>
        <input type='text' name='login' value={usuario.login} onChange={handleChange}/>
        <label>Senha</label>
        <input type='password' name='senha' value={usuario.senha} onChange={handleChange}/>
        <button type='submit'>Entrar</button>
      </form>
    </>
  );
}

export default LogarUsuario;