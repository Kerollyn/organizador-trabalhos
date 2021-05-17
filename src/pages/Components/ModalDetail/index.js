import ReactDOM from 'react-dom'
import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'
import { Container, ModalTeste, ModalConteudo, BlockInput } from './styles'
//import { useState } from 'react';

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


const ModalDetail = ({ isShowing, hide, id }) =>

    isShowing
        ? ReactDOM.createPortal(
            <Container onLoad={ getDetails(id)}>
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
                                        <label>{workDetails.title}</label>
                                    </BlockInput>
                                </li>
                                <li>
                                    <BlockInput>       
                                        <label>Disciplina</label>
                                        <label>{workDetails.subject}</label>
                                    </BlockInput>
                                </li>                                    
                                <li>
                                    <BlockInput>   
                                        <label>Nome do professor</label>
                                        <label>{workDetails.professorName}</label>
                                    </BlockInput>
                                </li>                   
                                <li>
                                    <BlockInput>
                                        <label>Data de entrega</label>
                                        <label>{workDetails.deadline}</label>
                                    </BlockInput>
                                </li>
                                <li>
                                    <BlockInput>   
                                        <label>Status do trabalho</label>
                                        <label>{workDetails.status}</label>
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

export default ModalDetail
