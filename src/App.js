import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonApp from './ButtonApp';
import ListComponent from './components/ListComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value:0
    }
    this.disminuir = this.disminuir.bind(this);
  }

  aumentar = () => {
    this.setState({
      value:this.state.value+1
    });
  }

  disminuir(){
    this.setState({
      value:this.state.value-1
    })
  }

  render() {
    return (
      <div className="App">
       <p>{this.state.value}</p>      
        <ButtonApp method={this.aumentar} name={"Aumentar"}/>
        <ButtonApp method={this.disminuir} name={"Disminuir"}/>

        <ListComponent/>


      </div>
    );
  }
}

export default App;
