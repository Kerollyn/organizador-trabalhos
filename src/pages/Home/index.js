import axios from 'axios'
import React, { useState, useEffect} from 'react';

import { useHistory } from "react-router-dom";

import { MdExitToApp} from 'react-icons/md'
import { Main, Container, Top, Section } from './styles'
import Logo from '../../assets/LogoV2.png'


import ModalUpload from '../Components/ModalUpload'
import useModal from '../Components/ModalUpload/useModal'
import ClassWorkList from '../Components/ClassWorkList'

import constants from '../../shared/constants'
import { getAccessToken, setAccessToken, getUser } from '../../shared/tokenUtils'

const { API_BASE_URL } = constants

const _handleClassworkListChange = ( method, classworkList, targetClasswork, setClassworkList, altClassList, setAltList ) => {
    switch (method) {
        case 'insert':
            classworkList.push( targetClasswork )
            break
        case 'remove':
            classworkList = classworkList.filter( element => element.id !== targetClasswork.id )
            break
        case 'update':
            const hasMovedFromList = altClassList.find( listItem => targetClasswork.id === listItem.id )
            if ( hasMovedFromList ) {
                classworkList.push( targetClasswork )
                setAltList( altClassList.filter( listItem => targetClasswork.id !== listItem.id ) )
            } else {
                const itemIndex = classworkList.findIndex( listItem => listItem.id === targetClasswork.id )
                classworkList.splice( itemIndex, 1, targetClasswork )
                classworkList = Array.from( classworkList.filter( listItem => targetClasswork.id !== listItem.id ).push( targetClasswork ) )
            }
            break
        default:
            console.log('No action taken for this method.')
            break
    }
    return setClassworkList( classworkList )
}

const _insertOrRemoveClasswork = ( { classWorkOngoingList, classWorkDoneList, setClassWorkOngoingList, setClassWorkDoneList }, { targetClasswork, list, method } ) => {
    // Values for list are 'ongoing' or 'done'
    // Values for method are 'insert' or 'remove'
    const validMethods = [ 'insert', 'remove', 'update' ]
    if ( !validMethods.includes( method ) ) {
        throw new Error( 'A valid method must be informed.' )
    }
    
    switch (list) {
        case 'ongoing':
            return _handleClassworkListChange( method, classWorkOngoingList, targetClasswork, setClassWorkOngoingList, classWorkDoneList, setClassWorkDoneList )
        case 'done':
            return _handleClassworkListChange( method, classWorkDoneList, targetClasswork, setClassWorkDoneList, classWorkOngoingList, setClassWorkOngoingList )
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
            const fetchedDoneListLastItem = classWorks.done[classWorks.done.length - 1]
            if( !classWorkOngoingList.length && classWorkOngoingListLastItem?.id !== fetchedOngoingListLastItem?.id ) {
                setClassWorkOngoingList( classWorks.ongoing )
            }
            if( !classWorkDoneList.length && classWorkDoneListLastItem?.id !== fetchedDoneListLastItem?.id) {
                setClassWorkDoneList( classWorks.done )
            }
        } ).catch( ( error ) => {
            console.error( error )
        } )
}

function logout(history){
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
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className='usuario' >
                        <label>{getUser().name.toUpperCase()}</label>
                        <button onClick={e=>{logout(history)}}>
                            <MdExitToApp size={16} /> 
                        </button>
                        
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
                            <ModalUpload isShowing={isShowing} hide={toggle}
                                insertOrRemoveClasswork={insertOrRemoveClasswork}
                            />
                        </div>
                    </form>

                    <ClassWorkList
                        ongoingList={classWorkOngoingList}
                        doneList={classWorkDoneList}
                        insertOrRemoveClasswork={insertOrRemoveClasswork}
                    />
                </Section>
            </Container>
        </Main>
    )
}
