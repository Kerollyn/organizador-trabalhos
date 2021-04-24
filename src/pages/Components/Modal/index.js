import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'
import { Alert } from 'reactstrap';


const fileUpload = async({file, title, subject, professor, fetchClassWorks}) => {
    console.log( 'FAZENDO UPLOAD !!! >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' )
    const formData = new FormData()
    try {
        formData.append('file', file, file.name)
        formData.append('title', title)
        formData.append('subject', subject)
        formData.append('professorName', professor)
    } catch (e){
        alert ('Valide se o arquivo foi selecionado!')
    }
    
    const token = getAccessToken()
    const options = {
        headers: {
            Authorization: token
        }
    }
    const url = 'https://heroku-org-trabalhos-api.herokuapp.com/classworks'
    try {
        await axios.post( url, formData, options )
        fetchClassWorks()
        alert('Arquivo salvo com sucesso!')
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar enviar o arquivo.')
    }
}

const Modal = ({ isShowing, hide, file, setFile, fetchClassWorks }) => {
    const [title, setTitle] = useState([])
    const [professor, setProfessor] = useState([])
    const [subject, setSubject] = useState([])

    return isShowing
        ? ReactDOM.createPortal(
                <Container>
                    <div className='modal-fundo' />
                    <ModalTeste>
                        <div className='modal'>
                            <div className='modal-button'>
                                <button type='button' onClick={hide}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>

                            <ModalConteudo>
                                <ul>
                                    <li>
                                        <MdFileUpload size={50}/>
                                    </li>
                                    <li>
                                        <input type="file" onChange={e => setFile(e.target.files[0])}/>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Titulo do trabalho</label>
                                            <Input onChange={e => setTitle(e.target.value)}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input onChange={e => setSubject(e.target.value)}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input onChange={e => setProfessor(e.target.value)}/>
                                        </BlockInput>
                                        
                                    </li>
                                    <li>
                                        <button type="submit" onClick={e => fileUpload({file, title, subject, professor, fetchClassWorks})}>Upload</button>
                                    </li>
                                </ul>
                            </ModalConteudo>
                        </div>
                    </ModalTeste>
                </Container>,
                document.body
            )
        : null
}
export default Modal
