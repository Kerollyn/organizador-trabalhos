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
    background-color: #668cff;
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
        button {
            padding: 8px 12px;
            margin-top: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            color: #333;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;            
        
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
    border-radius: 6px;
    margin-top: 2px;
    font-size: 16px;
    padding: 19px 0 8px 0;
    width: 100%;
    height: 20px;

    
`