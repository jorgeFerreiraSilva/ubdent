
import React, { useState, useEffect } from 'react'
import { MDBDataTable, Container, Row, Col, Card, CardHeader, CardBody, Fa, MDBBtn } from 'mdbreact'
// import { Messages } from '../../components/Layout/Messages'
import { useHistory } from 'react-router-dom'
import useGlobal from './Store'
import Loading from './loading'

function Table ({ rows }) {
  const history = useHistory()
  const [state, actions] = useGlobal()
  const { columns } = state.data
  const [localState, setLocalState] = useState({ loading: true })

  useEffect(() => {
    if (rows.length !== 0) setLocalState({ loading: false })
    else setLocalState({ loading: true })
  }, [rows])

  useEffect(() => {
    console.log('state empty', state.api.medicalData[0])
  }, [])

  const handleContinue = async (item, dataBefore) => {
    try {
      console.log('item', item)
      const finalData = { ...dataBefore, item }
      history.push({
        pathname: `/anamnese/${dataBefore.medicalData[dataBefore.medicalData - 1]}`,
        state: {
          // item: item,
          anamnese: dataBefore
        }
      })
      // }
    } catch (error) {
      console.log(error)
    }
  }
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
      console.log('CORRECT NAME', item)
      if (item.anamnese.medicalData && item.anamnese.medicalData !== null && item.anamnese.medicalData !== undefined) {
        // if (item.anamnese.medicalData[item.anamnese.medicalData.length - 1][property] === '') return ''
        if (item.anamnese.medicalData.length === 0) return item[property]
        if (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) return item.anamnese.medicalData[item.anamnese.medicalData.length - 1][property]
      } else return ''
    } catch (error) {
      console.log(error)
    }
  }

  const dataRows = rows.map((item) => {
    const dataBefore = item.anamnese
    console.log('DATA BEFORE', item.anamnese)
    console.log('ITEM COMPLETE', item)
    item = {
      button: <MDBBtn rounded color='gradient-card-header blue-gradient' onClick={() => handleContinue(item, dataBefore)}>Detalhes</MDBBtn>,
      name: correctItem(item, 'name'),
      cpf: correctItem(item, 'document'),
      email: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.email : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].email : '',
      telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.phone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].phone : '',
      lastVisit: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.lastVisit) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]).toString() ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].lastVisit) : '',
      dentistFear: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.dentistFear) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].dentistFear) : '',
      doctorLastVisit: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.doctorLastVisit) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].doctorLastVisit) : '',
      healthProblems: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.healthProblems) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].healthProblems) : '',
      healthProblemsDetails: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.healthProblemsDetails : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].healthProblemsDetails : '',
      takeMedication: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.takeMedication) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].takeMedication) : '',
      takeMedicationDetails: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.takeMedicationDetails : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].takeMedicationDetails : '',
      haveAllergy: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.haveAllergy) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].haveAllergy) : '',
      haveAllergyDetails: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.haveAllergyDetails : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].haveAllergyDetails : '',
      diabetes: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.diabetes) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].diabetes) : '',
      hearthProblem: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.hearthProblem) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].hearthProblem) : '',
      pregnant: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? rightChoose(item.pregnant) : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? rightChoose(item.anamnese.medicalData[item.anamnese.medicalData.length - 1].pregnant) : ''
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || i  tem.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : ''
    }
    console.log('item', item)
    return item
  })
  const tableData = {
    columns,
    rows: dataRows
  }

  return (
    <Container style={{ alignItems: 'flex-end', width: '83%', backgorundColor: 'red' }}>
      <Row>
        <Col>
          <Card narrow>
            <CardHeader className='view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3'>
              <div />
              <h4 className='white-text mx-3 center'><Fa icon='institution' /> Anamneses </h4>
              <div />
            </CardHeader>
            <CardBody cascade>
              {(localState.loading)
                ? <Loading />
                : <MDBDataTable
                  exportToCSV
                  responsive
                  striped
                  bordered
                  hover
                  entriesLabel='Mostrar resultados'
                  searchLabel='Procurar'
                  infoLabel={['Mostrando', 'até', 'de', 'resultados']}
                  paginationLabel={['Anterior', 'Próximo']}
                  data={tableData}
                  />}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Table
