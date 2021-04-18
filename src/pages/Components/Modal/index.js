import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { MdFileUpload } from 'react-icons/md'

import { Container, ModalTeste, ModalConteudo, BlockInput, Input } from './styles'

const fileUpload = ( file ) => {
    const formData = new FormData()
    formData.append('file', file, file.name)
    axios.post(
        'https://heroku-org-trabalhos-api.herokuapp.com/classworks',
        formData,
        {
            headers:
                {Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUzMGI5NjQwLTkyOTItMTFlYi1hZTdjLWVmMjBjMTgxZmIwMSIsInVzZXJOYW1lIjoiamF2aSIsImlhdCI6MTYxNzcxOTIzNH0.sOnNN7Uj2omHqy6eEVJ0IX0_934KNrFp_Izf_hghCxLQqCcfZfnjbCAp1z5SgOjGmA1ARTyMhxFPKqhhy0mKu0_L2cQEv3MDDCczVt7mhPXFDqgV31KaBjb13oh9Y5Ah5glGVe3UADMfz_hB8EBNT7GUeYwiwFPDpHFLOG-qSGHCwRANrgVZngHe_BM6Z67-a8Sx4zfqBulX8fVlHkphhxZrp4v07gPcCFqgOfqGJw0Cvxinv6miKmKGQGV7jPEQf1i9IAb4eU1qWktGy1Vj6KLIdhsOikAlbHJXS-C_cbfLfTjnlwOxrgvopSviomM5NH63XmrdMFSqigCgP-4PCFToxacb4B49wVAvKnai5O6Nj8WIafnENQnVh8ko8ec_ULIgFX9l8PiLkXIDcqHoe0qHhVsNGKrpXC-dY9kviC-L5bF2FWXsFltzUBpOCwyoro-4uUHEXNkCTks_qpNrTMPJ8_7BHQxRmaEjiX-u6z6vYvF5-14vEMDjd0p8a0Nym7_ToFf137b9wHp22NnammTl16LOaG4udnhdb6c7hAsY2Mmnuk97Jowt9nHPeTSRUYd8uovRxCAPZPGW93A46VmDMoHxcKyzHbvvW6vOge1MrX07KoDPhXVV36FLvbcFom_xTmVDthwHQGCP73nc2hjcdrGxUumCkHEuhvRPqGk'}
        }
    )
}

const Modal = ({ isShowing, hide, file, setFile }) =>
    isShowing
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
                                        <MdFileUpload size={50}/>
                                    </li>
                                    <li>
                                        <input type="file" onChange={e => setFile(e.target.files[0])}/>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Titulo do trabalho</label>
                                            <Input/>
                                       </BlockInput>
                                       
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Disciplina</label>
                                            <Input/>
                                        </BlockInput>
                                    </li>
                                    <li>
                                        <BlockInput>
                                            <label>Nome do professor</label>
                                            <Input/>
                                        </BlockInput>
                                        
                                    </li>
                                    <li>
                                        <button type="submit" onClick={e => fileUpload(file)}>Upload</button>
                                    </li>
                              </ul>
                          </ModalConteudo>
                      </div>
                  </ModalTeste>
              </Container>,
              document.body
          )
        : null

export default Modal
