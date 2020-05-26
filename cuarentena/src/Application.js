import React, { Component } from 'react';
import HighScore from './HighScore';

class Application extends Component {
//Algunos metodos de la clase App.
/*
        //Esta es la manera mas apropiada, los will estan / seran deprecados
        componentDidUpdate(props, state){
        }
        componentDidMount(props, state){
            console.log("Mounted with", props, state);
        }
*/


    //Metodo constructor, recibe un argumento props
    constructor(props){
        super(props);

       this.state={
           count:0,
           overTen: false
       }
    }

    handleClick =()=>{
     //   console.log("clicked");
        this.setState({count:this.state.count+1});
    }
    //Cada vez que clickeamos el boton, se llama a esta funcion, logueamos el estado previo y el estado actual.
    componentDidUpdate(props, state){
        console.log("Updated from", state, "to", this.state);
        //Necesito la segunda parte de la condicion para evitar un loop infinito al usar setState para actualizar el componente, ademas verificamos que overTen sea falso para no estar saliendo por el true innecesariamente despues de las 10 veces
        if(this.state.count>10 && this.state.count!==state.count && !this.state.overTen){
            console.log("Updated over 10");
            this.setState({overTen:true});

        }
    }
    //Recibe un evento como parametro, el metodo va a resetear el state a count 0 y overTen falso
    resetCount= (e)=>{
        console.log("event is", e);
        this.setState({
            count:0,
            overTen:false
        })
    }

    //render retorna el html
    render() {
        //podemos usar y retornar variables en render.abs
        let name='Pepe';
        let {count}=this.state;





       //Podemos retornar texto o en HTML. 
       // return 'Hello world';

       //En el boton, capturamos el evento y lo mandamos al metodo que hicimos arriba
       //Usamos un operador ternario para mostrar cuando se superen los 10 clicks
       return (
        <div> 
       <h1>Clickeaste el boton {count} veces</h1>
        <HighScore
            overTen={this.state.overTen}
            onReset={this.resetCount}
        />
       <span><button onClick={()=>this.handleClick()}>Clickeame!</button></span>
       <p>{name}</p>
       </div>  
       );
    }
}

export default Application;