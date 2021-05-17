import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
`;

export const Aside = styled.aside`
    border: 2px solid #000;
    border-radius: 5px;
    background-color: #9e1a2a;
    width: 360px;
    height: 550px;

    display: flex;
    justify-content: center;
    form {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        width: 250px;

        strong {
            margin-bottom: 30px;
            color: #fff;
            font-size: 18px;
            text-align: center;
        }
    }
`

export const BlockInput = styled.div`
    & + & {
        margin-top: 15px;
    }

    label {
        font-size: 16px;
        color: #eee;
    }
`

export const Input = styled.input`
    color: #000;
    border: 2px solid #9e9e9e;
    border-radius: 4px;
    margin-top: 5px;
    font-size: 16px;
    padding: 8px 0 5px 0;
    width: 100%;
    display: flex;   
`

export const Button = styled.div `
    margin-top: 50px;
    display: flex;
    justify-content: center;

    button{
        background-color: #821623;
        color: #fff;
        height: 35px;
        width: 100px;
        border-radius: 4px;
        margin-left: 5px;
    }  

`