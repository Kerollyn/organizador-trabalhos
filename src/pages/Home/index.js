import React from "react";
import  { MdExitToApp } from 'react-icons/md';

import { Main, Container, Top, Section } from './styles';

export default function Home() {

    return (
        <Main>
            <Container>
                <header>
                    <div className="titulo">
                        <label>Gerenciamento de trabalhos academicos</label>
                    </div>
                    <div className="usuario">
                        <label>TESTE</label>
                        <MdExitToApp size={16}/>
                    </div>
                </header>
            
                <Top>
                    <div></div>
                </Top>

                <Section>
                    <ul>
                        <li className='header-center'>
                            <div>Titulo do trabalho</div>
                            <div>Disciplina</div>
                            <div>Nome do professor</div>
                        </li>
                        <li className='row-center'>
                            <div>Recuperação de falhas</div>
                            <div>Práticas de banco de dados</div>
                            <div>Adalto</div>
                        </li>
                    </ul>
                </Section>
            
            </Container>
        </Main>
        );
    
}
