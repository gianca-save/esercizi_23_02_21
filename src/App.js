/* Lavorate sul repository creato per l'esercizio di ieri.
Aggiungere un pulsante che, quando cliccato, stampi un messagio nella console utilizzando "consola".
Aggiungere un comando "serve" nel package.json che permetta di visualizzare il codice generato da "npm run build"
Aggiungere un comando "analyze" nel package.json che permetta di visualizzare il contenuto del bundle generato da "npm run build"
- il messaggio in console deve essere stampato utilizzando "consola": https://www.npmjs.com/package/consola
- per visualizzare la build di produzione potete utilizzare "serve": https://www.npmjs.com/package/serve
- per il comando "analyze" utilizzare "source-maps-explorer": https://www.npmjs.com/package/source-map-explorer
- creare un commit per ogni task, con messaggi chiari ed esplicativi
- distinguere tra dependencies e devDependencies
- il repository non deve contenere la cartella "node_modules"
- condividere privatamente a Lorenzo l'url del repository */

import logo from './logo.svg';
import './App.css';
import consola from '../node_modules/consola';
const today = new Date();
const year = today.getFullYear();
const text = `Copyright by me: ${year}`;

function HiMess() {
  consola.success('Congratulazioni! Sai premere un pulsante!')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick= {HiMess}>Premimi</button>
        <img src={logo} className="App-logo" alt="logo" />
         <main>
        <h1>ESERCITAZIONE 24-02-21</h1>
        <footer>{text}</footer>
        </main>
      </header>
    </div>
  );
}



export default App;
