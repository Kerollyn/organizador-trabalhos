import ClassWorkListItem from '../ClassWorkListItem'

const ClassWorkList = ( { title, subject, professor } ) => {
return ( <ul>
    <li className='header-center'>
        <div className="titulo">Titulo do trabalho</div>
        <div className="disciplina">Disciplina</div>
        <div className="nomeProfessor">Nome do professor</div>
    </li>
    <ClassWorkListItem title={'Recuperação de falhas'} subject={'Práticas de banco de dados'} professor={'Javinho'}/>
</ul> )
}

export default ClassWorkList