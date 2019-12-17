
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
    console.log('state emptyMedicalData', state.api.emptyMedicalData)
  }, [])

  const handleContinue = async (anamneseBefore, dataBefore) => {
    try {
      history.push({
        pathname: `/anamnese/${dataBefore.cpf}`,
        state: {
          root: { name: dataBefore.name, document: dataBefore.cpf },
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

  const dataRowResolver = (item, property) => {
    try {
      if (item.anamnese.medicalData &&
         item.anamnese.medicalData.length !== 0) {
        console.log('entrou1')
        return item.anamnese.medicalData[item.anamnese.medicalData.length - 1][property]
      } else return ''
    } catch (error) {
      console.log(error)
    }
  }

  const dataRows = rows.map((item, index) => {
    const dataBefore = item
    const anamneseBefore = item.anamnese
    // console.log('DATA BEFORE', item.anamnese)
    // console.log('ITEM COMPLETE', item)
    item = {
      button: <MDBBtn rounded color='gradient-card-header blue-gradient' onClick={() => handleContinue(anamneseBefore, dataBefore)}>Detalhes</MDBBtn>,
      name: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.name.toString() : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].name.toString() : 'NDF',
      cpf: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? dataBefore.cpf.toString() : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].document.toString() : 'NDF',
      email: dataRowResolver(item, 'email'),
      telefone: dataRowResolver(item, 'phone'),
      lastVisit: (dataRowResolver(item, 'lastVisit') === '1 year') ? '1 ano' : (dataRowResolver(item, 'lastVisit') === '6 months') ? '6 meses' : (dataRowResolver(item, 'lastVisit') === '3 months') ? '3 meses' : '',
      dentistFear: (dataRowResolver(item, 'dentistFear') === true) ? 'sim' : 'não',
      doctorLastVisit: (dataRowResolver(item, 'doctorLastVisit') === '1 year') ? '1 ano' : (dataRowResolver(item, 'doctorLastVisit') === '6 months') ? '6 meses' : (dataRowResolver(item, 'doctorLastVisit') === '3 months') ? '3 meses' : '',
      healthProblems: (dataRowResolver(item, 'healthProblems') === true) ? 'sim' : 'não',
      healthProblemsDetails: dataRowResolver(item, 'healthProblemsDetails'),
      takeMedication: (dataRowResolver(item, 'takeMedication') === true) ? 'sim' : 'não',
      takeMedicationDetails: dataRowResolver(item, 'takeMedicationDetails'),
      haveAllergy: (dataRowResolver(item, 'haveAllergy') === true) ? 'sim' : 'não',
      haveAllergyDetails: dataRowResolver(item, 'haveAllergyDetails'),
      diabetes: (dataRowResolver(item, 'diabetes') === true) ? 'sim' : 'não',
      hearthProblem: (dataRowResolver(item, 'hearthProblem') === true) ? 'sim' : 'não',
      pregnant: (dataRowResolver(item, 'pregnant') === true) ? 'sim' : 'não',
      symtoms: dataRowResolver(item, 'symtoms')
      // key: index,
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || item.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : '',
      // telefone: (!item.anamnese.medicalData || i  tem.anamnese.medicalData.length === 0) ? item.telefone : (item.anamnese.medicalData[item.anamnese.medicalData.length - 1]) ? item.anamnese.medicalData[item.anamnese.medicalData.length - 1].telefone : ''
    }
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
