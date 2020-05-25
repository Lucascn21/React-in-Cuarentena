import React, { Component } from 'react';

class Application extends Component {
    //Metodo constructor, recibe un argumento props
    constructor(props){
        super(props);
    }

        componentWillMount(props, state){


        }

      


        componentWillReceiveProps(props){

        }

        componentWillUpdate(props, state){
            if (this.props.name!==props.name) {
                //hacer algo
            }
        }
        //Esta es la manera mas apropiada, los will estan / seran deprecados
        componentDidUpdate(props, state){
            
        }

        componentDidMount(props, state){
            console.log("Mounted with", props, state);
        }




    //render retorna el html
    render() {
        //podemos usar y retornar variables en render.abs
        let name='Pepe';




       //Podemos retornar texto o en HTML. 
       // return 'Hello world';
       return (
        <div> 
       <h1>Hello {name} / World</h1>
       <span>This</span>
       <p>{name}</p>
       </div>  
       );
    }
}

export default Application;