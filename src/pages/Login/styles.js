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
    border-radius: 6px;
    background-color: #668cff;
    width: 360px;
    height: 400px;
    display: flex;
    justify-content: center;
    form {
        margin-top: 55px;
        display: flex;
        flex-direction: column;
        width: 250px;

        strong {
            margin-bottom: 20px;
            color: #fff;
        }
        button {
            padding: 5px 50px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            color: #333;
            border: 1px solid #ccc;
            border-radius: 10px;
            cursor: pointer;            
        
        }
    }
`

export const BlockInput = styled.div`
    & + & {
        margin-top: 6px;
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

`