import ReactDOM from 'react-dom'
import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'
import { Container, ModalTeste, ModalConteudo, BlockInput } from './styles'

import moment from 'moment';

let workDetails = {
    "id":0,
    "userId":0,
    "title":"teste titulo",
    "subject":"",
    "professorName":"",
    "fileName":"",
    "cloudStorageFileName":"",
    "url":"",
    "description":"",
    "deadline":"",
    "status":"",
    "createdAt":"",
    "updatedAt":""
    };

const getDetails = async( id ,setWorkDetails) => {
    const url = `https://heroku-org-trabalhos-api.herokuapp.com/classworks/${ id }`;
    console.log(`URL detalhes: ${url}`);
    const token = getAccessToken()
    const options = {
        headers: {
            Authorization: token
        }
    }
    try {
        await axios.get( url, options ).then(response =>
            {
                console.log(response.data);
                workDetails = response.data;
            }
        ).catch((error) => 
        {
            console.error(error);
        })
        
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar deletar o arquivo.\n'+err.stack)
    }
}
const mapeamento = {ongoing: 'Em andamento', done: 'Concluido', }

function ModalDetail({ isShowing, hide, id, classwork }) {
    const date = moment()
        .utcOffset('+00:00')
        .format('DD-MM-YYYY');

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
                                        <label>Data de entrega</label>
                                        <label>{moment(classwork.deadline).format('DD/MM/YYYY')}</label>
                                    </BlockInput>
                                </li>
                                <li>
                                    <BlockInput>   
                                        <label>Status do trabalho</label>
                                        <label>{mapeamento[classwork.status]}</label>
                                        
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
