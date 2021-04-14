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
<<<<<<< HEAD
    background-color: #9e1a2a;
=======
    background-color: #668cff;
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
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
<<<<<<< HEAD
            background-color: #821623;
=======
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
            padding: 8px 12px;
            margin-top: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
<<<<<<< HEAD
            font-size: 14px;
            color: #fff;
=======
            font-size: 11px;
            color: #333;
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
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
<<<<<<< HEAD
    border-radius: 4px;
    margin-top: 5px;
    font-size: 16px;
    padding: 8px 0 5px 0;
    width: 100%;
    display: flex;   
=======
    border-radius: 6px;
    margin-top: 2px;
    font-size: 16px;
    padding: 19px 0 8px 0;
    width: 100%;
    height: 20px;

    
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
`