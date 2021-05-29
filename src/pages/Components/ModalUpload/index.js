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

const fileUpdate = async( { classwork, file, insertOrRemoveClasswork, hasChanged } ) => {
    if ( !hasChanged && !file ) {
        return alert( 'Nenhuma mudança foi detectada.' )
    }
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

const getCorrectValue = (createNew, stateValue, classworkValue, hasChanged) => {
    const stateAndClassworkAreEqual = stateValue === classworkValue
    console.log( 'stateAndClassworkAreEqual >> ', stateAndClassworkAreEqual )
    console.log( 'HAS CHANGED >> ', hasChanged )
    console.log( 'STATE VALUE >> ', stateValue )
    if( !createNew ) {
        return stateAndClassworkAreEqual || hasChanged ? stateValue : classworkValue
    }
    return stateAndClassworkAreEqual ? stateValue : classworkValue
}

const _defaultOnChangeHandler = ( { hasChanged, setHasChanged }, executeSetter, valueToSet ) => {
    setHasChanged( hasChanged )
    executeSetter( valueToSet )
}

const Modal = ({ isShowing, hide, insertOrRemoveClasswork, classwork = {}, createNew = true }) => {
    const [title, setTitle] = useState( createNew ? [] : classwork.title)
    const [professor, setProfessor] = useState(createNew ? [] : classwork.professorName)
    const [subject, setSubject] = useState(createNew ? [] : classwork.subject)
    const [file, setFile] = useState(null)
    const [fileKey, setFileKey] = useState([])
    const [deadline, setDeadline] = useState(createNew ? [] : classwork.deadline)
    const [status, setStatus] = useState(createNew ? '' : classwork.status)
    const [hasChanged, setHasChanged] = useState(false)

    const defaultOnChangeHandler = _defaultOnChangeHandler.bind( null, { hasChanged: true, setHasChanged } )
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
                                        <input type="file" onChange={e => defaultOnChangeHandler( setFile, e.target.files[0])} key={fileKey  || ''}/>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Titulo do trabalho</label>
                                            <Input onChange={e => setTitle( e.target.value )} value={ getCorrectValue( createNew, title, classwork.title, hasChanged ) }/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input onChange={e => defaultOnChangeHandler( setSubject, e.target.value )} value={getCorrectValue( createNew, subject, classwork.subject, hasChanged )}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input onChange={e => defaultOnChangeHandler( setProfessor, e.target.value )} value={getCorrectValue( createNew, professor, classwork.professorName, hasChanged )}/>
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Data para entrega</label>
                                            <Input
                                                onChange={e => defaultOnChangeHandler( setDeadline, e.target.value )}
                                                value={getFormattedDate(getCorrectValue(createNew, deadline, classwork.deadline, hasChanged))}
                                                selected={getFormattedDate(getCorrectValue(createNew, deadline, classwork.deadline, hasChanged))}
                                                type="date"
                                                key={`deadline-${fileKey || ''}`}
                                            />
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <Select
                                                value={getCorrectValue( createNew, status, classwork.status, hasChanged)}
                                                selected={getCorrectValue( createNew, status, classwork.status, hasChanged)}
                                                onChange={e => defaultOnChangeHandler( setStatus, e.target.value )}
                                            >
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
                                                    fileUpdate( { classwork: { ...classwork, title, subject, professorName: professor, status, deadline }, file, insertOrRemoveClasswork, hasChanged } )
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
