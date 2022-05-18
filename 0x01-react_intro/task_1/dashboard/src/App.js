import logo from './logo.png'
import './App.css';
import {getFullYear, getFooterCopy} from './utils'

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
