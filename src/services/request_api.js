import api from './api';

export async function addUsuario(usuario){
  return await api.post("/usuario",usuario).then(response=>response);
}

export async function Usuario(){
  return await api.get(`/usuarios`).then(response=>response);
}

export async function removeUsuario(id){
  return await api.delete(`/usuario/${id}`).then(response=>response);
}

export async function editUsuario(usuario){
  return await api.put(`/usuario`, usuario).then(response=>response);
}

export async function modifcarSenha() {
  return await api.post('/usuario/modify-password').then(response=>response);
}

export async function logarUsuario(credentials) {
  return await api.post('/login', credentials).then(response => response);
}