import { useState } from 'react';
import { addUsuario } from '../../services/request_api';

function AddUsuario() {
  const [usuario, setUsuario] = useState({
    login:'',
    email:'',
    senha:''
  });

  const handleChange = (event) => {
    const  { name,value } = event.target;

    setUsuario((usuarioAnterior) => {
      return {
        ...usuarioAnterior,
        [name]:value
      }
    });
  }

  const salvaUsuario = async (event) => {
    event.preventDefault();
    console.log(usuario);

    await addUsuario(usuario);
    
  }

  return(
    <>
      <h1>Adicionar usuário</h1>
      <form onSubmit={salvaUsuario}>
        <label>login</label>
        <input type='text' name='login' value={usuario.login} onChange={handleChange}/>
        <label>email</label>
        <input type='text' name='email' value={usuario.email} onChange={handleChange}/>
        <label>senha</label>
        <input type='text' name='senha' value={usuario.senha} onChange={handleChange}/>
        <button type='submit'>Salvar</button>
      </form>
    </>
  )

}

export default AddUsuario;