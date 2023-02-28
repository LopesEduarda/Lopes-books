import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
    width: 100vw;
    flex-direction: row-reverse;
`

const Opcao = styled.li`
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textOptions.map((option) => {
                return <Opcao key={option}>{option}</Opcao>;
            })}
        </Opcoes>
    )
};

export default OpcoesHeader;