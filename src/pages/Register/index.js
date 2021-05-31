import { React, useState } from "react"; 
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { validateEmail, validatePassword } from '../../shared/stringUtils'
import axios from 'axios';

import { Container, Aside, BlockInput, Input, Button } from './styles';

export default function SingUp () {

    const [name, setUser] = useState([]);
    const [password, setPassword] = useState([]);
    const [email, setMail] = useState([]);
    const [passwordConfirmation, setPasswordConfirmation] = useState([]);
    let history = useHistory();

    function handleSubmit() {
        if ( !name.length || !password.length || !email.length || !passwordConfirmation.length ) {
            return alert( 'Todas as informações são obrigatórias' )
        }
        if ( !validateEmail( email ) ) {
            return alert( 'E-mail inválido! Por favor, verifique o endereço informado.' )
        }
        if ( password !== passwordConfirmation ) {
            return alert( 'Sua senha e sua confirmação de senha devem ser idênticas.' )
        }
        if ( !validatePassword( password ) ) {
            return alert( 'Senha inválida!. Sua senha deve possuir no mínimo 6 caracteres, além de conter letras maiúsculas ou números' )
        }

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
                if( error.response?.data?.msg ) {
                    return alert( error.response.data.msg )
                }
                console.error(error)
                return alert("Erro ao cadastrar!")
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
                        <Input type='text' value={email} onChange={e => setMail(e.target.value)} style={ {color: validateEmail( email ) ? 'green' : 'red'} }/>
                    </BlockInput>
                    <BlockInput>
                        <label>Senha</label>
                        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} style={ {color: validatePassword( password ) ? 'green' : 'red'} }/>
                    </BlockInput>
                    <BlockInput>
                        <label>Repita a senha</label>
                        <Input type='password' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                    </BlockInput>
                    {/* <br />
                    <br /> */}

                    <Button>
                        <button type='button' onClick={handleSubmit}>Cadastrar</button>
                        <Link to="/">
                            <button type='button'>Cancelar</button>
                        </Link> 
                    </Button>
                </form>
            </Aside>
        </Container>
    );

}