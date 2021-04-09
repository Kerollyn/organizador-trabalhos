import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div.modal-fundo {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1040;
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
    overflow-y: auto;
    outline: 0;
    display: flex;
    div.modal {
        display: flex;
        flex-direction: column;

        z-index: 100;
        background: #ffff;
        position: relative;
        margin: 6.95rem auto;

        min-width: 500px;
        width: 500px;
        height: 200px;
        padding: 15px;

        border-radius: 5px;
        box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
        div.modal-button {
            display: flex;
            justify-content: flex-end;

            button {
                background-color: #fff;
                color: #6d6d6d;
                border: none;
            }
        }
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
