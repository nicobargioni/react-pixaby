import { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = {

    termino: '',
    imagenes: [],
    pagina: ''

  }

  paginaAnterior = () =>{

    //LEER EL STATE DE LA PAGINA ACTUAL
    let pagina = this.state.pagina;

    //VER SI LA PAGINA ES 1, SI ASI ASI, YA NO IR HACIA ATRAS
    if (pagina === 1) return null;

    //RESTAR 1 A LA PAGINA ACTUAL
    pagina--


    // AGREGAR EL CAMBIO AL STATE
    this.setState({

      pagina

    }, () => {

      this.consultarAPI();
      this.scroll();

    });

    console.log(pagina);

  }

  paginaSiguiente = () =>{

    //LEER EL STATE DE LA PAGINA ACTUAL
    let pagina = this.state.pagina;

    //SUMAR 1 A LA PAGINA ACTUAL
    pagina++


    // AGREGAR EL CAMBIO AL STATE
    this.setState({

      pagina

    }, () => {

      this.consultarAPI();
      this.scroll();

    });

    console.log(pagina);
    
  }

  consultarAPI = () => {

    const pagina = this.state.pagina

    const url = `https://pixabay.com/api/?key=20648337-94c4740d7f7c08a9114f4daaa&q=${this.state.termino}&page=${pagina}`
    console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))

  }

  datosBusqueda = (termino) => {

    this.setState({

      termino: termino,
      pagina: 1

    }, () => {

      this.consultarAPI()

    })

  }

  scroll = () =>{

    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');

  }

  render(){

  return (
    <div className="app container">
      
      <div className="jumbotron">

        <p className="lead text-center">Buscar imagenes</p>

        <Buscador datosBusqueda={this.datosBusqueda}/>

      </div>

      <div className="row justify-content-center">

        <Resultado
          imagenes = {this.state.imagenes}
          paginaAnterior = {this.paginaAnterior}
          paginaSiguiente = {this.paginaSiguiente}
          ></Resultado>

      </div>


    </div>
  );
}
}

export default App;
