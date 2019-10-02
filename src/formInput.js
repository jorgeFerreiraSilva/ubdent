import React, { Component} from 'react';
import { MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';

const  FormInput = (props) => {
    return (<MDBInput 
        label={props.label}
        icon={props.icon}
        group={props.group}  
        id={props.id}
        disabled={props.disabled}
        type={props.typeInput}
        value={props.value ? `${props.value}` : ""} 
        onChange={event => props.onChange(event)}
        maxLength={props.maxLength}
        min={props.min}
        max={props.max}
        className="form-control"></MDBInput>)
}

Component.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    group: PropTypes.bool,
    id: PropTypes.any,
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
}

export default FormInput