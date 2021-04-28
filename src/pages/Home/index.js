import axios from 'axios'
import React, { useState, useEffect} from 'react';
import { MdExitToApp} from 'react-icons/md'

import { Main, Container, Top, Section } from './styles'

import Modal from '../Components/Modal'
// import ModalV2 from '../Components/ModalV2'
import useModal from '../Components/Modal/useModal'
import ClassWorkList from '../Components/ClassWorkList'

import constants from '../../shared/constants'
import { getAccessToken } from '../../shared/tokenUtils'
import { Link } from 'react-router-dom';

const { API_BASE_URL } = constants

const fetchClassWorkList = ( setOngoingList, setDoneList ) => {
    axios.get( `${ API_BASE_URL }/classworks`, { headers: { Authorization: getAccessToken() } } )
        .then( response => {
            const classWorks = response.data
            setOngoingList( classWorks.ongoing )
            setDoneList( classWorks.finished )
        } ).catch( ( error ) => {
            console.error( error )
        } )
}

export default function Home() {
    const { isShowing, toggle } = useModal()
    const [file, setFile] = useState([])
    const [classWorkOngoingList, setClassWorkOngoingList] = useState([])
    const [classWorkDoneList, setClassWorkDoneList] = useState([])

    useEffect( () => {
        if ( !classWorkOngoingList.length && !classWorkDoneList.length ) {
            fetchClassWorkList( setClassWorkOngoingList, setClassWorkDoneList )
        }
    }, [classWorkOngoingList, classWorkDoneList] )

    return (
        <Main>
            <Container>
                <header>
                    <div className='titulo'>
                        <label>Gerenciamento de trabalhos academicos</label>
                    </div>
                    <div className='usuario'>
                        <label>TESTE</label>
                        <Link to="/">
                            <MdExitToApp size={16} />
                        </Link>
                        
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
                                file={file}
                                setFile={setFile}
                                fetchClassWorks={() => fetchClassWorkList(setClassWorkOngoingList, setClassWorkDoneList)}
                            />
                        </div>
                    </form>

                    <ClassWorkList ongoingList={classWorkOngoingList}/>
                </Section>
            </Container>
        </Main>
    )
}
