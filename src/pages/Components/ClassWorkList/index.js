import ClassWorkListItem from '../ClassWorkListItem'
import Classwork from '../../../models/Classwork'

const buildWorkLists = ( classWorkLists, classWorkStatus, insertOrRemoveClasswork ) => {
    const list = Object.keys( classWorkLists ).find( ( item ) => item === classWorkStatus )
    return classWorkLists[list]?.map( ( classWork, index ) => {
        return <ClassWorkListItem
                classwork={new Classwork(classWork)}
                key={ `ongoing-${ index }` }
                insertOrRemoveClasswork={insertOrRemoveClasswork}
            />
    } )
}

const ClassWorkList = ( { ongoingList = [], doneList = [], insertOrRemoveClasswork } ) => {
    const classWorkLists = { ongoingList, doneList }
    console.log( 'LIST >>>>>>>>>>>>>>>>>> ', classWorkLists )

    return (
        <>
            <h1>Em andamento</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    {/* <div className="nomeProfessor">Arquivo</div> */}
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'ongoingList', insertOrRemoveClasswork ) }
            </ul>

            <br/><br/>
            <h1>Concluídos</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    {/* <div className="nomeProfessor">Arquivo</div> */}
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'doneList', insertOrRemoveClasswork ) }
            </ul>
        </>
    )
}

export default ClassWorkList