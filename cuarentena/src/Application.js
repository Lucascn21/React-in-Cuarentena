import React, { Component } from 'react';

class Application extends Component {

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