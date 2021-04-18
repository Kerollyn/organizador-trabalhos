import { React, useState } from "react";

import { Link } from "react-router-dom";

<<<<<<< HEAD
import { Container, Aside, BlockInput, Input } from './styles';
=======
import { Container, Aside, BlockInput, Input, Button } from './styles';
>>>>>>> 3f8cc2555befcf24ffa55c7194bf8c4c586e398e
import { useHistory } from "react-router-dom";
import axios from 'axios';

import constants from '../../shared/constants'

const { TOKEN_STORAGE_KEY, BEARER_TOKEN_PREFIX } = constants

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
                const bearerToken = `${ BEARER_TOKEN_PREFIX } ${ token }`
                localStorage.setItem( TOKEN_STORAGE_KEY, bearerToken )
                history.push("/home");
            })
            .catch(error => {
                alert("Usuário ou senha errado!")
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
                        <Input name='user' type='text' value={email} onChange={e => setMail(e.target.value)} />
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </BlockInput>
                    <br />

                    <br />
<<<<<<< HEAD
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                    <Link to="/register">
                        <button type='button'>Cadastro</button>
                    </Link>
=======
                    <Button>
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                    <Link to="/register">
                        <button type='button'>Cadastrar</button>
                    </Link>
                    </Button>
>>>>>>> 3f8cc2555befcf24ffa55c7194bf8c4c586e398e
                </form>
            </Aside>
        </Container>
    );

}