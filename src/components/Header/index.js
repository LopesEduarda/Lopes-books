import './style.css';
import Logo from '../../components/Logo/index.js';
import OpcoesHeader from '../../components/OpcoesHeader';
import Icones from '../../components/Icones';

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <Icones />
        </header>
    )
}

export default Header;