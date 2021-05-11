import ReactDOM from 'react-dom'

import { Container, ModalTeste, ModalConteudo, BlockInput } from './styles'

const ModalDetail = ({ isShowing, hide }) =>
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
                                            <label>TESTE</label>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>       
                                            <label>Disciplina</label>
                                            <label>TESTE</label>
                                        </BlockInput>
                                    </li>                                    
                                    <li>
                                        <BlockInput>   
                                            <label>Nome do professor</label>
                                            <label>TESTE</label>
                                        </BlockInput>
                                    </li>
                                    
                                    <li>
                                        <BlockInput>
                                            <label>Data de entrega</label>
                                            <label>TESTE</label>
                                        </BlockInput>
                                    </li>

                                    <li>
                                        <BlockInput>   
                                            <label>Status do trabalho</label>
                                            <label>TESTE</label>
                                        </BlockInput>
                                    </li>

                                    <li>
                                        <button>Fechar</button>
                                    </li>                                        
                                    
                                </ul>
                            </ModalConteudo>
                      </div>
                  </ModalTeste>
              </Container>,
              document.body
          )
        : null

export default ModalDetail
