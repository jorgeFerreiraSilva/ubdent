import React from 'react'
import { CardHeader,MDBBtn,Fa  } from 'mdbreact'
import { useHistory } from 'react-router-dom'
import useGlobal from '../Store'

const FormHeader = props => {
    const history = useHistory()
    const [ state ] = useGlobal()
    console.log('to no foooorm', state)
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
           <MDBBtn outline rounded size="sm" color="white" className="px-2" onClick={() => history.push('/anamneses')}>
            <Fa icon="list" className="mt-0" />
        </MDBBtn>
    </div>
    
    </CardHeader>)
}

export default FormHeader;