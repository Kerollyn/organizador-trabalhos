import { React, useState } from "react";

import { Container, Aside, BlockInput, Input } from './styles';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Login() {

    const [userName, setUser] = useState([]);
    const [password, setPassword] = useState([]);
    let history = useHistory();

    function handleSubmit() {

        axios.post('https://heroku-org-trabalhos-api.herokuapp.com/auth/token', {
            userName,
            password
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
                history.push("/home");
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container>
            <Aside>
                <form>
                    <strong>ACESSO AO SISTEMA</strong>

                    <BlockInput>
                        <label>E-mail</label>
                        <Input name='user' type='text' value={userName} onChange={e => setUser(e.target.value)} />
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </BlockInput>
                    <br />

                    <br />
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                    {/* <button type='button'>Cadastrar</button> */}

                </form>
            </Aside>
        </Container>
    );

}