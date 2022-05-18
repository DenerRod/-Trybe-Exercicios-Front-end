import React from 'react';
import './App.css';

function handleClick1() {
  console.log('Click Feito!');
};

function handleClick2() {
  console.log('Click Feito Mais uma vez!');
};

function handleClick3() {
  console.log('Click Feito última vez!');
};

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>Meu button</button>
        <button onClick={handleClick2}>Meu button</button>
        <button onClick={handleClick3}>Meu button</button>
      </div>
    );
  }
}

export default App;
