import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{

    mostarImagenes = () =>{

        const imagenes = this.props.imagenes

        if (imagenes.length === 0) return null
        console.log(imagenes);
        
        return(

            <React.Fragment>

                <div className="col-12 p-5 row">

                    {imagenes.map(imagen => (

                        <Imagen imagen={imagen} key={imagen.id}></Imagen>

                    ))}

                </div>

                <Paginacion 
                paginaAnterior = {this.props.paginaAnterior}
                paginaSiguiente = {this.props.paginaSiguiente}
                ></Paginacion>

            </React.Fragment>

        )

    }

    render(){

        return(

            <React.Fragment>
                {this.mostarImagenes()}
            </React.Fragment>

        )

    }

}

export default Resultado;