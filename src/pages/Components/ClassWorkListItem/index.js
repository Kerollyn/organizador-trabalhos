import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'

import ModalEdit from '../ModalEdit';
import useModal from '../ModalEdit/useModal';

import { Button } from './styles'
//Icones dos botões
import { MdDelete, MdModeEdit, MdVisibility, MdDescription } from "react-icons/md";

const deleteFile = async( id, cloudStorageFileName, insertOrRemoveClasswork, status) => {
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
        insertOrRemoveClasswork( { targetClasswork: { id }, list: status, method: 'remove' } )
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar deletar o arquivo.\n'+err.stack)
    }
}

function ClassWorkListItem ( { id, status, title, subject, professor, insertOrRemoveClasswork, cloudStorageFileName } ){
    const { isShowing, toggle } = useModal()


    return ( 
        <li className='row-center'>
            <Button>
                <div className="titulo">{title}</div>
                <div className="disciplina">{subject}</div>
                <div className="nomeProfessor">{professor}</div>
                <div className="buttons">
                    <button>
                        <MdVisibility size={25}/>
                    </button>
                    
                    <button>
                        <MdDescription size={25}/>
                    </button>
                    
                    <button type="button" onClick={toggle}>
                        <MdModeEdit size={25}/>
                    </button>
                    <ModalEdit isShowing={isShowing} hide={toggle}/>

                    <button onClick={() => {
                        if(window.confirm('Deseja deletar este arquivo?')) {
                            deleteFile(id, cloudStorageFileName, insertOrRemoveClasswork, status)
                        }
                    }}>
                         {/* Deletar  */}
                        <MdDelete size={25}/>
                    </button>
                </div>
            </Button>
        </li>
        )
}

export default ClassWorkListItem