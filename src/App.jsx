import { Routes, Route } from 'react-router-dom';
import Layout  from "./Layout";
import Inicio  from "./pages/Inicio";
import Nosotros  from "./pages/Nosotros";
import Productos  from "./pages/Productos";
import Default  from "./pages/Default";

export default function App(){

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="productos" element={<Productos />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}