import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const text = `Copyright by me: ${year}`; // year OBJECT UNDEFINED???
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>ESERCITAZIONE 23-02-21</h1>
        <footer>{text}</footer>
      </main>
    </div>
  );
}



export default App;
