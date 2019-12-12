import React, { useEffect } from 'react'
import useGlobal from '../Store'
import SignUp from '../Screens/signup.screen'
import useInputState from '../useInputState'
// import { Authentication, Authentication2 } from '../login.mock'
import { useHistory } from 'react-router-dom'
import AuthService from '../auth-service'

function Login () {
  const [state, actions] = useGlobal()
  const [email, updateEmail] = useInputState('')
  const [senha, updateSenha] = useInputState('')
  const history = useHistory()

//   useEffect(() => {
//   //   console.log(state.users.isAuthenticated)
//   if(state.users.isAuthenticated) {
//     history.push('/')
//   }
//   }, [state.users.isAuthenticated])

  const signup = (name, password) => {
    const service = new AuthService()
    service.signup(name, password)
      .then((response) => {
        if (response.status === 200) {
          actions.updateUsersState('password', '')
        }
      })
      .catch(() => { return false })
  }

  const handleSubmit = (event) => {
    try {
      event.preventDefault()

      if (email !== '' && senha !== '') {
        actions.updateUsersState('username', email)
        actions.updateUsersState('password', senha)
        signup(email, senha)
        console.log(useGlobal)
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
    <SignUp handlers={handlers} />
  )
}

export default Login
