import { useState } from "react";
import { modificarSenha } from "../../services/request_api";
import { useNavigate } from "react-router-dom";

function EditarSenha() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit chamado')
    
    if(novaSenha !== confirmarSenha){
      console.log('As novas senhas não coincidem');
      return;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token não encontrado! redirecionando para /login');
      navigate('/login');
      return;
    }

    console.log('Enviando requisição para modificar senha:', id, senha, novaSenha, token);

    try {
      const response = await modificarSenha(id, senha, novaSenha, token);

      if (response.status === 200) {
        console.log('Senha do usuário modificada com sucesso');
        navigate('/dashboard');
      } else {
        console.error('Erro ao modificar a senha:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao editar senha:', error);
    }
  }

  return (
    <div>
      <h2>Modificar Senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID do Usuário:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha Antiga:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="novaSenha">Nova Senha:</label>
          <input
            type="password"
            id="novaSenha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmarSenha">Confirmar Nova Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <button type="submit">Modificar Senha</button>
      </form>
    </div>
  );
}

export default EditarSenha;
