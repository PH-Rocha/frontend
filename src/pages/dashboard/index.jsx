import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('perfil');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handlePageChange('perfil')}>Perfil</li>
          <li onClick={() => handlePageChange('configConta')}>Configuração da conta</li>
          <li onClick={() => handlePageChange('logout')}>Sair</li>
        </ul>
      </nav>
      <div>
        { currentPage === 'perfil' && <PerfilPage/> }
        { currentPage === 'configConta' && <ConfiguraçãoPage/> }
        { currentPage === 'logout' && <LogoutPage/> }
      </div>
    </div>
  );
}

