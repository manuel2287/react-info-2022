import './App.css';
import Link from './components/Link';
import PaginaSuperHeroes from './paginas/PaginaSuperHeroes';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import Error404 from './components/Errores/404';
import PaginaBuscador from './paginas/PaginaBuscador';
import PaginaDetalle from './paginas/PaginaDetalle';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaSuperHeroes />,
    errorElement: <Error404 />,
  },
  {
    path: "/superheroes",
    element: <PaginaSuperHeroes />,
  },
  {
    path: "/productos",
    element: <div>
      <button onClick={(evento) => {
        const mensaje = 'mensaje';
        alert(mensaje);
      }}> click </button>
    </div>,
  },
  {
    path: "/peliculas",
    element: <PaginaBuscador/>,
  },
  {
    path: "/peliculas/:id",
    element: <PaginaDetalle />,
  },
]);


function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
