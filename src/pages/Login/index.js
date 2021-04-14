import { React, useState } from "react";

import { Link } from "react-router-dom";

<<<<<<< HEAD
import { Container, Aside, BlockInput, Input, Button } from './styles';
=======
import { Container, Aside, BlockInput, Input } from './styles';
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
import { useHistory } from "react-router-dom";
import axios from 'axios';

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
                console.log(res)
                console.log(res.data)
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
                    <Button>
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                    <Link to="/register">
                        <button type='button'>Cadastrar</button>
                    </Link>
                    </Button>
=======
                    <button type='button' onClick={handleSubmit}>Entrar</button>
                    <Link to="/register">
                        <button type='button'>Cadastro</button>
                    </Link>
>>>>>>> bce814663b61f145f70baa478a778a8421c82776
                </form>
            </Aside>
        </Container>
    );

}