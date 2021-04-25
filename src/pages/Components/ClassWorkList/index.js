import ClassWorkListItem from '../ClassWorkListItem'

const buildWorkLists = ( classWorkLists, classWorkStatus, fetchClassWorks ) => {
    const list = Object.keys( classWorkLists ).find( ( item ) => item === classWorkStatus )
    return classWorkLists[list]?.map( ( classWork, index ) => {
        return <ClassWorkListItem
                title={classWork.title}
                subject={classWork.subject}
                professor={classWork.professorName}
                fileName={classWork.fileName}
                id={classWork.id}
                key={ `ongoing-${ index }` }
                fetchClassWorks={fetchClassWorks}
            />
    } )
}

const ClassWorkList = ( { ongoingList = [], doneList = [],fetchClassWorks } ) => {
    const classWorkLists = { ongoingList, doneList }

    return (
        <>
            <h1>Em andamento</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    <div className="nomeProfessor">Arquivo</div>
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'ongoingList' ,fetchClassWorks) }
            </ul>
            <h1>Concluídos</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    <div className="nomeProfessor">Arquivo</div>
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'doneList',fetchClassWorks ) }
            </ul>
        </>
    )
}

export default ClassWorkList