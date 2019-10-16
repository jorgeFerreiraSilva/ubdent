import React from 'react'
// import { isAuthenticated } from './auth'
import Login from './Controllers/login.controller'
import Dashboard from './Controllers/dashboard.controller'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import FormProduto from './forms/formProduto'
import useGlobal from './Store'

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
        )
      }
    />
  )
}
const Routes = () => {
  const [state] = useGlobal()
  return(
  <Router>
    <Switch>
      <Route 
        exact 
        path='/'
        component={ () => <Login /> } />
      <PrivateRoute
        path='/anamneses'
        component={ () =>  <Dashboard /> } />
      <PrivateRoute
       path='/form'
       component={ () => <FormProduto /> } />
    </Switch>
  </Router>
)
      }

export default Routes;
