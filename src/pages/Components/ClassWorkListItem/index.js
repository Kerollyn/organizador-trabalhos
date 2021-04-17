import { Button } from './styles'

const ClassWorkListItem = ( { title, subject, professor } ) => {
return ( 
    <li className='row-center'>
        <Button>
            <div className="titulo">{title}</div>
            <div className="disciplina">{subject}</div>
            <div className="nomeProfessor">{professor}</div>
            <div className="buttons">
                <button>Visualizar</button>
                <button>Editar</button>
                <button>Deletar</button>
            </div>
        </Button>
    </li>
    )
}

export default ClassWorkListItem