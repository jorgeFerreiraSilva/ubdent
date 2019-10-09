import React from "react";
import { CardHeader,MDBBtn,Fa  } from 'mdbreact';
import { Redirect, Link } from "react-router-dom"

const FormHeader = props => {
    return (<CardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
    <div></div>
    <h4 className="white-text mx-3 center"><Fa icon="male" /> {!props.id && 'Novo'} {props.id && 'Alterar'} {props.nome}</h4>
    <div>
        {/* <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={props.handleNovo}>
            NOVO
        </MDBBtn> */}
        {/* <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={props.handleNovo}>
            <Fa icon="institution" className="mt-0" />
        </MDBBtn> */}
       
       <Link to='/anamneses'>
           <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={{}}>
            <Fa icon="list" className="mt-0" />
        </MDBBtn>
        </Link>
    </div>
    
    </CardHeader>)
}

export default FormHeader;