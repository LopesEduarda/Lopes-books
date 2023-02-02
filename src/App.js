import './App.css';
import Logo from './components/Logo/index.js';
import perfil from './img/perfil.svg';
import sacola from './img/sacola.svg';

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];
const icones = [perfil, sacola];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='opcoes'>
          {textOptions.map((option) => {
            return <li className='opcao' key={option}>{option}</li>;
          })}
        </ul>

        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src={icone} alt={icone} key={icone}></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
