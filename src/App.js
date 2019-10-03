import React from 'react'
import Login from './login.screen'
import SideNavPage from './dashboard.screen'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import FormProduto from './formProduto'
// import logo from './logo.svg'
// import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/anamneses" component={SideNavPage} />
        <Route path="/form" component={FormProduto} />
      </div>
    </Router>
      </div>
  )
}


export default App;
