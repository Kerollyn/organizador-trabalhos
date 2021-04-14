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
<<<<<<< HEAD
    background-color: #9e1a2a;
    width: 360px;
    height: 350px;
=======
    background-color: #668cff;
    width: 360px;
    height: 400px;
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
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
<<<<<<< HEAD
        // button {
        //     padding: 5px 50px;
        //     margin-top: 10px;
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     font-size: 13px;
        //     color: #333;
        //     border: 1px solid #ccc;
        //     border-radius: 10px;
        //     cursor: pointer;
        // }
=======
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
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
    }
`

export const BlockInput = styled.div`
    & + & {
        margin-top: 6px;
    }

    label {
        font-size: 16px;
        color: #eee;
<<<<<<< HEAD
=======

>>>>>>> bce814663b61f145f70baa478a778a8421c82776
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
<<<<<<< HEAD
    display: flex;
`

export const Button = styled.div `
    display: flex;
    justify-content: flex-end;

    button{
        background-color: #821623;
        color: #fff;
        height: 35px;
        width: 100px;
        border-radius: 4px;
        margin-top: 25px;
        margin-left: 10px;
    }
=======
>>>>>>> bce814663b61f145f70baa478a778a8421c82776

`