import React from "react"
import logo from '../assets/holberton-logo.jpg'
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr/>
      <div className='App-body'>
        <body>
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
          <button type='button'>OK</button>
        </body>
      </div>
      <hr/>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
