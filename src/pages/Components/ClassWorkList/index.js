import ClassWorkListItem from '../ClassWorkListItem'
import Classwork from '../../../models/Classwork'

const buildWorkLists = ( classWorkLists, classWorkStatus, insertOrRemoveClasswork, setIsShowingLoader ) => {
    const list = Object.keys( classWorkLists ).find( ( item ) => item === classWorkStatus )
    return classWorkLists[list]?.map( ( classWork, index ) => {
        return <ClassWorkListItem
                classwork={new Classwork(classWork)}
                key={ `${ list }-${ index }` }
                insertOrRemoveClasswork={insertOrRemoveClasswork}
                setIsShowingLoader={setIsShowingLoader}
            />
    } )
}

const ClassWorkList = ( { ongoingList = [], doneList = [], insertOrRemoveClasswork, setIsShowingLoader } ) => {
    const classWorkLists = { ongoingList, doneList }

    return (
        <>
            <h1>Em andamento</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    <div className="nomeProfessor">Data de entrega</div>
                    <div/>
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'ongoingList', insertOrRemoveClasswork, setIsShowingLoader ) }
            </ul>

            <br/><br/>
            <h1>Concluídos</h1>
            <ul>
                <li className='header-center'>
                    <div className="titulo">Titulo do trabalho</div>
                    <div className="disciplina">Disciplina</div>
                    <div className="nomeProfessor">Nome do professor</div>
                    <div className="nomeProfessor">Data de entrega</div>
                    <div/>
                </li>
                {/* inform the desired list ( ongoingList | doneList ) as specified at classWorkLists*/}
                { buildWorkLists( classWorkLists, 'doneList', insertOrRemoveClasswork, setIsShowingLoader ) }
            </ul>
        </>
    )
}

export default ClassWorkList