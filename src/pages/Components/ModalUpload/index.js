import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import { MdCloudUpload } from 'react-icons/md'
import { Container, ModalTeste, ModalConteudo, BlockInput, Input, Select } from './styles'

import { getAccessToken } from '../../../shared/tokenUtils'

const validateField = field => Boolean( ( Array.isArray( field ) && field.length ) || ( !Array.isArray( field ) && field ))

const cleanup = ( { setProfessor, setTitle, setSubject, setFile, setFileKey, setStatus, setDeadline }  ) =>  {
    setProfessor( [] )
    setTitle( [] )
    setSubject( [] )
    setStatus( '' )
    setDeadline( [] )
    setFile( [] )
    setFileKey( Math.random() )
}

const fileUpload = async({file, title, subject, professor, status, deadline, insertOrRemoveClasswork}) => {
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
            formData.append('status', status)
            formData.append('deadline', deadline)
        console.log(status, deadline)
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

const Modal = ({ isShowing, hide, insertOrRemoveClasswork }) => {
    const [title, setTitle] = useState([])
    const [professor, setProfessor] = useState([])
    const [subject, setSubject] = useState([])
    const [file, setFile] = useState([])
    const [fileKey, setFileKey] = useState([])
    const [deadline, setDeadline] = useState([])
    const [status, setStatus] = useState('')


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
                                        <MdCloudUpload size={50}/>
                                    </li>
                                    <li>
                                        <input type="file" onChange={e => setFile(e.target.files[0])} key={fileKey  || ''}/>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Titulo do trabalho</label>
                                            <Input onChange={e => setTitle(e.target.value)} value={title}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input onChange={e => setSubject(e.target.value)} value={subject}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input onChange={e => setProfessor(e.target.value)} value={professor}/>
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Data para entrega</label>
                                            <Input onChange={e => setDeadline(e.target.value)} type="date" key={`deadline-${fileKey || ''}`}/>
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <Select value={status} onChange={e => setStatus(e.target.value)}>
                                                <option value={''}>Selecione...</option>
                                                <option value={'ongoing'}>Em andamento</option>
                                                <option value={'done'}>Concluido</option>
                                            </Select>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <button type="submit" onClick={
                                            () => fileUpload({file, title, subject, professor, status, deadline, insertOrRemoveClasswork})
                                                .then( () => cleanup( { setFile, setProfessor, setSubject, setTitle, setFileKey, setStatus, setDeadline } ) )
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
