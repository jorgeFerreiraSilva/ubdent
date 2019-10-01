import React, { useState } from 'react'
// import MaterialTable from 'material-table'
// import '@material-ui/core'
// import Table from './table'
import '../src/css/bootstrap.min.css'
import '../src/css/metisMenu.min.css'
import '../src/css/startmin.css'
import '../src/css/font-awesome.min.css'

function MainScreen() {
    // const [state, setState] = useState({
    //     columns: [
    //       { title: 'Name', field: 'name' },
    //       { title: 'Surname', field: 'surname' },
    //       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    //       {
    //         title: 'Birth Place',
    //         field: 'birthCity',
    //         lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //       },
    //     ],
    //     data: [
    //       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //       {
    //         name: 'Zerya Betül',
    //         surname: 'Baran',
    //         birthYear: 2017,
    //         birthCity: 34,
    //       },
    //     ],
    //   })
    
    return (
    <body>
        <div id="wrapper">

    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="navbar-header">
        <a className="navbar-brand" href="index.html">Startmin</a>
    </div>

    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
    </button>

    <ul className="nav navbar-nav navbar-left navbar-top-links">
        <li><a href="#"><i className="fa fa-home fa-fw"></i> Website</a></li>
    </ul>

    <ul className="nav navbar-right navbar-top-links">
        <li className="dropdown navbar-inverse">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-bell fa-fw"></i> <b className="caret"></b>
            </a>
            <ul className="dropdown-menu dropdown-alerts">
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-comment fa-fw"></i> 
                            <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-twitter fa-fw"></i>
                            <span className="pull-right text-muted small">12 minutes ago</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-envelope fa-fw"></i>
                            <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-tasks fa-fw"></i>
                            <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-upload fa-fw"></i>
                            <span className="pull-right text-muted small">4 minutes ago</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="text-center" href="#">
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </li>
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-user fa-fw"></i> secondtruth <b className="caret"></b>
            </a>
            <ul className="dropdown-menu dropdown-user">
                {/* <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                </li>
                <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                </li> */}
                <li className="divider"></li>
                <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                </li>
            </ul>
        </li>
    </ul>

    <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
            <ul className="nav" id="side-menu">
                <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                        <input type="text" className="form-control" placeholder="Search..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </li>
                <li>
                    <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> Anamnese</a>
                </li>
                {/* <li>
                    <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li>
                            <a href="flot.html">Flot Charts</a>
                        </li>
                        <li>
                            <a href="morris.html">Morris.js Charts</a>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <a href="tables.html"><i className="fa fa-table fa-fw"></i> Tables</a>
                </li> */}
                {/* <li>
                    <a href="forms.html"><i className="fa fa-edit fa-fw"></i> Forms</a>
                </li> */}
                {/* <li>
                    <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li>
                            <a href="panels-wells.html">Panels and Wells</a>
                        </li>
                        <li>
                            <a href="buttons.html">Buttons</a>
                        </li>
                        <li>
                            <a href="notifications.html">Notifications</a>
                        </li>
                        <li>
                            <a href="typography.html">Typography</a>
                        </li>
                        <li>
                            <a href="icons.html"> Icons</a>
                        </li>
                        <li>
                            <a href="grid.html">Grid</a>
                        </li>
                    </ul>
                </li> */}
                {/* <li>
                    <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li>
                            <a href="#">Second Level Item</a>
                        </li>
                        <li>
                            <a href="#">Second Level Item</a>
                        </li>
                        <li>
                            <a href="#">Third Level <span className="fa arrow"></span></a>
                            <ul className="nav nav-third-level">
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                {/* <li className="active">
                    <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                        <li>
                            <a className="active" href="blank.html">Blank Page</a>
                        </li>
                        <li>
                            <a href="login.html">Login Page</a>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>
    </div>
</nav>

    <div id="page-wrapper">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Blank</h1>
                    <Table />
                </div>
            </div>
        </div>
    </div>

    </div>
</body>
    )
}

export default MainScreen