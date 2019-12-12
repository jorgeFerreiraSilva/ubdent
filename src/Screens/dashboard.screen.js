import React, { useEffect } from 'react'
import {
  MDBContainer,
} from 'mdbreact'
import Table from '../table'
import useGlobal from '../Store'

const DashboardScreen = ({ rows }) => {
  const [state, actions] = useGlobal()

  const getUsers = async () => {
    try {
      const [error, response] = await actions.getUsers()
      // console.log('ressssponsseeeee', response.data.data)
      // console.log('errrrrooooorrr', error)
      // if (response) {
      //   localSetState({ rows: response.data.data })
      // }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getUsers()
  }, [])

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
