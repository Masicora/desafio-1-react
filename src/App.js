import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from './components/Footer';
import Tarjeta from './components/Card';

function App() {
  return (
    <div>
      <Header titulo="Galería de imágenes con React" />
      <div>
        <Tarjeta src="https://placekitten.com/300/300?image=1" titulo="Mehmet" descripcion="Un gatito príncipe" />
        <Tarjeta src="https://placekitten.com/300/300?image=5" titulo="Nurbanu" descripcion="La sultana de todos" />
        <Tarjeta src="https://placekitten.com/300/300?image=3" titulo="Mustafá" descripcion="El hijo ilegítimo" />
        <Tarjeta src="https://placekitten.com/300/300?image=4" titulo="Shezade" descripcion="La desechada" />
      </div>
      <Footer titulo="Todos los derechos reservados" />
    </div >
  );
}

export default App;
