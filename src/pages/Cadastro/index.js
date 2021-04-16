import { React, useState } from "react"; 

import { Container, Aside, BlockInput, Input } from './styles';
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function SingUp () {

    const [name, setUser] = useState([]);
    const [password, setPassword] = useState([]);
    const [email, setMail] = useState([]);
    const [passwordConfirmation, setPasswordConfirmation] = useState([]);
    let history = useHistory();

    function handleSubmit() {

        axios.post('https://heroku-org-trabalhos-api.herokuapp.com/user', {
            name,
            email,
            password,
            passwordConfirmation
        })
            .then(res => {
                alert("Usuário cadastrado!")
                history.push("/");
            })
            .catch(error => {
                alert("Erro ao cadastrar!");
                console.error(error)
            })
    }
    
    return (
        <Container>
            <Aside>
                <form>
                    <strong>Cadastro ao sistema</strong>
                    <BlockInput>
                        <label>Nome</label>
                        <Input type='text' value={name} onChange={e => setUser(e.target.value)}/>
                    </BlockInput>
                    <BlockInput>
                        <label>E-mail</label>
                        <Input type='text' value={email} onChange={e => setMail(e.target.value)}/>
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </BlockInput>
                    <BlockInput>
                        <label>Repita a senha</label>
                        <Input type='password' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                    </BlockInput>
                    <br />

                    <br />
                    <button type='button' onClick={handleSubmit}>Cadastrar</button>

                </form>
            </Aside>
        </Container>
    );

}