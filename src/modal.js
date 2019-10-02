import React, {Component} from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Modal extends Component {
    render(){
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                    <MDBModalHeader toggle={this.props.toggle}>Modal</MDBModalHeader>
                    <MDBModalBody>
                            {this.props.campos}
                    </MDBModalBody>
                    <MDBModalFooter>
                        
                        <MDBBtn color="danger" outline onClick={this.props.toggle}>{this.props.labelDanger ? this.props.labelDanger : "Fechar"}</MDBBtn>
                        <MDBBtn color="primary" outline onClick={this.props.handleFormTabela}>{this.props.labelSucesso ? this.props.labelSucesso : "Salvar"}</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        )
    }

}

export default Modal