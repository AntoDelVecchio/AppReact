import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <div className='misComponentes'>
        <div className='saludo'>
          <h1 className='hola'>Hola Mundo!!</h1>
        </div>
        <div className='image'>
          <img className='computer' src="https://lisk.io/sites/default/files/styles/blog_main_image_xl/public/images/2020-04/iMessage%20Extension_Social%20copy.png?itok=msRT-cX8" alt=""/>
        </div>
      </div>  
    </div>
  );
}

export default App;
