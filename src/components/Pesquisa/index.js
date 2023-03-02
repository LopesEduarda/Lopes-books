import { useState } from 'react';
import styled from 'styled-components'
import Input from '../Input';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
   color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

// O manipulador de eventos onBlur é chamado quando o foco deixa o elemento (ou deixa algum elemento dentro dele). Por exemplo, é chamado quando o usuário clica fora de um input de texto focado.

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                type='text'
                placeholder='Escreva sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value;

                    const filtrandoTextoDigitado = livros.filter((livro) => {
                        return livro.nome.includes(textoDigitado);
                    })
                    setLivrosPesquisados(filtrandoTextoDigitado);
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;