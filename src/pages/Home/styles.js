import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    header {
        height: 30px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;

        div.titulo {
            display: flex;
            align-items: center;
            margin-left: 5px;
        }

        div.usuario {
            display: flex;
            align-items: center;
            margin-right: 5px;

            label {
                margin-right: 5px;
                font-size: 10px;
            }
            button{
                border: none;
                background-color: #fff;
            }
        }
    }
`

export const Top = styled.div`
    background-color: #9e1a2a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    div {
        font-family: 'Roboto';
        width: 100%;
    }
`

export const Section = styled.section`
    padding: 20px;
    height: 87vh;
    background-color: #ededed;

    form {
        height: 60px;
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        font-weight: 700;
        color: #333;
        div {
            margin-bottom: 20px;
            width: 100%;

            button {
                height: 29px;
                width: 91px;                 
                cursor: pointer;
                font-size: 11px;
                color: #fff;
                background-color: #9e1a2a;
                background-color: #9e1a2a;
                border-radius: 4px;              
            }
        }
    }
//Conteudo
    ul {
        display: flex;
        flex-direction: column;

        li.header-center {
            display: flex;
            flex-direction: row;
            height: 30px;
            align-items: center;
            font-size: 12px;
            font-weight: 700;
            border: none;
        }        
        li {
            display: flex;
            flex-direction: row;
            border: 1px solid #ccc;
            div {
                height: 40px;
                width: 25%;
                display: flex;
                align-items: center;
                padding: 0 10px;
            }
            div.buttons{
                display: flex;
                justify-content: flex-end;
                button{
                    background-color: #9e1a2a;
                    color: #fff;
                    border-radius: 4px;
                    height: 30px;
                    width: 50px;
                    margin-left: 10px;
                }
            }
        }        
    }
`
