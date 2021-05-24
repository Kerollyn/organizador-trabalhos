import ReactDOM from 'react-dom'
import ClassworkApi from '../../../models/ClassworkApi'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input, Select } from './styles'

const ModalEdit = ({ isShowing, hide, classwork }) =>
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
                                    <BlockInput>   
                                        <label>Status do trabalho</label>
                                        <Select>
                                            <option>Em andamento</option>
                                            <option>Concluido</option>
                                        </Select>
                                    </BlockInput>
                                </li>
                                <li>
                                    <button type="submit" >Salvar</button>
                                </li>                                  
                            </ul>
                        </ModalConteudo>
                     </div>
                </ModalTeste>
            </Container>,
            document.body
          )
        : null

export default ModalEdit
