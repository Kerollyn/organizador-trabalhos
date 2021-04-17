import React, { useState } from 'react';
import { MdExitToApp} from 'react-icons/md'

import { Main, Container, Top, Section, Button } from './styles'

import Modal from '../Components/Modal'
// import ModalV2 from '../Components/ModalV2'
import useModal from '../Components/Modal/useModal'

export default function Home() {
    const { isShowing, toggle } = useModal()
    const [file, setFile] = useState([])

    return (
        <Main>
            <Container>
                <header>
                    <div className='titulo'>
                        <label>Gerenciamento de trabalhos academicos</label>
                    </div>
                    <div className='usuario'>
                        <label>TESTE</label>
                        <button>
                            <MdExitToApp size={16} />
                        </button>
                        
                    </div>
                </header>

                <Top>
                    <div />
                </Top>

                <Section>
                    <form>
                        <div className='button'>
                            <button type='button' onClick={toggle}>
                                Upload
                            </button>
                            <Modal isShowing={isShowing} hide={toggle} file={file} setFile={setFile} />
                        </div>
                    </form>

                    <ul>
                        <li className='header-center'>
                            <div className="titulo">Titulo do trabalho</div>
                            <div className="disciplina">Disciplina</div>
                            <div className="nomeProfessor">Nome do professor</div>
                        </li>
                        <li className='row-center'>
                            <Button>
                                <div className="titulo">Recuperação de falhas</div>
                                <div className="disciplina">Práticas de banco de dados</div>
                                <div className="nomeProfessor"> Adalto</div>
                                <div className="buttons">
                                    <button>Visualizar</button>
                                    <button>Editar</button>
                                    <button>Deletar</button>
                                </div>
                            </Button>
                        </li>
                    </ul>
                </Section>
            </Container>
        </Main>
    )
}
