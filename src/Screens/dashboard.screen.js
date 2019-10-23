import React from 'react'
import {
  MDBContainer,
} from 'mdbreact'
import Table from '../table'

const DashboardScreen = ({ rows }) => {

  return (
    <MDBContainer
      style={{
        marginTop: '2%',
        marginBottom: '2%',
        justifyContent: 'flex-end'
      }}
    >
 
    <Table rows={rows} />
    </MDBContainer>
  )
}

export default DashboardScreen
