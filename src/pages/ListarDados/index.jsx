import { useState, useEffect } from "react";
import { getUsuarios, getClientes, getFuncionarios } from "../../services/request_api";

function TestePage() {
  const [usuarios, setUsuarios] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [funcionarios, setFuncionaio] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');

        if(!token) {
          console.error('Token de autenticação não encontrado.');
          return;
        }

        const usuariosResponse = await getUsuarios({ headers: { Authorization: `${token} `}});
        setUsuarios(usuariosResponse.data);

        const clienteResponse = await getClientes(token);
        setClientes(clienteResponse.data);

        const funcionarioResponse = await getFuncionarios(token);
        setFuncionaio(funcionarioResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.login}</li>
          ))}
          {usuarios.map(usuario => (
            <li key={usuario.senha}>{usuario.senha}</li>
          ))}
        </ul>

      <h2>lista de Clientes</h2>
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>{cliente.nome}</li>
          ))}
        </ul>

        <h2>lista de Funcionários</h2>
          <ul>
            {funcionarios.map(funcionario => (
              <li key={funcionario.id}>{funcionario.nome}</li>
            ))}
          </ul>
    </div>
  )
}

export default TestePage;