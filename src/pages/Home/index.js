import React, { useState } from 'react';
import { MdExitToApp} from 'react-icons/md'

import { Main, Container, Top, Section, Button } from './styles'

import Modal from '../Components/Modal'
// import ModalV2 from '../Components/ModalV2'
import useModal from '../Components/Modal/useModal'
import ClassWorkList from '../Components/ClassWorkList'

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

                    <ClassWorkList />
                </Section>
            </Container>
        </Main>
    )
}
