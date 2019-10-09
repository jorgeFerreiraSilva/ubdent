import React, {Component} from "react";
import { Container ,Row, Col, Card, CardBody, MDBInput, MDBBtn, Fa } from 'mdbreact';
import FormHeader from "./formHeader"
import FormSwitch from "./formSwitch"
import   ExcluirModal from "./ExcluirModal"

class CriaForm extends Component{
    
    excluir(){

    }
    
    render(){
        let ativo = this.props.values && this.props.values.ativo ? this.props.values.ativo : false
        let values = this.props.values && this.props.values ? this.props.values : []
        return (
        <Container style={{marginTop: '1%'}}>
            <Row key="rowContainer">
                <Col>
                    <Card narrow>
                    {   
                        this.props.header !== false &&
                        <FormHeader 
                            id={this.props.id}
                            nome={this.props.nome}
                            handleNovo={this.props.handleNovo}
                            handleListagem={this.props.handleListagem}  />
                        
                    }
                    <CardBody>
                        { this.props.campos !== undefined &&
                            <form 
                                className='needs-validation'
                                onSubmit={this.props.eventSubmit}
                                noValidate
                                id={this.props.nome}
                                key={this.props.nome}>
                                    <div className="dark-grey-text"></div>
                                        <MDBInput
                                            type="hidden"
                                            value={this.props.id}
                                            id="id"
                                        />
                                        {this.props.campos.map((row, i) => {
                                            if(typeof row === "object" 
                                            && row.map !== undefined
                                            ){
                                                return <Row key={`row${i}`}>
                                                
                                                    {row.map(campo => {
                                                    if(campo.type !== undefined && 
                                                        typeof campo.type !== "object"){
                                                        return <div className={campo.classDiv}
                                                        key={`campoType${campo.id}`}>
                                                                    <campo.type
                                                                        label={campo.label}
                                                                        icon={campo.icon ? campo.icon : "building" }
                                                                        group  
                                                                        id={campo.id} name={campo.id}  
                                                                        typeInput={campo.typeInput ? campo.typeInput : "text"} 
                                                                        value={values[campo.id]}
                                                                        disabled={campo.disabled !== undefined ? campo.disabled : false }
                                                                        onChange={campo.onChangeEvent}
                                                                        onClick={campo.onClick}
                                                                        excluir={campo.excluir}
                                                                        maxLength={campo.maxLength}
                                                                        min={campo.min}
                                                                        max={campo.max}
                                                                        client={campo.client}
                                                                        multiple={campo.multiple ? campo.multiple : false}
                                                                        onChangeText={(value)=>
                                                                            (campo.onChangeText) &&
                                                                            campo.onChangeText(value,campo.id)}
                                                                        options={this.props.options ? this.props.options[campo.id] : null}
                                                                        className="form-control"
                                                                        valuesForm = {this.props.valuesForm ? this.props.valuesForm  : null}
                                                                        optionsForm = {this.props.optionsForm ? this.props.optionsForm[campo.id] : null}
                                                                        camposForm={campo.camposForm ? campo.camposForm : null}
                                                                        colunas={campo.colunas ? campo.colunas : null}
                                                                    ></campo.type>
                                                        </div>
                                                        }
                                                            else{
                                                                return (<div name="paramInvalido" key="paramInvalido">
                                                                    
                                                                </div>)
                                                            }
                                                    })}
                                                </Row>
                                            }else{
                                                return (<Row name="objInvalido" key="objInvalido">
                                                    <p>Tipo de entrada de objeto Inválida</p>
                                                </Row>)
                                            }
                                        })}
                                        {
                                        this.props.radioAtivo !== false 
                                        && this.props.onRadioEvent !== undefined &&
                                         <Row key="ativoRow">
                                            {/* <FormSwitch
                                                label = "Ativo?"
                                                id = "ativo"
                                                onChange = {this.props.onRadioEvent}
                                                checked={ativo}
                                            /> */}
                                            { this.props.onDeleteClick && this.props.id &&
                                                <div className="text-center py-4 mt-3">
                                                    <ExcluirModal executarExclusao={this.props.onDeleteClick}></ExcluirModal>
                                                </div>
                                            }
                                            <div className="text-center py-4 mt-3">
                                                <MDBBtn color="indigo" type="submit"><Fa icon="save" /> Salvar  </MDBBtn>
                                            </div>
                                        </Row>
                                        }  
                                        
                                </form>
                            }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
        )
    }

}

export default CriaForm