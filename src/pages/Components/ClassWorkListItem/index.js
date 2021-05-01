import { Button } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'

import Modal from '../ModalEdit';
import useModal from '../ModalEdit/useModal';

const deleteFile = async( id, cloudStorageFileName, insertOrRemoveClasswork) => {
    const url = `https://heroku-org-trabalhos-api.herokuapp.com/classworks/${ id }?cloudStorageFileName=${ cloudStorageFileName }`;
    console.log(`URL Deleção: ${url}`);
    const token = getAccessToken()
    const options = {
        headers: {
            Authorization: token
        }
    }
    try {
        await axios.delete( url, options )
        insertOrRemoveClasswork( { targetClasswork: { id }, list: 'ongoing', method: 'remove' } )
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar deletar o arquivo.\n'+err.stack)
    }
}

function ClassWorkListItem ( { id, title, subject, professor, insertOrRemoveClasswork, cloudStorageFileName } ){
    const { isShowing, toggle } = useModal()


    return ( 
        <li className='row-center'>
            <Button>
                <div className="titulo">{title}</div>
                <div className="disciplina">{subject}</div>
                <div className="nomeProfessor">{professor}</div>
                <div className="buttons">
                    <button>Visualizar</button>
                    <button>Detalhes</button>
                    
                    <button type="button" onClick={toggle}>Editar</button>
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                    />

                    <button onClick={()=>deleteFile(id, cloudStorageFileName, insertOrRemoveClasswork)}>Deletar </button>
                </div>
            </Button>
        </li>
        )
}

export default ClassWorkListItem