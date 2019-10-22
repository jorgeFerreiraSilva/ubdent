import React, {Component} from "react"
// import {withRouter} from 'react-router-dom'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from "mdbreact"
import 'moment/locale/pt-br'


function FormProduto () {

        return (
            <>
    <MDBContainer
    style={{
        marginTop: '4%',
        marginBottom: '2%',
        justifyContent: 'flex-end'
      }}
    >
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Detalhes Do Paciente:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Salvar
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer
    style={{
        marginTop: '6%',
        marginBottom: '2%',
        justifyContent: 'flex-end'
      }}
    >
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Arquivos Do Paciente:
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                </div>
              </form>
              <MDBModalFooter>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
        )




}

export default FormProduto