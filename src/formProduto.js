import React, {Component} from "react";
// import {withRouter} from 'react-router-dom'
import {MDBBtn} from 'mdbreact';
import Loading from './loading';
import CriaForm  from  './CriaForm'
import moment from 'moment';
import 'moment/locale/pt-br';
import {FormProvider} from './FormContext'
import FormSelect  from './formSelect' 
import FormInput  from  './formInput'
import { Messages } from './messages'

class FormProduto extends Component {



    constructor(props) {
        super(props)

        let optionsForm = {
            tabelas_preco : {
                tabelas_preco_id : this.props.tabela_preco
            }
        }

        let campos = [
            [
                {
                    "id":"nome",
                    "label": "Nome",
                    "classDiv": "col-md-6",
                    "type": FormInput,
                    icon: "product-hunt",
                    // value: props.dados.nome,
                    onChangeEvent: this.handleChange
                },            
                {
                    "id":"codigo_interno",
                    "label": "Código Interno",
                    "classDiv": "col-md-6",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "id-card",
                    // value: props.dados.codigo_interno,
                    onChangeEvent: this.handleChange
                },  
            ],
            [
                {
                    "id":"erp_id",
                    "label": "ERP ID",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "id-card",
                    // value: props.dados.erp_id,
                    onChangeEvent: this.handleChange
                },            
                {
                    "id":"sku",
                    "label": "SKU",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    icon: "id-card",
                    // value: props.dados.sku,
                    onChangeEvent: this.handleChange
                },  
           
                {
                    "id":"unidade_medida_id",
                    "label": "Unidade de Medida",
                    "classDiv": "col-md-4",
                    "type": FormSelect,
                    // options: props.unidade_medida,
                    onChangeEvent: this.handleChangeSelect
                }, 
            ],
            [           
                {
                    "id":"tipo_produto_id",
                    "label": "Tipo de Produto",
                    "classDiv": "col-md-4",
                    "type": FormSelect,
                    // options: props.tipo_produto,
                    onChangeEvent: this.handleChangeSelect
                },  
                {
                    "id":"classe_produto_id",
                    "label": "Classe de Produto",
                    "classDiv": "col-md-4",
                    "type": FormSelect,
                    // options: props.classe_produto,
                    onChangeEvent: this.handleChangeSelect
                }, 
                {
                    "id":"tipo_massa_produto_id",
                    "label": "Tipo de massa Produto",
                    "classDiv": "col-md-4",
                    "type": FormSelect,
                    // options: props.tipo_massa_produto,
                    onChangeEvent: this.handleChangeSelect
                },
            ],
            [
                {
                    "id":"tipo_atributo_ids",
                    "label": "Atributo",
                    "classDiv": "col-md-4",
                    "multiple":true,
                    "type": FormSelect,
                    // options: props.tipo_atributo,
                    onChangeEvent: this.handleChangeSelect
                }, 
                {
                    "id":"quantidade_por_pacote",
                    "label": "Quantidade Por Pacote",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "text-height",
                    // value: props.dados.quantidade_por_pacote,
                    onChangeEvent: this.handleChange
                }, 
                {
                    "id":"peso",
                    "label": "Peso (KG)",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "balance-scale",
                    // value: props.dados.peso,
                    onChangeEvent: this.handleChange
                },  
            ],
            [
                {
                    "id":"altura",
                    "label": "Altura (Centimetros)",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "text-height",
                    // value: props.dados.altura,
                    onChangeEvent: this.handleChange
                },
                {
                    "id":"largura",
                    "label": "Largura (Centimetros)",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "text-width",
                    // value: props.dados.largura,
                    onChangeEvent: this.handleChange
                },
                {
                    "id":"comprimento",
                    "label": "Comprimento (Centimetros)",
                    "classDiv": "col-md-4",
                    "type": FormInput,
                    typeInput: "number",
                    icon: "text-width",
                    // value: props.dados.comprimento,
                    onChangeEvent: this.handleChange
                },
            ]
        ]

    
        
        let values = [];
        let options = [];

      
        campos.map(row =>
            {
                return row.map(campo => {
                    options[campo.id] = (campo.options)
                    values[campo.id] = (campo.values)
                    return true;
                })
            }
        );



        this.state = {
            produto: this.props.dados,
            loading: false,
            update: false,
            create: false,
            formData: {},
            error: {},
            campos: campos,
            values: values,
            options: options,
            optionsTabelaPreco: optionsForm,
            tabela_preco: this.props.tabelas_preco_produto,
        }
    }

    handleChange = (event) => {
        this.setState({
            values: {...this.state.values, [event.target.id]: event.target.value }
        })
    }

    handleChangeSelect = (event,id) => {
        this.setState({
            values: {...this.state.values, [id]: event  }
        })
    }

  

    handleChangeDataPicker = (event,id) => {
        let date = null;
        if(event != null){
             date = moment(event._d).format("YYYY/MM/DD");
        }
        this.setState({
            values: {...this.state.values, [id]: date  }
        })
    }


    onRadioEvent = (checked,event,id)=>{
        this.setState({
            values: {...this.state.values, [id]: !this.state.values['ativo'] }
        })
    }

    excluir = (id) => {
        let tabelas_preco = this.state.values['tabelas_preco'] ? this.state.values['tabelas_preco'] : []
        let tabelaNova = tabelas_preco.filter(function(value, index, arr){

            return value.id != id;
        });


        let tabelaPreco = this.state.tabela_preco;
        
        delete tabelaPreco[id.toString()];
        
        this.setState({
            values:  {...this.state.values, ["tabelas_preco"] : tabelaNova},
            tabela_preco: tabelaPreco,
        })
        
       
    }

    handleAddTabela = (id,textTabelaPreco,valuesForm)=>{
        
        let valuesTab = this.state.values['tabelas_preco'] ? this.state.values['tabelas_preco'] : []
        valuesTab.push( 
            {
                'id': id,
                'nome': textTabelaPreco,
                'preco': valuesForm['preco'],
                'action': <MDBBtn color="red" onClick={() => this.excluir(id) } outline size="sm">Excluir</MDBBtn>,
        })

       
        let tabelaPreco = {...this.state.tabela_preco}
        tabelaPreco[valuesForm['tabelas_preco_id'].toString()] = {
            "preco" : valuesForm['preco']
        }

        this.setState({
            values:  {...this.state.values, ["tabelas_preco"] : valuesTab},
            tabela_preco: tabelaPreco,
        })
    }

   

    handleSubmit = (event) => {
        event.preventDefault()
        event.target.className += ' was-validated';
        
        if(!this.validaCampos()){
            const errorData = {
                codigo: 400,
                mensagem: JSON.stringify([{
                    campos: "É necessario preencher o campo de nome do produto"
                }])
            }

            Messages(errorData)
            return;
        }
       
        this.setState({
            loading: true,
        })


        const {id,nome,codigo_interno, erp_id, sku, unidade_medida_id, tipo_produto_id,
            classe_produto_id,tipo_massa_produto_id,tipo_atributo_ids,peso, altura, largura,
             comprimento,quantidade_por_pacote, ativo} = this.state.values;

        const formData = {
            id,
            nome,
            codigo_interno: codigo_interno ? codigo_interno : 0,
            erp_id: erp_id ? parseInt(erp_id) : 0,
            sku,
            unidade_medida_id: unidade_medida_id ? unidade_medida_id : 0,
            tipo_produto_id:tipo_produto_id ? tipo_produto_id : 0 ,
            classe_produto_id:classe_produto_id? classe_produto_id : 0 ,
            tipo_massa_produto_id: tipo_massa_produto_id ? tipo_massa_produto_id : 0,
            tipo_atributo_ids: tipo_atributo_ids ? tipo_atributo_ids : 0,
            quantidade_por_pacote: quantidade_por_pacote ? quantidade_por_pacote : 0,
            peso,
            altura,
            largura,
            comprimento,
            ativo: ativo ? true : false,
            tabela_preco_ids:  this.state.tabela_preco ? (this.state.tabela_preco) : []
        }

        if (formData.id) {
            this.props.executaAtualizacao(formData)
        } else {
            this.props.executaCriacao(formData)
        }
        
        this.setState({
            loading: false,
        })
        
    }

    validaCampos(){
        return this.state.values.nome;
    }

    componentWillMount() {
        if (this.state.values === null) {
            this.setState({
                values: {
                    nome: "",
                    codigo_interno:  0,
                    erp_id: null,
                    sku: null,
                    unidade_medida_id:null,
                    tipo_massa_produto_id: null,
                    tipo_produto_id: null,
                    classe_produto_id: null,
                    tipo_atributo_ids: null,
                    peso: null,
                    altura: null,
                    largura: null,
                    comprimento: null,
                    ativo: false,
                    tabela_preco_ids:  []
                }
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props !== nextProps) {
         
            let options = {...this.state.options};
            options['unidade_medida_id'] = nextProps.unidade_medida;
            options['tipo_produto_id'] = nextProps.tipo_produto;
            options['classe_produto_id'] = nextProps.classe_produto;
            options['tipo_massa_produto_id'] = nextProps.tipo_massa_produto;
            options['tipo_atributo_ids'] = nextProps.tipo_atributo;
            let optionsForm = {
                tabelas_preco : {
                    tabelas_preco_id : nextProps.tabela_preco
                }
                
            }
            options['tabelas_preco'] = optionsForm;


            this.setState({
                values: this.props.dados,
                options:  options,
                optionsTabelaPreco: optionsForm,
                tabela_preco: nextProps.tabelas_preco_produto
            })
        }
     }

    handleNovoProduto(){
        this.props.history.push("/produto/novo")
    }

    handleEndereco(){
    }

    handleListagem(){
        this.props.history.push("/produto/")

    }

    onDeleteClick(){
        this.props.executaExclusao()
    }
    
    render(){
        return (
            <FormProvider>
                <CriaForm id={this.state.values.id} 
                    nome="Produto"
                    campos = {this.state.campos} 
                    values={this.state.values} 
                    options={this.state.options}
                    onRadioEvent={this.onRadioEvent}
                    handleNovo={() => this.handleNovoProduto()}
                    handleListagem={() => this.handleListagem()}
                    optionsForm={this.state.optionsTabelaPreco}
                    valuesForm={this.state.valuesForm}
                    onDeleteClick={() => this.onDeleteClick()}
                    eventSubmit={this.handleSubmit} />
                {this.state.loading && <Loading />}
            </FormProvider>
        )

    }


}

export default FormProduto