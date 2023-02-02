import logo from '../../img/logo.svg';
import './style.css'

function Logo() {
    return(
        <div className='logo'>
          <img src={logo} className='App-logo' alt='logo' />
          <p><strong>Lopes</strong>Books</p>
        </div>
    )
};

export default Logo;