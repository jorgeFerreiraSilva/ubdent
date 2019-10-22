
import React, { Fragment } from 'react'
import {MDBDataTable, Container, Row, Col, Card, CardHeader, CardBody, Fa, MDBBtn} from 'mdbreact'
// import { Messages } from '../../components/Layout/Messages'
import { useHistory } from 'react-router-dom'
import useGlobal from './Store'

function Table({ rows }) {
    const history = useHistory()
    const [ state ] = useGlobal()
    const { columns } = state.data
    
    const dataRows = rows.map((item) => {
        item = {
            button: <MDBBtn rounded color="info" onClick={() => history.push('/form')}>Detalhes</MDBBtn>,
            name: item.name,
            cpf: item.cpf
        }
        return item
    })
    
    const tableData = {
        columns,
        rows: dataRows
    }

 return (
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
                        data={tableData}
                        >
                    </MDBDataTable>  
                </CardBody>
            </Card>
        </Col>
    </Row>
    </Container>
        )
 }

 export default Table