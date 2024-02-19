import { useState } from "react";
import { modificarSenha } from "../../services/request_api";

function EditarSenha() {
  const [id, setId] = useState('');
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [messagem, setMessagem] = useState('');
  const [erro, setErro] = useState('');


  const handleSubmit = async (event) => {
    event.prevenDefault();

    if (novaSenha !== confirmarSenha) {
      setErro('As senhas nova e de confirmação não coincidem.');
      return;
    }

    try {

      const response = await modificarSenha({
        id: id, 
        senha: senha,
        novaSenha: novaSenha
      });

      setMessagem(response.data.message);
      setErro('');
      setId('');
      setSenha('');
      setNovaSenha('');
      setConfirmarSenha('');
    } catch (error) {
      setMessagem('');
      setErro(error.response.data.message || 'Erro ao modificar a senha.');
    }
  };

  return (
    <div>
      <h2>Modificar Senha</h2>
      { messagem && <p style={{ color: 'green' }}>{messagem}</p>}
      { erro && <p style={{ color: 'red' }}>{erro}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID do Usuário:</label>
          <input type="text" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="senha">Senha Atual:</label>
          <input type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="novaSenha">Nova Senha</label>
          <input type="password" id="novaSenha" name="novaSenha" onChange={(e) => setNovaSenha(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="confimarSenha">confirme a senha:</label>
          <input type="password" id="confirmarSenha" name="confirmarSenha" onChange={(e) => setConfirmarSenha(e.target.value)}/>
        </div>
        <button type="submit">Modificar Senha</button>
      </form>
    </div>
  )
}

export default EditarSenha;