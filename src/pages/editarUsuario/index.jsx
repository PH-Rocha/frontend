import { useEffect, useState } from "react";
import { editUsuario, getUsuario } from "../../services/request_api";
import { useNavigate, useParams } from "react-router-dom";

function EditarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    id: '',
    login: '',
    email: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token', token);
    if (!token) {
      console.log('Token não encontrado! Redirecionando para /login');
      navigate('/login');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      buscarUsuario(id);
    }
  }, [id]);

  const buscarUsuario = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log('token', token);

      const usuarioDados = await getUsuario(id, token);
      console.log('dados do usuario:', usuarioDados.data);

      setUsuario(usuarioDados.data);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsuario((usuarioAnterior) => ({
      ...usuarioAnterior,
      [name]: value
    }))
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    console.log('Novos dados do Usuário:', usuario);

    const token = localStorage.getItem('token');
    console.log('token', token);

    if (!token) {
      console.log('Token não encontrado! Redirecionando para /login');
      navigate('/login');
      return;
    }

    try {
      await editUsuario(usuario, token);
      console.log('Usuário editado com sucesso! Redirecionando para /dashboard');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao editar o usuário:', error);
    }
  }

  return (
    <div className="page-edita-usuario">
      <h1>Editar Usuário</h1>
      <form onSubmit={handleEdit}>
        <div>
          <label>Id do Usuário</label>
          <input type="text" name="id" value={usuario.id} onChange={handleChange} />
        </div>
        <div>
          <label>Novo Login</label>
          <input type="text" name="login" value={usuario.login} onChange={handleChange} />
        </div>
        <div>
          <label>Novo Email</label>
          <input type="text" name="email" value={usuario.email} onChange={handleChange} />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}

export default EditarUsuario;