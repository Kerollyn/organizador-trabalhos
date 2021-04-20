import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'
import { Alert } from 'reactstrap';


const fileUpload = async(file, fetchClassWorks) => {
    const formData = new FormData()
    try {
        formData.append('file', file, file.name)
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

const Modal = ({ isShowing, hide, file, setFile, fetchClassWorks }) =>
    isShowing
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
                                            <Input/>
                                       </BlockInput>
                                       
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input/>
                                        </BlockInput>
                                        
                                    </li>
                                    <li>
                                        <button type="submit" onClick={e => fileUpload(file)}>Upload</button>
                                    </li>
                              </ul>
                          </ModalConteudo>
                      </div>
                  </ModalTeste>
              </Container>,
              document.body
          )
        : null

export default Modal
