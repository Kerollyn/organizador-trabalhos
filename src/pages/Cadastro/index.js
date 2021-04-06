import { React, useState } from "react";

import { Container, Aside, BlockInput, Input } from './styles';

export default function SingUp () {
    
    return (
        <Container>
            <Aside>
                <form>
                    <strong>Cadastro ao sistema</strong>

                    <BlockInput>
                        <label>Nome</label>
                        <Input type='text'/>
                    </BlockInput>
                    <BlockInput>
                        <label>E-mail</label>
                        <Input type='text'/>
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input type='password' />
                    </BlockInput>
                    <BlockInput>
                        <label>Repita a senha</label>
                        <Input type='password'/>
                    </BlockInput>
                    <br />

                    <br />
                    <button type='button'>Cadastrar</button>

                </form>
            </Aside>
        </Container>
    );

}