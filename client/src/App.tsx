import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const sayHello = async () => {
      const response = await fetch("/api/hello");
      const body = await response.json();
      console.log(body);
    };
    sayHello();
  }, []);
  
  const plaatjes = ["Titanbird.png", "Superconscious.png"];
  const listItems = plaatjes.map(plaatje =>
    <img src={plaatje} width="300px"/>
  );

  return (
    <div className="App">
      <header className="App-header">
        {listItems}
        <h1>Super cool!</h1>
        <p>
          Sneeze <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
