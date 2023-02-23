import Logo from '../../components/Logo/index.js';
import OpcoesHeader from '../../components/OpcoesHeader';
import Icones from '../../components/Icones';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <Icones />
        </HeaderContainer>
    )
}

export default Header;