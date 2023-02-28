import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
    margin-top: 20px;
`

const IconesUl = styled.ul`
    display: flex;
`

const iconesMap = [perfil, sacola];

function Icones() {
    return (
        <IconesUl>
            {iconesMap.map((icone) => (
                <Icone><img src={icone} alt={icone} key={icone}></img></Icone>
            ))}
        </IconesUl>
    )
}

export default Icones;