import api from './api';

export async function addUsuario(usuario){
  return await api.post("/usuario",usuario).then(response=>response);
}

export async function getUsuarios(args){
  return await api.get(`/usuarios`, args).then(response=>response);
} 

export async function getUsuario(id, token) {
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.get(`/usuario/${id}`, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function removeUsuario(id, token){
  if (!token) {
    throw new Error('token de autenticação não fornecido');
  }
  return await api.delete(`/usuario/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  }).then(response=>response);
}

export async function editUsuario(usuario, token){
  if (!token) {
    throw new Error('token de autenticação não fornecido');
  }
  return await api.put('/usuario',usuario, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response=>response);
}

export async function modificarSenha(id, senha, novaSenha, token) {
  if (!token) {
    throw new Error('token de autenticação não fornecido');
  }
  return await api.post(`/usuario/modify/${id}`, {senha, novaSenha}, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response=>response);
}
export async function logarUsuario(usuario) {
  return await api.post('/usuario/login', usuario).then(response => response);
}

export async function addCliente(cliente, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.post('/cliente', cliente, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function getCliente(id, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.get(`/cliente/${id}`, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function getClientes(token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.get('/clientes', {
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response);
}

export async function editCliente(cliente, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.put('/cliente',cliente, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function removeCliente(id, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido'); 
  } 
  return await api.delete(`/cliente/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response);
}

export async function addFuncionario(funcionario, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.post('/funcionario', funcionario, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function getFuncionario(id, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.get(`/funcionario/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response);
}

export async function getFuncionarios(token){
  if (!token) {
    throw new Error('token de autenticação não fornecido');
  }
  return await api.get('/funcionarios', {
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response);
}

export async function editFuncionario(funcionario, token){
  if (!token) {
    throw new Error('Token de autenticação não fornecido');
  }
  return await api.put('/funcionario', funcionario, {
    headers: {
      Authorization:`${token}`
    }
  }).then(response => response);
}

export async function removeFuncionario(id, token){
  if (!token) {
    throw new Error('Token de autenticação nã fornecido');
  }
  return await api.delete(`/funcionario/${id}`, {
    headers: {
      Authorization: `${token}`
    }
  }).then(response => response);
}