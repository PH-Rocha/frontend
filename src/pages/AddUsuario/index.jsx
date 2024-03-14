import { useState } from 'react';
import { addUsuario } from '../../services/request_api';
import { useNavigate } from 'react-router-dom';

function AddUsuario() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    login: '',
    email: '',
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

  const salvaUsuario = async (event) => {
    event.preventDefault();
    console.log(usuario);

    await addUsuario(usuario);

    navigate('/login');
  }

  return (
    <div className='page-add-usuario'>
      <h1>Adicionar usuário</h1>
      <form onSubmit={salvaUsuario}>
        <div>
          <label>login</label>
          <input type='text' name='login' value={usuario.login} onChange={handleChange} />
        </div>
        <div>
          <label>email</label>
          <input type='text' name='email' value={usuario.email} onChange={handleChange} />
        </div>
        <div>
          <label>palavra-chave</label>
          <input type='password' name='senha' value={usuario.senha} onChange={handleChange} />
        </div>
        <button type='submit'>Salvar</button>
      </form>
    </div>
  )

}

export default AddUsuario;