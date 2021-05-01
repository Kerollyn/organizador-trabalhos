import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input, Select } from './styles'
// import { Alert } from 'reactstrap';

import { getAccessToken } from '../../../shared/tokenUtils'

const validateField = field => Boolean( ( Array.isArray( field ) && field.length ) || ( !Array.isArray( field ) && field ))

const cleanup = ( { setProfessor, setTitle, setSubject, setFile }  ) =>  {
    setProfessor( [] )
    setTitle( [] )
    setSubject( [] )
    setFile( [] )
}

const fileUpload = async({file, title, subject, professor, insertOrRemoveClasswork}) => {
    const fieldsToValidate = [ file, title, subject, professor ]
    try {
        const formIsFulfilled = fieldsToValidate.reduce( ( acc, field ) => acc && validateField( field ), true )

        if( !formIsFulfilled ) {
            return alert( 'Erro ao tentar realizar upload! Todos os campos devem estar preenchidos!' )
        }

        const formData = new FormData()
            formData.append('file', file, file.name)
            formData.append('title', title)
            formData.append('subject', subject)
            formData.append('professorName', professor)
        
        const token = getAccessToken()
        const options = {
            headers: {
                Authorization: token
            }
        }
        const url = 'https://heroku-org-trabalhos-api.herokuapp.com/classworks'
        const newClasswork = ( await axios.post( url, formData, options ) ).data
        insertOrRemoveClasswork( { targetClasswork: newClasswork, list: 'ongoing', method: 'insert' } )
        alert('Arquivo salvo com sucesso!')
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar enviar o arquivo.')
    }
}

const Modal = ({ isShowing, hide, file, setFile, insertOrRemoveClasswork }) => {
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
                                        <BlockInput>
                                            <label>Data para entrega</label>
                                            <Input type="date"/>
                                        </BlockInput>                                        
                                    </li>
                                      <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <Select>
                                                <option>Em andamento</option>
                                                <option>Concluido</option>
                                            </Select>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <button type="submit" onClick={
                                            () => fileUpload({file, title, subject, professor, insertOrRemoveClasswork})
                                                .then( () => cleanup( { setFile, setProfessor, setSubject, setTitle } ) )
                                            }>
                                            Upload
                                        </button>
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
