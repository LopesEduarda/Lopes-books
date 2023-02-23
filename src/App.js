import './App.css';
import Logo from './components/Logo/index.js';
import OpcoesHeader from './components/OpcoesHeader';
import Icones from './components/Icones';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <OpcoesHeader />
        <Icones />

      </header>
    </div>
  );
}

export default App;
