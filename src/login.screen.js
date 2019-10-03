import React, { Fragment, useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
import { Authentication, Authentication2 } from './login.mock'
import { Redirect } from "react-router-dom"

import Messages from './messages'

import {Container, Row, Col, Card, CardBody, Input, Button, Fa} from 'mdbreact'
import Loading from './loading'

import useInputState from './useInputState'
import useToggle from './useToggle'
import SideNavPage from './dashboard.screen'


function Login() {
        
    const [ email, updateEmail, resetEmail ] = useInputState('')
    const [ senha, updateSenha, resetSenha ] = useInputState('')
    const [loading, toggleLoading] = useToggle(false)

    useEffect(() => { console.log(loading)}, [loading])

    const handleSubmit = (event) => {
        try {
        event.preventDefault()
        if (email !== '' && senha !== '') {
            if(
                email === Authentication.email && senha === Authentication.password ||
                email === Authentication2.email && senha === Authentication2.password
                )
            { 
                toggleLoading()
                // alert('voce está logado')

            } else  alert('voce errou  tente de novamente')
        }
        } catch (error) {
        console.log(error)
        }
    }
        return (
            <Fragment>
            {(loading === true) ? <Redirect to='/anamneses'/> : <Container style={{marginTop: '5%'}}>
                    <Row center>
                        <Col lg="6" md="8">
                            <Card>
                                <CardBody>
                                    <form onSubmit={handleSubmit}>
                                        <p className="h4 text-center py-4">Bem vindo!</p>
                                        <div className="grey-text">
                                            <Input label="Email" name="email" id="email" onChange={updateEmail} icon="envelope" group type="email" validate error="wrong" success="right" required />
                                            <Input label="Senha" name="senha" id="senha" onChange={updateSenha} icon="lock" group type="password" validate required />
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                            <Button color="indigo" type="submit">Entrar <Fa icon="sign-in" /></Button>
                                        </div>
                                        <div className="text-center py-4 mt-3">
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container> }
            </Fragment>
        )
}

export default Login