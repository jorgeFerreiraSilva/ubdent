
import React, {Component} from 'react';
import { MDBSelect } from 'mdbreact';
import PropTypes from 'prop-types';

const FormSelect = (props) => {
    return (<div key={`MDBSelect${props.id}`}>
        <MDBSelect
            color="primary"
            search
            multiple={props.multiple}
            id={props.id}
            disabled={props.disabled}
            options={props.options}
            getTextContent={(value)=>props.onChangeText(value,props.id)}
            getValue={(value) => props.onChange(value,props.id)}
            selected="Escolha alguma opção" 
        />
        <label>{props.label}</label>
    </div>)
}

Component.propTypes = {
    id : PropTypes.string,
    multiple: PropTypes.bool,
    options: PropTypes.array,
    onChangeText: PropTypes.func,
    onChange: PropTypes.func
}

export default FormSelect;