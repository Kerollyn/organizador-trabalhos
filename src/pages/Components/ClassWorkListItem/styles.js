import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    height: 60px;
    width: 100%;
    background-color: #fff;

    li.row-center {
        cursor: pointer;
        align-items: center;
        margin-top: 1px;
        &.selected {
            color: #fff;
        }
    }

    &.selected {
        background-color: #b97415;
        color: #fff;
    }
`

