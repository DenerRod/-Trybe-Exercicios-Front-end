import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const compromissos = ['lavar o carro', 'arrumar o quarto', 'lavar a louça', 'levar o lixo'];

class App extends React.Component {
  render() {
    return (
      <ul>{compromissos.map((item) => Task(item))}</ul>
    );
  }
}

export default App;
