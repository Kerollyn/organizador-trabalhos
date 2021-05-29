import { getDaysUntilDeadline } from '../../../shared/dateUtils'
import styled from 'styled-components'

const getColor = ( daysToDeadline ) => {
    const colors = [
        { color: 'black', test: daysToDeadline > 1 },
        { color: 'orange', test: daysToDeadline === 1 },
        { color: 'red', test: daysToDeadline < 1 }
    ]
    return colors.find( element => element.test ).color
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    height: 50px;
    width: 100%;
    background-color: #fff;

    li.row-center {
        cursor: pointer;
        align-items: center;
        margin-top: 1px;
    }
`

export const DateDiv = styled.div`
    color: ${ props => {
        return props.status === 'ongoing'
        ? getColor( getDaysUntilDeadline( props.deadline ) )
        : 'black'
    } }
`