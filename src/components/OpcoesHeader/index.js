import './style.css';

const textOptions = ['Categorias', 'Favoritos', 'Minha Estante'];

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {textOptions.map((option) => {
                return <li className='opcao' key={option}>{option}</li>;
            })}
        </ul>
    )
};

export default OpcoesHeader;