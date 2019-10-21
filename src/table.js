
import React, { Fragment } from 'react'
// import {withRouter} from 'react-router-dom'
import {MDBDataTable, Container, Row, Col, Card, CardHeader, CardBody, Fa, MDBBtn} from 'mdbreact'
import { BrowserRouter as Router,  Link, Redirect } from "react-router-dom"
// import { Messages } from '../../components/Layout/Messages'
import { useHistory } from 'react-router-dom'
import useGlobal from './Store'
import { object } from 'prop-types'

function Table() {
    const history = useHistory()
    const [ state, actions ] = useGlobal()
    // const data = {
    //     columns: [
         
    //     ],
    //     rows: [
    //     ]
    //   }
      // let btnItens = data.foreach(() =>{ <MDBBtn rounded color="info">Info</MDBBtn> })
    //   const button = { button: <MDBBtn rounded color="info" onClick={() => history.push('/form')}>Edit</MDBBtn> }

    // const escolha2 = services.reduce((acc, item) => {
    //     const mapper = { name: item.nome, id: item.carrierId }
    //     acc.push(mapper)
    //     return acc
    //     // return { name: item.nome, carrierId: acc.carrierId }  //{ nome: acc.nome, id: acc.carrierId }
    //    }, [])

      const data = state.data.rows.map((item) => {
        return (
         item.button = <MDBBtn rounded color="info" onClick={() => history.push('/form')}>Edit</MDBBtn>
         )
    }, [])
    
    // actions.updateUsersState('data   ', { ...state.data.rows, rows: mapper })

      console.log('data from state', state.data)
      console.log('data alone in the function', data)
 return (
  //  <Router>
    <Container style={{alignItems: 'flex-end',width: '83%', backgorundColor:'red' }}>
    <Row>
        <Col>
            <Card narrow>
                <CardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                    <div>
                    </div>
                    <h4 className="white-text mx-3 center"><Fa icon="institution" /> Anamneses </h4>
                    <div/>
                </CardHeader>
                <CardBody cascade>
                    <MDBDataTable
                        exportToCSV
                        responsive
                        striped
                        bordered
                        hover
                        entriesLabel="Mostrar resultados"
                        searchLabel="Procurar"
                        infoLabel={["Mostrando", "até", "de", "resultados"]}
                        paginationLabel={["Anterior", "Próximo"]}
                        data={state.data}
                        >
                    </MDBDataTable>  
                </CardBody>
            </Card>
        </Col>
    </Row>
    </Container>
    // </Router>
        )
 }

 export default Table