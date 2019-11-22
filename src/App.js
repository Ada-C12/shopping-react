import React from 'react';
import logo from './logo.svg';
import Avatar from './components/Avatar';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Product price={10} discountPrice={8}/>
        {/* <Avatar image="example-component-avatar.png" />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
