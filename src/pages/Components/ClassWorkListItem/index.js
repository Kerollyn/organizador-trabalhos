import { getAccessToken } from '../../../shared/tokenUtils'
import { getViewFormattedDate } from '../../../shared/dateUtils'
import axios from 'axios'

import ModalUpdate from '../ModalUpdate';
import useModalEdit from '../ModalEdit/useModal';
import ModalDetail from '../ModalDetail';
import useModalDetail from '../ModalDetail/useModal';

import { Button, DateDiv } from './styles'
//Icones dos botões
import { MdDelete, MdModeEdit, MdRemoveRedEye, MdDescription } from "react-icons/md";

const deleteFile = async( id, cloudStorageFileName, insertOrRemoveClasswork, status) => {
    const url = `https://heroku-org-trabalhos-api.herokuapp.com/classworks/${ id }?cloudStorageFileName=${ cloudStorageFileName }`;
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

function ClassWorkListItem ( { classwork, insertOrRemoveClasswork } ){
    const { isShowingEdit, toggleEdit } = useModalEdit()
    const { isShowingDetail, toggleDetail} = useModalDetail()

    const { id, status, title, subject, professorName, cloudStorageFileName } = classwork

    return ( 
        <li className='row-center'>
            <Button>
                <div className="titulo">{title}</div>
                <div className="disciplina">{subject}</div>
                <div className="nomeProfessor">{professorName}</div>
                <DateDiv deadline={ classwork.deadline } status={ classwork.status }>{getViewFormattedDate( classwork.deadline )}</DateDiv>
                <div className="buttons">
                    <a href={ `${ classwork.url }` } target="blank" download>
                        <button>
                            <MdDescription size={25}/>
                        </button>
                    </a>

                    <button onClick={toggleDetail}>
                        <MdRemoveRedEye size={25}/>
                    </button>
                    <ModalDetail
                        isShowing={isShowingDetail}
                        hide={toggleDetail}
                        classwork={classwork}
                    />

                    <button type="button" onClick={toggleEdit}>
                        <MdModeEdit size={25}/>
                    </button>
                    <ModalUpdate
                        hide={toggleEdit}
                        insertOrRemoveClasswork={insertOrRemoveClasswork}
                        isShowing={isShowingEdit}
                        classwork={classwork}
                    />

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