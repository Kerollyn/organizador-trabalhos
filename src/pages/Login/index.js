import { React, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Aside, BlockInput, Input, Button } from './styles';
import Logo from '../../asserts/Logo.png';


import { useHistory } from "react-router-dom";
import axios from 'axios';

import { setAccessToken } from '../../shared/tokenUtils'

export default function Login() {

    const [email, setMail] = useState([]);
    const [password, setPassword] = useState([]);
    let history = useHistory();

    function handleSubmit() {

        axios.post('https://heroku-org-trabalhos-api.herokuapp.com/auth/token', {
            email,
            password
        })
            .then(res => {
                const { token } = res.data || {}
                setAccessToken( token )
                history.replace("/home");
            })
            .catch(error => {
                alert("Usuário ou senha errado!")
                console.error(error)
            })
    }

    return (
        <Container>
            <img src={Logo} alt="logo"/>
            <Aside>
                <form>
                    <strong>ACESSO AO SISTEMA</strong>

                    <BlockInput>
                        <label>E-mail</label>
                        <Input name='user' type='text' value={email} onChange={e => setMail(e.target.value)} />
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </BlockInput>
    
                    <Button>
                        <button type='button' onClick={handleSubmit}>Entrar</button>
                        <Link to="/register">
                            <button type='button'>Cadastrar</button>
                        </Link>
                    </Button>

                </form>
            </Aside>
        </Container>
    );

}