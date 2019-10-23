import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
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
import useGlobal from '../Store'


function FormProduto () {
      const [, actions] = useGlobal()
      const params = useParams()
      const [localState, localSetState] = useState({
        name: '',
        cpf: '',
        files: []
      })

     const resolver = file => {
        if(file.fileFormat === "wav") return <audio controls style={{ alignSelf: 'center', justifySelf: 'center', outline: 0 }}  key={file.fileName} src={file.url} />
        if(file.fileFormat === "jpg") return <img width={250} height={250} style={{marginLeft: 15}} key={file.fileName} src={file.url} />
        return false
    }

    const getOneUser = async (document) => {
      try {
      const [error, response] = await actions.getOneUser(document)
      console.log(' response.data.data',response.data.data)
      
        if (response) {
          await localSetState({ ...localState,
             name: response.data.data.name,
             cpf: response.data.data.cpf,
             files:
              (response.data.data.anamnese.files.length !== 0) 
              ? response.data.data.anamnese.files 
              : null,
              email: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].email : null,
              phone: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].phone : null,
              birthDay: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].birthDay : null,
              birthMonth: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].birthMonth : null,
              birthYear: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].birthYear : null,
              gender: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].gender : null,
              lastVisitDay: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].lastVisitDay : null,
              lastVisitMonth: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].lastVisitMonth : null,
              lastVisitYear: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].lastVisitYear : null,
              dentistFear: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].dentistFear : null,
              doctorLastVisitDay: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].doctorLastVisitDay : null,
              doctorLastVisitMonth: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].doctorLastVisitMonth : null,
              doctorLastVisitYear: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].doctorLastVisitYear : null,
              healthProblems: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].healthProblems : null,
              healthProblemsDetails: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].healthProblemsDetails : null,
              takeMedication: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].takeMedication : null,
              takeMedicationDetails: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].takeMedicationDetails : null,
              haveAllergy: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].haveAllergy : null,
              haveAllergyDetails: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].haveAllergyDetails : null,
              lowPressure: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].lowPressure : null,
              normalPressure: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].normalPressure : null,
              highPressure: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].highPressure : null,
              diabetes: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].diabetes : null,
              hearthProblem: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].hearthProblem : null,
              pregnant: (response.data.data.anamnese.medicalData[0]) ? response.data.data.anamnese.medicalData[0].pregnant : null,
              
            })
        }
      } catch (error){
      console.log(error)
      }
    }

      useEffect(() => {
        getOneUser(params.cpf)
      }, [])

      useEffect(() => {
        console.log(localState.files)
      }, [localState.files])
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
                    label='Nome'
                    value={localState.name}
                    icon="envelope"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label='CPF'
                    icon="lock"
                    value={localState.cpf}
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Email"
                    icon="envelope"
                    value={localState.email}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="dia de nascimento"
                    icon="lock"
                    value={localState.birthDay}
                    group
                    validate
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>  
                <MDBCol md="6">  
                  <MDBInput
                    label="Mês de nascimento"
                    icon="envelope"
                    value={localState.birthMonth}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Ano de nascimento"
                    icon="lock"
                    value={localState.birthYear}
                  />
                </MDBCol>  
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Gênero"
                    icon="envelope"
                    value={localState.gender}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Numero de Telefone"
                    icon="lock"
                    value={localState.phone}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo dia de visita"
                    icon="envelope"
                    value={localState.lastVisitDay}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo Mês de visita"
                    icon="lock"
                    value={localState.lastVisitMonth}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo ano de visita"
                    icon="envelope"
                    value={localState.lastVisitYear}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Medo de Dentista"
                    icon="lock"
                    value={(localState.dentistFear === true) ? 'Sim' : null}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo dia de visita ao médico"
                    icon="envelope"
                    value={localState.doctorLastVisitDay}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo mês de visita ao médico"
                    icon="lock"
                    value={localState.doctorLastVisitMonth}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Ultimo ano de visita ao médico"
                    icon="envelope"
                    value={localState.doctorLastVisitYear}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Problemas de saude"
                    icon="lock"
                    value={(localState.healthProblems === true) ? 'sim' : 'não  ' }
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Detalhes dos problemas de saude"
                    icon="envelope"
                    value={localState.healthProblemsDetails}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Toma Medicamentos?"
                    icon="lock"
                    value={(localState.takeMedication === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Quais Medicamentos?"
                    icon="envelope"
                    value={localState.takeMedicationDetails}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Toma Medicamentos?"
                    icon="lock"
                    value={(localState.takeMedication === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="tem alergia?"
                    icon="envelope"
                    value={(localState.haveAllergy === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Detalhes da Alergia"
                    icon="lock"
                    value={localState.haveAllergyDetails}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Pressāo baixa?"
                    icon="envelope"
                    value={(localState.lowPressure === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="Pressāo normal?"
                    icon="lock"
                    value={(localState.normalPressure === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Pressāo Alta?"
                    icon="envelope"
                    value={(localState.highPressure === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="diabetes?"
                    icon="lock"
                    value={(localState.diabetes === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol md="6">  
                  <MDBInput
                    label="Problema de coração?"
                    icon="envelope"
                    value={(localState.hearthProblem === true) ? 'sim' : 'nāo'}
                  />
                </MDBCol> 
                <MDBCol md="6">  
                  <MDBInput
                    label="grávida?"
                    icon="lock"
                    value={(localState.pregnant === true) ? 'sim' : 'nāo'}
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
                {/* <MDBCol md="12" style={{alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'blue'}}> */}
                  {(localState.files !== null && localState.files !== undefined) 
                    ?localState.files.map(file => resolver(file))
                    : null
                   }
                {/* </MDBCol>    */}
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