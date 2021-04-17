import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'

const fileUpload = async( file, fetchClassWorks ) => {
    const formData = new FormData()
    formData.append('file', file, file.name)

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
                                        <button type="submit" onClick={e => fileUpload(file, fetchClassWorks)}>Upload</button>
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
