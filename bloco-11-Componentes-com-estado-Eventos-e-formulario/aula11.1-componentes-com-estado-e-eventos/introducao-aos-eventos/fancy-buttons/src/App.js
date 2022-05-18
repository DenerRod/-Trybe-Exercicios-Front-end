import React from 'react';
import './App.css';


class App extends React.Component {
/*   constructor() {    -------------> (Como é construido o contructor de uma classe)

    super() --------------> (Super serve para extender a função constructor que já é criada e aplicada nativamente (com nossa lógica incrementada) no react na construção de uma class, através do 'extends')

    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  } */
  constructor() {
    super()
    this.state = {
      numerosDeClick1: 0,
      numerosDeClick2: 0,
      numerosDeClick3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  

  handleClick1() { // Função com arrow function '=>' não é necessário fazer o bind no constructor
    this.setState(({ numerosDeClick1 }) => ({
      numerosDeClick1: numerosDeClick1 + 1,        
    }))

  };

  handleClick2() { // Função com arrow function '=>' não é necessário fazer o bind no constructor
    this.setState(({ numerosDeClick2 }) => ({
      numerosDeClick2: numerosDeClick2 + 1,         
    }))

  };

  handleClick3() { // Função com arrow function '=>' não é necessário fazer o bind no constructor
    this.setState(({ numerosDeClick3 }) => ({
      numerosDeClick3: numerosDeClick3 + 1,  
    }))

  };

  putColor(num) {
   return num % 2 === 0 ? 'green' : 'white';
  };
  
  
  render() {
    const { numerosDeClick1, numerosDeClick2, numerosDeClick3 } = this.state;
    return (
      <div>

        <button 
        onClick={this.handleClick1}
        style={{backgroundColor: this.putColor(numerosDeClick1)}}>
          Botão 1 | Count = { numerosDeClick1 }
        </button>

        <button 
        onClick={this.handleClick2}
        style={{backgroundColor: this.putColor(numerosDeClick2)}}>
           Botão 1 | Count = { numerosDeClick2 }
        </button>

        <button 
        onClick={this.handleClick3}
        style={{backgroundColor: this.putColor(numerosDeClick3)}}>
           Botão 1 | Count = { numerosDeClick3 }
        </button>

      </div>
    );
  }
}

export default App;
