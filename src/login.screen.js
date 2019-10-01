import React from 'react'
import '../src/css/bootstrap.min.css'
import '../src/css/startmin.css'
import '../src/css/metisMenu.min.css'
import '../src/css/font-awesome.min.css'

function LoginScreen() {
    return (
    <>
    <body>
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <fieldset>
                                <div className="form-group">
                                    <input className="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input name="remember" type="checkbox" value="Remember Me" />
                                    </label>
                                </div>
                                <a href="index.html" className="btn btn-lg btn-success btn-block">Login</a>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    </>
    )
  }

  export default LoginScreen 
