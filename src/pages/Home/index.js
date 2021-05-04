import axios from 'axios'
import React, { useState, useEffect} from 'react';
import { MdExitToApp} from 'react-icons/md'
import { useHistory } from "react-router-dom";

import { Main, Container, Top, Section } from './styles'

import Modal from '../Components/Modal'
// import ModalV2 from '../Components/ModalV2'
import useModal from '../Components/Modal/useModal'
import ClassWorkList from '../Components/ClassWorkList'

import constants from '../../shared/constants'
import { getAccessToken, setAccessToken } from '../../shared/tokenUtils'
//import { Link } from 'react-router-dom';

const { API_BASE_URL } = constants

const _handleClassworkListChange = ( method, classworkList, targetClasswork, setClassworkList ) => {
    if( method === 'insert' ){
        classworkList.push( targetClasswork )
    } else if ( method === 'remove' ) {
        classworkList = classworkList.filter( element => element.id !== targetClasswork.id )
    }
    return setClassworkList( classworkList )
}

const _insertOrRemoveClasswork = ( { classWorkOngoingList, classWorkDoneList, setClassWorkOngoingList, setClassWorkDoneList }, { targetClasswork, list, method } ) => {
    // Values for list are 'ongoing' or 'done'
    // Values for method are 'insert' or 'remove'
    if ( method !== 'insert' && method !== 'remove' ) {
        throw new Error( 'A valid method must be informed.' )
    }
    switch (list) {
        case 'ongoing':
            return _handleClassworkListChange( method, classWorkOngoingList, targetClasswork, setClassWorkOngoingList )
        case 'done':
            return _handleClassworkListChange( method, classWorkDoneList, targetClasswork, setClassWorkDoneList )
        default:
        throw new Error( 'A valid list must be informed.' )
    }
}

const fetchClassWorkList = ( classWorkOngoingList, classWorkDoneList, setClassWorkOngoingList, setClassWorkDoneList ) => {
        return axios.get( `${ API_BASE_URL }/classworks`, { headers: { Authorization: getAccessToken() } } )
        .then( response => {
            const classWorks = response.data
            const classWorkOngoingListLastItem = classWorkOngoingList[classWorkOngoingList.length - 1]
            const fetchedOngoingListLastItem = classWorks.ongoing[classWorks.ongoing.length - 1]
            const classWorkDoneListLastItem = classWorkDoneList[classWorkDoneList.length - 1]
            const fetchedDoneListLastItem = classWorks.finished[classWorks.finished.length - 1]
            if( !classWorkOngoingList.length && classWorkOngoingListLastItem?.id !== fetchedOngoingListLastItem?.id ) {
                setClassWorkOngoingList( classWorks.ongoing )
            }
            if( !classWorkDoneList.length && classWorkDoneListLastItem?.id !== fetchedDoneListLastItem?.id) {
                setClassWorkDoneList( classWorks.finished )
            }
        } ).catch( ( error ) => {
            console.error( error )
        } )
}

function logout(history){
    //console.log("logout function!")
    setAccessToken(null);
    localStorage.clear();
    history.replace("/");
}

export default function Home() {
    const { isShowing, toggle } = useModal()
    const [classWorkOngoingList, setClassWorkOngoingList] = useState([])
    const [classWorkDoneList, setClassWorkDoneList] = useState([])

    const history = useHistory();

    useEffect( () => {
        fetchClassWorkList( classWorkOngoingList, classWorkDoneList, setClassWorkOngoingList, setClassWorkDoneList )
    }, [classWorkOngoingList, classWorkDoneList] )
    

    const insertOrRemoveClasswork = _insertOrRemoveClasswork.bind( null, { classWorkOngoingList, classWorkDoneList, setClassWorkOngoingList, setClassWorkDoneList } )
    return (
        <Main>
            <Container>
                <header>
                    <div className='titulo'>
                        <label>Gerenciamento de trabalhos academicos</label>
                    </div>
                    <div className='usuario' onClick={e=>{logout(history)}}>
                        <label>SAIR</label>
                        <MdExitToApp size={16} /> 
                    </div>
                </header>

                <Top>
                    <div />
                </Top>

                <Section>
                    <form>
                        <div className='button'>
                            <button type='button' onClick={toggle}>
                                Upload
                            </button>
                            <Modal
                                isShowing={isShowing}
                                hide={toggle}
                                insertOrRemoveClasswork={insertOrRemoveClasswork}
                            />
                        </div>
                    </form>

                    <ClassWorkList
                        ongoingList={classWorkOngoingList}
                        insertOrRemoveClasswork={insertOrRemoveClasswork}
                    />
                </Section>
            </Container>
        </Main>
    )
}
