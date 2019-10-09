import React, { Fragment, useEffect } from 'react'
// import { withRouter } from 'react-router-dom'

import Messages from '../messages'

import {Container, Row, Col, Card, CardBody, Input, Button, Fa} from 'mdbreact'
// import Loading from './loading'
import { Link } from "react-router-dom"

import useInputState from '../useInputState'
import useToggle from '../useToggle'
import useGlobal from '../Store'


function LoginScreen({ handlers }) {
     const [state] = useGlobal()
     useEffect(() => { console.log(state.isAuthenticated)}, [state.isAuthenticated])
        return (
            <Fragment>
                <Container style={{marginTop: '5%'}}>
                    <Row center>
                        <Col lg="6" md="8">
                            <Card>
                                <CardBody>
                                    <form onSubmit={handlers.handleSubmit}>
                                        <p className="h4 text-center py-4">Bem vindo!</p>
                                        <div className="grey-text">
                                            <Input label="Email" name="email" id="email" onChange={handlers.updateEmail} icon="envelope" group type="email" validate error="wrong" success="right" required />
                                            <Input label="Senha" name="senha" id="senha" onChange={handlers.updateSenha} icon="lock" group type="password" validate required />
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

export default LoginScreen