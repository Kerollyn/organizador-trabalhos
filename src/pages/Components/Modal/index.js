import React from 'react'
import ReactDOM from 'react-dom'
import {MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo } from './styles'

const Modal = ({ isShowing, hide }) =>
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
                                        <input type="file"/>
                                  </li>
                                  <li>
                                        <button type="submit">Upload</button>
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
