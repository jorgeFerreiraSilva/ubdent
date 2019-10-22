import React, { useEffect, useState } from 'react'
import useGlobal from '../Store'
import DashboardScreen from '../Screens/dashboard.screen'
import Loading from '../loading'

function Dashboard () {
  const [state, actions ] = useGlobal()
  const [localState, localSetState] = useState({ 
    rows: []
  })

  console.log('state do sidenav', state)

  const onChangeText = (property, value) => {
    try {
      actions.updateUsersState(property, value)
    } catch (error) {
      console.log(error)
    }
  }

  const getUsers = async () => {
    try {
    const [error, response] = await actions.getUsers()
      if (response) {
        console.log(response.data)
        console.log(response.data.data)
        console.log(response.data )
        localSetState({ rows: response.data.data })
      }
    } catch (error){
    console.log(error)
    }
  }

  useEffect(()=> {
    if(localState.rows.length === 0 ){
      getUsers()
    } 
  },[])

  const handlers = {
    onChangeText
  }

  return (
  <DashboardScreen handlers={handlers} rows={localState.rows} />
  )
}

export default Dashboard