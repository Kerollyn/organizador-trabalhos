import ReactDOM from 'react-dom'
import { Container, ModalTeste, ModalConteudo, BlockInput } from './styles'
import { getViewFormattedDate } from '../../../shared/dateUtils'

const STATUS_MAP = {
    ongoing: 'Em andamento',
    done: 'Concluído'
}

function ModalDetail({ isShowing, hide, classwork }) {
    return isShowing
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
                                        <label>Título do trabalho</label>
                                        <label>{classwork.title}</label>
                                    </BlockInput>
                                </li>
                                <li>
                                    <BlockInput>       
                                        <label>Disciplina</label>
                                        <label>{classwork.subject}</label>
                                    </BlockInput>
                                </li>                                    
                                <li>
                                    <BlockInput>   
                                        <label>Nome do professor</label>
                                        <label>{classwork.professorName}</label>
                                    </BlockInput>
                                </li>                   
                                <li>
                                    <BlockInput>   
                                        <label>Nome do arquivo</label>
                                        <label>{classwork.fileName}</label>
                                    </BlockInput>
                                </li>                   
                                <li>
                                    <BlockInput>
                                        <label>Data de entrega</label>
                                        <label>{getViewFormattedDate( classwork.deadline )}</label>
                                    </BlockInput>
                                </li>
                                <li>
                                    <BlockInput>   
                                        <label>Status do trabalho</label>
                                        <label>{STATUS_MAP[ classwork.status ]}</label>
                                        
                                    </BlockInput>
                                </li>
                                <li>
                                    <button onClick={hide}>Fechar</button>
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
export default ModalDetail
