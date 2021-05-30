import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div.modal-fundo {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100vw;
        height: 100vh;
        background-color: #333;
        opacity: 0.5;
    }
`

export const ModalTeste = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
     overflow-x: hidden; 
    /* overflow-y: auto; */
    outline: 0;
    display: flex;
    flex-direction: column;

    div.modal {
        display: flex;
        flex-direction: column;

        z-index: 1200;
        /* background: #ffff; */
        position: relative;
        margin: 2rem auto;

        min-width: 410px;
        width: 400px;
        height: 470px;
        padding: 15px;

        justify-content: center
        align-items: center
    }
`

export const ModalConteudo = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: column;
        li {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 15px;

            button {
                margin-top: 5px;
                margin-left: 240px;
                background-color: #9e1a2a;
                color: #fff;
                padding: 6px 12px;
                font-weight: 400;
                font-size: 12px;
                border: 1px solid #ccc;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
`

export const BlockInput = styled.div`
    & + & {
        margin-top: 6px;
    }

    label {
        font-size: 14px;
    }
`

export const Input = styled.input`
    color: #000;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    display: flex;
    height: 23px;
    width: 300px;   
`
export const Select = styled.select`
    color: #000;
    border: 1px solid #9e9e9e;
    border-radius: 4px;
    display: flex;
    height: 23px;
    width: 300px;   
`
