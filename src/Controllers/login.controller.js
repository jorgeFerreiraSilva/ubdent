import React, { useEffect } from 'react'
import useGlobal from '../Store'
import LoginScreen from '../Screens/login.screen'
import useInputState from '../useInputState'
import { Authentication, Authentication2 } from '../login.mock'
import { Redirect } from "react-router-dom"



function Login () {
  const [state, actions ] = useGlobal()
  const [ email, updateEmail, resetEmail ] = useInputState('')
  const [ senha, updateSenha, resetSenha ] = useInputState('')
  // const [loading, toggleLoading] = useToggle(false)

  useEffect(()=> {
    console.log(state.users.isAuthenticated)
  },[])

   const handleSubmit = (event) => {
        try {
        event.preventDefault()
        if (email !== '' && senha !== '') {
            if(
                email === Authentication.email && senha === Authentication.password ||
                email === Authentication2.email && senha === Authentication2.password
                )
            { 
              
              actions.updateUsersState('username', email)
              actions.updateUsersState('password', senha)
              actions.updateUsersState('isAuthenticated', true)
              alert('voce está logado');
              // <Redirect to='/anamneses' />
              console.log(state.users)
              console.log(actions)

            } else  alert('voce errou  tente de novamente')
        }
        } catch (error) {
        console.log(error)
        }
    }



  const handlers = {
    email,
    updateEmail,
    senha,
    updateSenha,
    handleSubmit
  }

  return (
    <LoginScreen handlers={handlers} />
  )
}

export default Login