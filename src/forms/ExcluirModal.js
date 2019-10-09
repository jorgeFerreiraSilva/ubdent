import  React from "react"
import Modal from "../modal"
import  FormLabel  from  './formLabel';
import {  MDBBtn, Fa } from 'mdbreact';
class ModalVendedor extends React.Component  {

    constructor(props) {
        super(props)
       
        this.state = {
            modal: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            values: {...this.state.values, [event.target.id]: event.target.value }
        }) 
    }


    handleFormTabela = () => {
        this.props.executarExclusao()
    }


    toggle = () => {
        this.setState(
            {modal: !this.state.modal}
        )
    }

    render(){
      
        return (<div>
       <MDBBtn color="red" type="button" onClick={this.toggle}><Fa icon="trash" /> Excluir  </MDBBtn>
        <Modal modal={this.state.modal} toggle={this.toggle} 
            labelDanger="Não"
            labelSucesso="Sim"
            handleFormTabela={this.handleFormTabela}
            campos={<FormLabel label="Você tem certeza que deseja realizar a exclusão? Caso isso seja efetuado não haverá mais possibilidade de recuperar esse cadastro.">

            </FormLabel>}/></div>)
    }

}

export default ModalVendedor;