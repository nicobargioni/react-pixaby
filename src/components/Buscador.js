import React, { Component } from 'react';

class Buscador extends Component {


    busquedaRef = React.createRef();
    
    obtenerDatos = (e) =>{
        e.preventDefault();

        // ACA ESTOY TOMANDO EL VALOR DEL INPUT
        const termino = this.busquedaRef.current.value

        // ACA LO ENVIO AL COMPONENTE PRINCIPAL
        this.props.datosBusqueda(termino)

    }


    render(){

        return(

           <form onSubmit={this.obtenerDatos}>

            <div className="row">

                <div className="form-group col-md-8">

                    <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Buscar una imagen. Por ejemplo: Futbol"/>

                </div>

                <div className="form-group col-md-4">

                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>

                </div>

            </div>

           </form> 

        ) 

    }

}



export default Buscador;