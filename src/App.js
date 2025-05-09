// https://www.youtube.com/watch?v=b-pwpHaYOTI
import './App.css';
import Contactos from './contactanos';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Equipo from './equipo';
import { RouterDesconocido } from './routerdesconocido/routerdesconocido';
import Servicios from './servicios';
import NormasLegales from './normasLegales';
import ArticleNormasLegales from './articleNormasLegal';
// import { useSEO } from './hooks/useSEO';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function App(props) {

  const listCotenedor = [
    <Home></Home>,
    <Equipo></Equipo>,
    <Servicios></Servicios>,
    <NormasLegales></NormasLegales>,
    <ArticleNormasLegales></ArticleNormasLegales>,
    <Contactos></Contactos>
  ]

  return (
      <>
        <Header></Header>
          {listCotenedor[props.idcontec]}
          {/* <RouterDesconocido /> */}
        <Footer></Footer>
      </>
  );
}

export default App;
