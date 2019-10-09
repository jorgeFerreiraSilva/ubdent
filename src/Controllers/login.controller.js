import React, { useEffect } from 'react'
import useGlobal from '../Store'
import LoginScreen from '../Screens/login.screen'
import useInputState from '../useInputState'
import { Authentication, Authentication2 } from '../login.mock'
import { useHistory } from "react-router-dom"



function Login () {
  const [state, actions ] = useGlobal()
  const [ email, updateEmail, resetEmail ] = useInputState('')
  const [ senha, updateSenha, resetSenha ] = useInputState('')
  const history = useHistory()
  // const [loading, toggleLoading] = useToggle(false)

  useEffect(()=> {
    console.log(state.users.isAuthenticated)
  },[])

   const handleSubmit = (event) => {
        try {
        event.preventDefault()
        console.log('fydydyudyudyu');
        
        if (email !== '' && senha !== '') {
            if(
                email === Authentication.email && senha === Authentication.password ||
                email === Authentication2.email && senha === Authentication2.password
                )
            {             
              actions.updateUsersState('username', email)
              actions.updateUsersState('password', senha)
              actions.updateUsersState('isAuthenticated', true)
              console.log(state.users.username)
              console.log(state.users.password)
              console.log(actions)
              history.push('/anamneses')
              // alert('voce está logado');
              // console.log(useGlobal)

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