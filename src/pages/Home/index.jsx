import React, {useState}  from "react";
import LogarUsuario from "../Login";
import AddUsuario from "../AddUsuario";

const Home = () => {
  const [currentPage, setCurrentPage] = useState('LogarUsuario');

  const renderPage = () => {
    switch (currentPage) {
      case 'LogarUsuario':
        return <LogarUsuario/>
      case 'AddUsuario':
        return <AddUsuario/>
      default:
        return null;
    }
  };

  return (
    <div className="home">
      <nav className="nav-bar">
        <ul>
          <li><a href="#" onClick={() => setCurrentPage('LogarUsuario')}>Login</a></li>
          <li><a href="#" onClick={() => setCurrentPage('AddUsuario')}>Criar Usuário</a></li>
        </ul>
      </nav>
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  )
}

export default Home;