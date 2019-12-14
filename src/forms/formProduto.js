import React, { useEffect, useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import Select from 'react-select'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  Button,
  Fa,
  MDBInput
} from 'mdbreact'
import 'moment/locale/pt-br'
import useGlobal from '../Store'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

function FormProduto () {
  const params = useParams()

 const location = useLocation()

  // useEffect(() => {
  //   console.log('usePARAMS', params)
  //   console.log('usePARAMS', useParams)
  //   console.log('useLocation', location)
  //   console.log('useLocation', location)
  // }, [])

  // const getOneUser = async (document) => {
  //   try {
  //   const [error, response] = await actions.getOneUser(document)
  //     if (response) {
  //       const data = response.data.data
  //       await localSetState({ ...localState, data })
  //     }
  //   } catch (error){
  //   console.log(error)
  //   }
  // }
  const rightChoose = (value) => {
    try {
      if (value === true) return 'Sim'
      if (value === false) return 'Não'
      if (value === 'male') return 'Masculino'
      if (value === 'female') return 'Feminino'
      if (value === 'undefined') return 'Indefinido'
      if (value === '3 months') return '3 meses'
      if (value === '6 months') return '6 meses'
      if (value === '1 year') return '1 ano'
    } catch (error) {
      console.log(error)
    }
  }

  const correctItem = (item, property) => {
    try {
      console.log(test)
      if (item.anamnese.medicalData !== null && item.anamnese.medicalData !== undefined) {
        if (item.anamnese.medicalData.length === 0) return item[property]
        if (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) return item.anamnese.medicalData[item.anamnese.medicalData.length - 1][property]
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const [state, actions] = useGlobal()
  const history = useHistory()
  const [localState, localSetState] = useState({
    root: location.state.root,
    medicalData: (location.state.anamnese.medicalData || location.state.anamnese.medicalData === undefined || location.state.anamnese.medicalData === undefined || !location.state.anamnese.medicalData[location.state.anamnese.medicalData.length - 1]) ? state.api.emptyMedicalData : location.state.anamnese.medicalData[location.state.anamnese.medicalData.length - 1],
    files: location.state.anamnese.files
  })

  useEffect(() => {
    console.log('localState', localState)
  }, [localState])

  useEffect(() => {
    console.log('LOCATION', location)
  }, [])

  const options = [
    { value: true, label: 'Sim' },
    { value: false, label: 'Não' }
  ]
  const genderOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'undefined', label: 'Indefinido' }
  ]
  const timeList = [
    {
      value: '3 months',
      label: '3 meses'
    },
    {
      value: '6 months',
      label: '6 meses'
    },
    {
      value: '1 year',
      label: '1 ano'
    }
  ]
  const handleChange = property => selectedOption => {
    const medicalData = { ...localState.medicalData, [property]: selectedOption.value }
    localSetState({
      ...localState,
      medicalData
    })
  }

  const resolver = file => {
    console.log(file)
    if (file.fileFormat === 'wav') return <audio controls style={{ alignSelf: 'center', justifySelf: 'center', outline: 0 }} key={file.fileName} src={file.url} />
    if (file.fileFormat === 'jpg') return <a href={file.url} target='_blank'><img class='link_thumb' width={250} height={250} style={{ marginLeft: 15 }} key={file.fileName} src={file.url} /></a>
    //  return <TextareaAutosize aria-label='minimum height' rows={3} placeholder='Minimum 3 rows' />
    // return false
  }

  const updater = (event, property) => {
    // console.log('EVENTO', event)
    const medicalData = { ...localState.medicalData, [property]: event }
    // console.log('newassign', medicalData)
    localSetState({ ...localState, medicalData })
  }

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
          <MDBCol md='12'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className='form-header gradient-card-header blue-gradient rounded'>
                  <h3 className='my-3'>
                    <MDBIcon icon='lock' /> Detalhes Do Paciente:
                  </h3>
                </MDBCardHeader>
                <form onSubmit={async (event) => {
                  event.preventDefault()
                  console.log('LOCAL STATE ADD MEDICAL DATA', localState.medicalData)
                  const response = await actions.addMedicalData(localState.medicalData)
                  console.log('RESPONSE DO PATCH', response)
                  history.push('/anamneses')
                }}
                >
                  <div className='grey-text'>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Nome'
                          value={(localState.medicalData && localState.medicalData.name !== '' ? localState.medicalData.name : localState.root.name)}
                          icon='envelope'
                          onChange={(e) => updater(e.target.value, 'name')}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput
                          label='CPF'
                          icon='lock'
                          value={localState.medicalData && localState.medicalData.document !== '' ? localState.medicalData.document : localState.root.document}
                          onChange={e => updater(e.target.value, 'document')}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Email'
                          icon='envelope'
                          value={localState.medicalData.email}
                          onChange={e => updater(e.target.value, 'email')}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput
                          label='data de nascimento'
                          icon='lock'
                          value={localState.birthDay}
                          onChange={e => updater(e.target.value, 'birthDay')}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Gênero</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.gender)}
                          value={localState.medicalData.gender}
                          onChange={handleChange('gender')}
                          options={genderOptions}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Numero de Telefone'
                          icon='lock'
                          value={localState.medicalData.phone}
                          onChange={e => updater(e.target.value, 'phone')}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow md='12'>
                      <MDBCol
                        md='6'
                        style={{
                          marginTop: '0.5%',
                          paddingRight: '5.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Última visita ao dentista</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.lastVisit)}
                          value={localState.medicalData.lastVisit}
                          onChange={handleChange('lastVisit')}
                          options={timeList}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          width: '100%',
                          marginTop: '0.5%'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Medo de Dentista ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.dentistFear)}
                          value={localState.medicalData.dentistFear}
                          onChange={handleChange('dentistFear')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow
                      style={{
                        marginTop: '4%',
                        marginBottom: '2%'
                      }}
                      md='12'
                    >
                      <MDBCol
                        md='6'
                        style={{
                          width: '100%',
                          marginTop: '0.5%',
                          paddingRight: '5.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Última vez que foi ao médico?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.doctorLastVisit)}
                          value={localState.medicalData.doctorLastVisit}
                          onChange={handleChange('doctorLastVisit')}
                          options={timeList}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          width: '100%',
                          marginTop: '0.5%'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Problemas de saúde ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.healthProblems)}
                          value={localState.medicalData.healthProblems}
                          onChange={handleChange('healthProblems')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow />
                    <MDBRow
                      md='12'
                    >
                      <MDBCol md='6'>
                        <MDBInput
                          label='Detalhes dos problemas de saude'
                          icon='envelope'
                          value={localState.medicalData.healthProblemsDetails}
                          onChange={e => updater(e.target.value, 'healthProblemsDetails')}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Toma Medicamentos? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.takeMedication)}
                          value={localState.medicalData.takeMedication}
                          onChange={handleChange('takeMedication')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Quais Medicamentos?'
                          icon='envelope'
                          value={localState.medicalData.takeMedicationDetails}
                          onChange={e => updater(e.target.value, 'takeMedicationDetails')}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>tem alergia? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.haveAllergy)}
                          value={localState.medicalData.haveAllergy}
                          onChange={handleChange('haveAllergy')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Detalhes da Alergia'
                          icon='lock'
                          value={localState.medicalData.haveAllergyDetails}
                          onChange={e => updater(e.target.value, 'haveAllergyDetails')}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Pressāo baixa? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.lowPressure)}
                          value={localState.medicalData.lowPressure}
                          onChange={handleChange('lowPressure')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow
                      style={{
                        marginTop: '1%',
                        marginBottom: '2%'
                      }}
                      md='12'
                    >
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          paddingRight: '5.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Pressāo normal? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.normalPressure)}
                          value={localState.medicalData.normalPressure}
                          onChange={handleChange('normalPressure')}
                          options={options}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Pressāo alta? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.highPressure)}
                          value={localState.medicalData.highPressure}
                          onChange={handleChange('highPressure')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          paddingRight: '5.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>tem diabetes? ?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.diabetes)}
                          value={localState.medicalData.diabetes}
                          onChange={handleChange('diabetes')}
                          options={options}
                        />
                      </MDBCol>
                      <MDBCol
                        style={{
                          marginTop: '0.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>Problema de coração?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.hearthProblem)}
                          value={localState.medicalData.hearthProblem}
                          onChange={handleChange('hearthProblem')}
                          options={options}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol
                        md='6'
                        style={{
                          marginTop: '0.5%',
                          paddingRight: '5.5%',
                          marginLeft: '4.5%',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ fontSize: 12, fontStyle: 'bold' }}>grávida?</div>
                        <Select
                          placeholder={rightChoose(localState.medicalData.pregnant)}
                          value={localState.medicalData.pregnant}
                          onChange={handleChange('pregnant')}
                          options={options}
                        />
                      </MDBCol>
                      <MDBCol md='6'>
                        <MDBInput
                          label='Sintomas'
                          icon='lock'
                          value={localState.medicalData.symtoms}
                          onChange={e => updater(e.target.value, 'symtoms')}
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <div className='text-center mt-4'>
                    <div className='text-center py-4 mt-3'>
                      <Button color='gradient-card-header blue-gradient' type='submit'>Salvar<Fa icon='sign-in' /></Button>
                    </div>
                  </div>
                </form>
                <MDBModalFooter />
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
          <MDBCol md='12'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className='form-header gradient-card-header blue-gradient rounded'>
                  <h3 className='my-3'>
                    <MDBIcon icon='lock' /> Arquivos Do Paciente:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className='grey-text'>
                    <MDBRow>
                      {(localState.files !== null && localState.files !== undefined)
                        ? localState.files.map(file => resolver(file))
                        : null}

                    </MDBRow>
                  </div>
                </form>
                <MDBModalFooter />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>

  )
}

export default FormProduto
