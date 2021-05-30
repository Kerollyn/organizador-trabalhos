import React from 'react'
import ReactDOM from 'react-dom'
import Loader from 'react-loader-spinner'

import { Container, ModalTeste } from './styles'

const ModalLoader = ({ isShowing }) => {
    return isShowing
        ? ReactDOM.createPortal(
                <Container>
                    <div className='modal-fundo' />
                    <ModalTeste>
                        {/* <div className='modal'> */}
                            <Loader
                                type="Watch"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={10000000000}
                                visible={isShowing}
                            />
                        {/* </div>  */}
                    </ModalTeste>
                </Container>,
                document.body
            )
        : null
}
export default ModalLoader
