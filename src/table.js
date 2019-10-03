
import React, { Fragment } from 'react'
// import {withRouter} from 'react-router-dom'
import {MDBDataTable, Container, Row, Col, Card, CardHeader, CardBody, Fa, MDBBtn} from 'mdbreact'
import { BrowserRouter as Router,  Link, Redirect } from "react-router-dom"
// import { Messages } from '../../components/Layout/Messages';

function Table() {
    const data = {
        columns: [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Position',
            field: 'position',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Start date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Salary',
            field: 'salary',
            sort: 'asc',
            width: 100
          },
          {label: 'Edit Infos',
           field:'Edit',
           sort: 'none'
          }
        ],
        rows: [

          {
            name: `Tiger Nixon`,
            position: 'System Architect',
            office: 'Edinburgh',
            age: '61',
            date: '2011/04/25',
            salary: '$320', 
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Garrett Winters',
            position: 'Accountant',
            office: 'Tokyo',
            age: '63',
            date: '2011/07/25',
            salary: '$170',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Ashton Cox',
            position: 'Junior Technical Author',
            office: 'San Francisco',
            age: '66',
            date: '2009/01/12',
            salary: '$86',
            button: <Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Cedric Kelly',
            position: 'Senior Javascript Developer',
            office: 'Edinburgh',
            age: '22',
            date: '2012/03/29',
            salary: '$433',
            button: <Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Airi Satou',
            position: 'Accountant',
            office: 'Tokyo',
            age: '33',
            date: '2008/11/28',
            salary: '$162',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Brielle Williamson',
            position: 'Integration Specialist',
            office: 'New York',
            age: '61',
            date: '2012/12/02',
            salary: '$372',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Herrod Chandler',
            position: 'Sales Assistant',
            office: 'San Francisco',
            age: '59',
            date: '2012/08/06',
            salary: '$137',
            button: <Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Rhona Davidson',
            position: 'Integration Specialist',
            office: 'Tokyo',
            age: '55',
            date: '2010/10/14',
            salary: '$327',
            button: <Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Colleen Hurst',
            position: 'Javascript Developer',
            office: 'San Francisco',
            age: '39',
            date: '2009/09/15',
            salary: '$205',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Sonya Frost',
            position: 'Software Engineer',
            office: 'Edinburgh',
            age: '23',
            date: '2008/12/13',
            salary: '$103',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jena Gaines',
            position: 'Office Manager',
            office: 'London',
            age: '30',
            date: '2008/12/19',
            salary: '$90',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Quinn Flynn',
            position: 'Support Lead',
            office: 'Edinburgh',
            age: '22',
            date: '2013/03/03',
            salary: '$342',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Charde Marshall',
            position: 'Regional Director',
            office: 'San Francisco',
            age: '36',
            date: '2008/10/16',
            salary: '$470',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Haley Kennedy',
            position: 'Senior Marketing Designer',
            office: 'London',
            age: '43',
            date: '2012/12/18',
            salary: '$313',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Tatyana Fitzpatrick',
            position: 'Regional Director',
            office: 'London',
            age: '19',
            date: '2010/03/17',
            salary: '$385',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Michael Silva',
            position: 'Marketing Designer',
            office: 'London',
            age: '66',
            date: '2012/11/27',
            salary: '$198',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Paul Byrd',
            position: 'Chief Financial Officer (CFO)',
            office: 'New York',
            age: '64',
            date: '2010/06/09',
            salary: '$725',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Gloria Little',
            position: 'Systems Administrator',
            office: 'New York',
            age: '59',
            date: '2009/04/10',
            salary: '$237',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Bradley Greer',
            position: 'Software Engineer',
            office: 'London',
            age: '41',
            date: '2012/10/13',
            salary: '$132',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Dai Rios',
            position: 'Personnel Lead',
            office: 'Edinburgh',
            age: '35',
            date: '2012/09/26',
            salary: '$217',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jenette Caldwell',
            position: 'Development Lead',
            office: 'New York',
            age: '30',
            date: '2011/09/03',
            salary: '$345',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Yuri Berry',
            position: 'Chief Marketing Officer (CMO)',
            office: 'New York',
            age: '40',
            date: '2009/06/25',
            salary: '$675',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Caesar Vance',
            position: 'Pre-Sales Support',
            office: 'New York',
            age: '21',
            date: '2011/12/12',
            salary: '$106',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Doris Wilder',
            position: 'Sales Assistant',
            office: 'Sidney',
            age: '23',
            date: '2010/09/20',
            salary: '$85',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Angelica Ramos',
            position: 'Chief Executive Officer (CEO)',
            office: 'London',
            age: '47',
            date: '2009/10/09',
            salary: '$1',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Gavin Joyce',
            position: 'Developer',
            office: 'Edinburgh',
            age: '42',
            date: '2010/12/22',
            salary: '$92',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jennifer Chang',
            position: 'Regional Director',
            office: 'Singapore',
            age: '28',
            date: '2010/11/14',
            salary: '$357',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Brenden Wagner',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '28',
            date: '2011/06/07',
            salary: '$206',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Fiona Green',
            position: 'Chief Operating Officer (COO)',
            office: 'San Francisco',
            age: '48',
            date: '2010/03/11',
            salary: '$850',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Shou Itou',
            position: 'Regional Marketing',
            office: 'Tokyo',
            age: '20',
            date: '2011/08/14',
            salary: '$163',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Michelle House',
            position: 'Integration Specialist',
            office: 'Sidney',
            age: '37',
            date: '2011/06/02',
            salary: '$95',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Suki Burks',
            position: 'Developer',
            office: 'London',
            age: '53',
            date: '2009/10/22',
            salary: '$114',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Prescott Bartlett',
            position: 'Technical Author',
            office: 'London',
            age: '27',
            date: '2011/05/07',
            salary: '$145',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Gavin Cortez',
            position: 'Team Leader',
            office: 'San Francisco',
            age: '22',
            date: '2008/10/26',
            salary: '$235',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Martena Mccray',
            position: 'Post-Sales support',
            office: 'Edinburgh',
            age: '46',
            date: '2011/03/09',
            salary: '$324',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Unity Butler',
            position: 'Marketing Designer',
            office: 'San Francisco',
            age: '47',
            date: '2009/12/09',
            salary: '$85',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Howard Hatfield',
            position: 'Office Manager',
            office: 'San Francisco',
            age: '51',
            date: '2008/12/16',
            salary: '$164',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Hope Fuentes',
            position: 'Secretary',
            office: 'San Francisco',
            age: '41',
            date: '2010/02/12',
            salary: '$109',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Vivian Harrell',
            position: 'Financial Controller',
            office: 'San Francisco',
            age: '62',
            date: '2009/02/14',
            salary: '$452',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Timothy Mooney',
            position: 'Office Manager',
            office: 'London',
            age: '37',
            date: '2008/12/11',
            salary: '$136',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jackson Bradshaw',
            position: 'Director',
            office: 'New York',
            age: '65',
            date: '2008/09/26',
            salary: '$645',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Olivia Liang',
            position: 'Support Engineer',
            office: 'Singapore',
            age: '64',
            date: '2011/02/03',
            salary: '$234',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Bruno Nash',
            position: 'Software Engineer',
            office: 'London',
            age: '38',
            date: '2011/05/03',
            salary: '$163',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Sakura Yamamoto',
            position: 'Support Engineer',
            office: 'Tokyo',
            age: '37',
            date: '2009/08/19',
            salary: '$139',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Thor Walton',
            position: 'Developer',
            office: 'New York',
            age: '61',
            date: '2013/08/11',
            salary: '$98',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Finn Camacho',
            position: 'Support Engineer',
            office: 'San Francisco',
            age: '47',
            date: '2009/07/07',
            salary: '$87',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Serge Baldwin',
            position: 'Data Coordinator',
            office: 'Singapore',
            age: '64',
            date: '2012/04/09',
            salary: '$138',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Zenaida Frank',
            position: 'Software Engineer',
            office: 'New York',
            age: '63',
            date: '2010/01/04',
            salary: '$125',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Zorita Serrano',
            position: 'Software Engineer',
            office: 'San Francisco',
            age: '56',
            date: '2012/06/01',
            salary: '$115',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jennifer Acosta',
            position: 'Junior Javascript Developer',
            office: 'Edinburgh',
            age: '43',
            date: '2013/02/01',
            salary: '$75',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Cara Stevens',
            position: 'Sales Assistant',
            office: 'New York',
            age: '46',
            date: '2011/12/06',
            salary: '$145',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Hermione Butler',
            position: 'Regional Director',
            office: 'London',
            age: '47',
            date: '2011/03/21',
            salary: '$356',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Lael Greer',
            position: 'Systems Administrator',
            office: 'London',
            age: '21',
            date: '2009/02/27',
            salary: '$103',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Jonas Alexander',
            position: 'Developer',
            office: 'San Francisco',
            age: '30',
            date: '2010/07/14',
            salary: '$86',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Shad Decker',
            position: 'Regional Director',
            office: 'Edinburgh',
            age: '51',
            date: '2008/11/13',
            salary: '$183',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Michael Bruce',
            position: 'Javascript Developer',
            office: 'Singapore',
            age: '29',
            date: '2011/06/27',
            salary: '$183',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          },
          {
            name: 'Donna Snider',
            position: 'Customer Support',
            office: 'New York',
            age: '27',
            date: '2011/01/25',
            salary: '$112',
            button:<Link to='/form'><MDBBtn rounded color="info" onClick={{}}>Edit</MDBBtn></Link>
          }
        ]
      }
      // let btnItens = data.foreach(() =>{ <MDBBtn rounded color="info">Info</MDBBtn> })
 return (
   <Router>
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
                        data={data}
                        >
                    </MDBDataTable>  
                </CardBody>
            </Card>
        </Col>
    </Row>
    </Container>
    </Router>
        )
 }

 export default Table