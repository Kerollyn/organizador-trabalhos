import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { MdCloudUpload } from 'react-icons/md'
import { Container, ModalTeste, ModalConteudo, BlockInput, Input, Select } from './styles'
import ClassworkApi from '../../../models/ClassworkApi'

import { getFormattedDate } from '../../../shared/dateUtils'

const validateField = field => Boolean( ( Array.isArray( field ) && field.length ) || ( !Array.isArray( field ) && field ))
const defaultAlert = () => alert('Ocorreu um erro ao tentar enviar o arquivo.')

const cleanup = ( { setProfessor, setTitle, setSubject, setFile, setFileKey, setStatus, setDeadline }, classwork = {} ) =>  {
    setProfessor( classwork.professorName || [] )
    setTitle( classwork.title || [] )
    setSubject( classwork.subject || [] )
    setStatus( classwork.status || '' )
    setDeadline( classwork.deadline || [] )
    setFile( null )
    setFileKey( Math.random() )
}

const fileUpload = async({ classwork, file, insertOrRemoveClasswork }) => {
    const { title, subject, professorName } = classwork
    const fieldsToValidate = [ file, title, subject, professorName ]
    try {
        const formIsFulfilled = fieldsToValidate.reduce( ( acc, field ) => acc && validateField( field ) , true )

        if( !formIsFulfilled ) {
            return alert( 'Erro ao tentar realizar upload! Todos os campos devem estar preenchidos!' )
        }

        const newClasswork = await ClassworkApi.uploadClasswork( classwork, file )
        insertOrRemoveClasswork( { targetClasswork: newClasswork, list: classwork.status, method: 'insert' } )
        alert('Arquivo salvo com sucesso!')
    } catch( err ) {
        console.error( err.stack )
        if ( err.response ) {
            switch (err.response.status) {
                case 409:
                    alert(`Você já possui um trabalho com este nome.\nNome do trabalho: ${ err.response.data.title }`)
                    break
                default:
                    defaultAlert()
                    break
            }    
        } else {
            defaultAlert()
        }
    }
}

const fileUpdate = async( { classwork, file, insertOrRemoveClasswork } ) => {
    const fieldsToValidate = [ classwork.title, classwork.subject, classwork.professorName ]
    try {
        const formIsFulfilled = fieldsToValidate.reduce( ( acc, field ) => acc && validateField( field ), true )

        if( !formIsFulfilled ) {
            return alert( 'Erro ao tentar realizar upload! Todos os campos devem estar preenchidos!' )
        }

        const updatedClasswork = await ClassworkApi.updateClasswork( classwork, file )
        insertOrRemoveClasswork( { targetClasswork: updatedClasswork, list: classwork.status, method: 'update' } )
        return alert('Arquivo salvo com sucesso!')

    } catch ( error ) {
        console.error( error.stack )
        return defaultAlert()
    }
}

const Modal = ({ isShowing, hide, insertOrRemoveClasswork, classwork = {}, createNew = true }) => {
    const [title, setTitle] = useState(classwork.title || [])
    const [professor, setProfessor] = useState(classwork.professorName || [])
    const [subject, setSubject] = useState(classwork.subject || [])
    const [file, setFile] = useState(null)
    const [fileKey, setFileKey] = useState([])
    const [deadline, setDeadline] = useState(classwork.deadline || [])
    const [status, setStatus] = useState(classwork.status || '')
    console.log( classwork )

    const cleanModal = cleanup.bind( null, { setDeadline, setFile, setFileKey, setProfessor, setStatus, setSubject, setTitle } )
    return isShowing
        ? ReactDOM.createPortal(
                <Container>
                    <div className='modal-fundo' />
                    <ModalTeste>
                        <div className='modal'>
                            <div className='modal-button'>
                                <button type='button' onClick={() => 
                                    { 
                                        cleanModal( classwork )
                                        hide()
                                    }}
                                >
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
                                            <Input
                                                onChange={e => setDeadline(e.target.value)}
                                                value={getFormattedDate(deadline)}
                                                selected={getFormattedDate(deadline)}
                                                type="date"
                                                key={`deadline-${fileKey || ''}`}
                                            />
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <Select value={status} selected={status} onChange={e => setStatus(e.target.value)}>
                                                <option value={''}>Selecione...</option>
                                                <option value={'ongoing'}>Em andamento</option>
                                                <option value={'done'}>Concluido</option>
                                            </Select>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <button type="submit" onClick={
                                            () => {
                                                if ( createNew ) {
                                                    fileUpload({ classwork: { ...classwork, title, subject, professorName: professor, status, deadline }, file, insertOrRemoveClasswork })
                                                    .then( () => {
                                                        cleanModal( classwork )
                                                        hide()
                                                    } )
                                                } else {
                                                    fileUpdate( { classwork: { ...classwork, title, subject, professorName: professor, status, deadline }, file, insertOrRemoveClasswork } )
                                                    .then( () => {
                                                        cleanModal( classwork )
                                                        hide()
                                                    } )
                                                }
                                            }
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
