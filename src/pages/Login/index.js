import React from "react";


import { Container, Aside, BlockInput, Input } from './styles';

export default function Login() {
  
    function handleSubmit(){
        
    }

    return (
        <Container>
            <Aside>
                    <form>
                        <strong>ACESSO AO SISTEMA</strong>

                        <BlockInput>
                            <label>E-mail</label>
                            <Input name='usuario' type='text' />
                        </BlockInput>
                        <BlockInput>
                            <label>Senha</label>
                            <Input name='senha' type='password' />
                        </BlockInput>
                        <br />

                        <br />
                                <button type='button'>Entrar</button>
                                {/* <button type='button'>Cadastrar</button> */}                       
                      
                       
                    </form>
                </Aside>
        </Container>
        );
    
}
