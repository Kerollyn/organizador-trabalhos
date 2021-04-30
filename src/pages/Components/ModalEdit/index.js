import ReactDOM from 'react-dom'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input } from './styles'

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
                                        <BlockInput>
                                            <label>Data de entrega</label>
                                            <Input type="date"/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                         <button type="submit" >Upload</button>
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
