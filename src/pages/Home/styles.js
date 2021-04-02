import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header{
    height: 30px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
  
    div.titulo{
      display: flex;
      align-items: center;
      margin-left: 5px;
    }

    div.usuario{
      display: flex;
      align-items: center;
      margin-right: 5px;
      
      label{
        margin-right: 5px;
        font-size: 10px;
      }
    }
  }
`;

export const Top = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  div{
    font-family: 'Roboto';
    width: 100%;
  }
`;

export const Section = styled.section `
  margin: 50px;
  background-color: #ededed;
  ul{
    display: flex;
    flex-direction: column;
    background-color: green;
    li.header-center {
        display: flex;
        flex-direction: row;
        height: 30px;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        border: none;
    }

    li.row-center {
      align-items: center;
      margin-top: 1px;
    }

    li{
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      div{
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        
      }
    }
  }

`