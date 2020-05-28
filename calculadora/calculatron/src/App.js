import React, {Component} from 'react';
import './App.css';
import Button from  './components/Button.js'

class App extends Component {

  constructor(props){
      super(props);
      this.state ={
        current:'',
        previous:[]
      }
  }

  reset = () =>{
    this.setState({result:0})
  }


  render() {
    const buttons=[
       {symbol:'C', cols: 1, action: this.reset}
    ];
    return(
    <div className="App">
      <input className='result' type='text' value={this.state.current}></input>





    </div>
  );
  }
}

export default App;
