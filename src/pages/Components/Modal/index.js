import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

<<<<<<< HEAD
import { Container, ModalTeste, ModalConteudo, BlockInput, Input } from './styles'
=======
import { Container, ModalTeste, ModalConteudo } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'
import { Alert } from 'reactstrap'

const fileUpload = async( file, fetchClassWorks ) => {
>>>>>>> 18e52af647265864809f57e73b2280f01e8a5b4a

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
<<<<<<< HEAD
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
=======
                                  </li>
                                  <li>
                                        <button type="submit" onClick={e => fileUpload(file, fetchClassWorks)}>Upload</button>
                                  </li>
>>>>>>> 18e52af647265864809f57e73b2280f01e8a5b4a
                              </ul>
                          </ModalConteudo>
                      </div>
                  </ModalTeste>
              </Container>,
              document.body
          )
        : null

export default Modal
