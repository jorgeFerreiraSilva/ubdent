import React from 'react'
import Login from './Controllers/login.controller'
import SignUp from '../src/Controllers/signup.controller'
import Dashboard from './Controllers/dashboard.controller'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import FormProduto from './forms/formProduto'
import useGlobal from './Store'
import AuthService from '../src/auth-service'

// const fetchUser = () => {
//   const service = new AuthService()
//   service.loggedin()
//     .then((response) => {
//       if (response.status === 200) return true
//       if (response.status !== 200) return alert('nao autorizado')
//     })
//     .catch(() => {
//       return false
//     })
// }

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useGlobal()
  return (
    <Route
      {...rest}
      render={props =>
        state.users.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )}
    />
  )
}
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Login />}
        />
        <Route
          exact
          path='/signup'
          component={() => <SignUp />}
        />
        <PrivateRoute
          path='/anamneses'
          component={() => <Dashboard />}
        />
        <PrivateRoute
          path='/anamnese/:cpf'
          component={() => <FormProduto />}
        />
      </Switch>
    </Router>
  )
}

export default Routes
