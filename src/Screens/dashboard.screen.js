import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
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
