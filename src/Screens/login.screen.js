import React, { Fragment, useEffect } from 'react'

import Messages from '../messages'

import { Container, Row, Col, Card, CardBody, Input, Button, Fa } from 'mdbreact'

import useGlobal from '../Store'

function LoginScreen ({ handlers }) {
  const [state] = useGlobal()
  useEffect(() => {
    // console.log(state.users.password)
    // console.log(state.users.username)
    // console.log(state.users.isAuthenticated)
  }, [state.users, state.users.password, state.users.login, state.users.isAuthenticated])
  return (
    <>
      <Container style={{ marginTop: '5%' }}>
        <Row center>
          <Col lg='6' md='8'>
            <Card>
              <CardBody>
                <form onSubmit={handlers.handleSubmit}>
                  <p className='h4 text-center py-4'>Bem vindo!</p>
                  <div className='grey-text'>
                    <Input label='Email' name='email' id='email' onChange={handlers.updateEmail} icon='envelope' group type='email' validate error='wrong' success='right' required />
                    <Input label='Senha' name='senha' id='senha' onChange={handlers.updateSenha} icon='lock' group type='password' validate required />
                  </div>
                  {/* <a href={'/signup'}><div>cadastre-se</div></a> */}
                  <div className='text-center py-4 mt-3'>
                    <Button color='gradient-card-header blue-gradient' type='submit'>Entrar <Fa icon='sign-in' /></Button>
                  </div>
                  <div className='text-center py-4 mt-3' />
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginScreen
