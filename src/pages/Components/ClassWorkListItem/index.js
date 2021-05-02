import { Button } from './styles'
import { getAccessToken } from '../../../shared/tokenUtils'
import axios from 'axios'

const deleteFile = async( id, cloudStorageFileName, fetchClassWorks) => {
    const url = `https://heroku-org-trabalhos-api.herokuapp.com/classworks/${ id }?cloudStorageFileName=${ cloudStorageFileName }`;
    console.log("URL Deleção: "+url);
    const token = getAccessToken()
    const options = {
        headers: {
            Authorization: token
        }
    }
    try {
        await axios.delete( url, options )
        fetchClassWorks()
    } catch( err ) {
        console.error( err.stack )
        alert('Ocorreu um erro ao tentar deletar o arquivo.\n'+err.stack)
    }
}
const ClassWorkListItem = ( { id, title, subject, professor, fetchClassWorks, cloudStorageFileName } ) => {

return ( 
    <li className='row-center'>
        <Button>
            <div className="titulo">{title}</div>
            <div className="disciplina">{subject}</div>
            <div className="nomeProfessor">{professor}</div>
            <div className="buttons">
                <button>Visualizar</button>
                <button>Detalhes</button>
                <button>Editar</button>
                <button onClick={()=> { if(window.confirm('Deseja deletar este arquivo?')) deleteFile(id, cloudStorageFileName, fetchClassWorks)}}>Deletar </button>
            </div>
        </Button>
    </li>
    )
}

export default ClassWorkListItem