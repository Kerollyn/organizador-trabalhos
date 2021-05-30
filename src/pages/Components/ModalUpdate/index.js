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

const getCorrectValue = (stateValue, classworkValue, hasChanged, executeSetter ) => {
    const stateAndClassworkAreEqual = stateValue === classworkValue
    if ( stateAndClassworkAreEqual || hasChanged ) {
        return stateValue
    }
    executeSetter( classworkValue )
    return classworkValue
}

const _defaultOnChangeHandler = ( { hasChanged, setHasChanged }, executeSetter, valueToSet ) => {
    setHasChanged( hasChanged )
    executeSetter( valueToSet )
}

const Modal = ({ isShowing, hide, insertOrRemoveClasswork, classwork = {} }) => {
    const [title, setTitle] = useState( classwork.title)
    const [professor, setProfessor] = useState(classwork.professorName)
    const [subject, setSubject] = useState(classwork.subject)
    const [file, setFile] = useState(null)
    const [fileKey, setFileKey] = useState([])
    const [deadline, setDeadline] = useState(classwork.deadline)
    const [status, setStatus] = useState(classwork.status)
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
                                            <Input onChange={e => defaultOnChangeHandler( setTitle, e.target.value )} value={getCorrectValue(title, classwork.title, hasChanged, setTitle)}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input onChange={e => defaultOnChangeHandler( setSubject, e.target.value )} value={getCorrectValue(subject, classwork.subject, hasChanged, setSubject)}/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input onChange={e => defaultOnChangeHandler( setProfessor, e.target.value )} value={getCorrectValue(professor, classwork.professorName, hasChanged, setProfessor)}/>
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Data para entrega</label>
                                            <Input
                                                onChange={e => defaultOnChangeHandler( setDeadline, e.target.value )}
                                                value={getFormattedDate(getCorrectValue(deadline, classwork.deadline, hasChanged, setDeadline))}
                                                selected={getFormattedDate(getCorrectValue(deadline, classwork.deadline, hasChanged, setDeadline))}
                                                type="date"
                                                key={`deadline-${fileKey || ''}`}
                                            />
                                        </BlockInput>                                        
                                    </li>
                                    <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <Select
                                                value={getCorrectValue(status, classwork.status, hasChanged, setStatus)}
                                                selected={getCorrectValue(status, classwork.status, hasChanged, setStatus)}
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
                                            () => fileUpdate( {
                                                classwork: { ...classwork, title, subject, professorName: professor, status, deadline },
                                                file,
                                                insertOrRemoveClasswork,
                                                hasChanged
                                            } )
                                            .then( () => {
                                                cleanModal( classwork )
                                                hide()
                                            } )
                                        }>
                                            Salvar Alterações
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
