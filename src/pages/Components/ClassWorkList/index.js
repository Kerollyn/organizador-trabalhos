import ClassWorkListItem from '../ClassWorkListItem'

const buildWorkLists = ( classWorkLists, classWorkStatus ) => {
    const list = Object.keys( classWorkLists ).find( ( item ) => item === classWorkStatus )
    return classWorkLists[list]?.map( ( classWork, index ) => {
        return <ClassWorkListItem
                title={classWork.title}
                subject={classWork.subject}
                professor={classWork.professorName}
                fileName={classWork.fileName}
                key={ `ongoing-${ index }` }
            />
    } )
}

const ClassWorkList = ( { ongoingList = [], doneList = [] } ) => {
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
                { buildWorkLists( classWorkLists, 'ongoingList' ) }
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
                { buildWorkLists( classWorkLists, 'doneList' ) }
            </ul>
        </>
    )
}

export default ClassWorkList