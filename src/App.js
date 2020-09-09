import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBox } from './components';

function App() {
  return (
    <div className="App">
      <SearchBox placeholder="Search Repo" />
      <header className="App-header">
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
        </a>
      </header>
      <div className="profile-user">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Adi Setyawan</p>
        <p>email@mail.com</p>
        <div className="detail-repos">
          <p>Public Repo</p>
          <p>folower</p>
          <p>following</p>
        </div>
      </div>
    </div>
  );
}

export default App;
