import styled from 'styled-components'


export const Container = styled.section`

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
                    width: 90px;
                    margin-left: 10px;
                }
            }
        }        
    }
`

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
    }

`

