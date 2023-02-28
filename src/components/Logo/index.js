import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoStyle = styled.div`
  display: flex;
  font-size: 30px;
  margin-left: 30px;
`

const LogoImgStyle = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <LogoStyle>
      <LogoImgStyle
        src={logo}
        className='App-logo'
        alt='logo'
      />
      <p><strong>Lopes</strong>Books</p>
    </LogoStyle>
  )
};

export default Logo;