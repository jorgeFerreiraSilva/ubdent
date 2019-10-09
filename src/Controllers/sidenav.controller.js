import React from 'react'
import useGlobal from '../Store'
import SideNavScreen from '../Screens/sidenav.screen'

function SideNav () {
  const [state, actions ] = useGlobal()

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
    <SideNavScreen handlers={handlers} />
  )
}

export default SideNav