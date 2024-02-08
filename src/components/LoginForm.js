import React, { Component } from "react";

class login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      login: '',
      senhaAtual: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { login, senhaAtual } = this.state;
    console.log('Login:', login);
    console.log('Senha:', senhaAtual);

    try {
      const response = await fetch('http://localhost:8080/api/usuario/login', {
        method: 'POST',
        headers: {
          'content-Type:': 'application/json'
        },
        body: JSON.stringify({ login, senhaAtual })
      });

      if(!response.ok) {
        throw new Error('Erro ao fazer o login');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  }

  render() {
    const { login, senhaAtual } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Login:
            <input type="text" name="login" value={ login } onChange={ this.handleChange } />
          </label>
          <label>
            Senha:
            <input type="senha" name="senha" value={ senhaAtual } onChange={ this.handleChange } />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default login;