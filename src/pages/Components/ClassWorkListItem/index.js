import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'

import ModalUpload from '../ModalUpload';
import useModalEdit from '../ModalEdit/useModal';
import ModalDetail from '../ModalDetail';
import useModalDetail from '../ModalDetail/useModal';

import { Button } from './styles'
//Icones dos botões
import { MdDelete, MdModeEdit, MdFileDownload, MdDescription } from "react-icons/md";
//import { useState } from 'react';

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
                <div className="buttons">
                    <button>
                        <MdFileDownload size={25}/>
                    </button>
                    
                    <button onClick={toggleDetail}>
                        <MdDescription size={25}/>
                    </button>
                    <ModalDetail
                        isShowing={isShowingDetail}
                        hide={toggleDetail}
                        classwork={classwork}
                    />

                    <button type="button" onClick={toggleEdit}>
                        <MdModeEdit size={25}/>
                    </button>
                    <ModalUpload
                        isShowing={isShowingEdit}
                        hide={toggleEdit}
                        classwork={classwork}
                        insertOrRemoveClasswork={insertOrRemoveClasswork}
                        createNew={false}
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