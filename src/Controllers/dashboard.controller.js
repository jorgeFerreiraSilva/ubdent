import React from 'react'
import useGlobal from '../Store'
import DashboardScreen from '../Screens/dashboard.screen'

function Dashboard () {
  const [state, actions ] = useGlobal()

  console.log('state do sidenav', state)

  const onChangeText = (property, value) => {
    try {
      actions.updateUsersState(property, value)
    } catch (error) {
      console.log(error)
    }
  }

  const handlers = {
    onChangeText
  }

  return (
    <DashboardScreen handlers={handlers} />
  )
}

export default Dashboard