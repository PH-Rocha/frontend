import './App.css';
import { Routes,Route } from 'react-router-dom';
import AddUsuario from './pages/adicionar';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AddUsuario/>}/>
      </Routes>
    </>
  );
}

export default App;
