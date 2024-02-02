import './App.css';
import { Routes,Route } from 'react-router-dom';
import AddUsuario from './pages/Login';

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
