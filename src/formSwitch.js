

import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import Switch from "react-switch"

const FormSwitch = (props) => {
    return ( <div className="col-md-6">
        <label>{props.label}</label>
        <br />
        {/* <Switch 
            name={props.id} 
            id={props.id}
            disabled={props.disabled}
            onChange={props.onChange ? props.onChange : () => {}} 
            checked={props.checked ? props.checked : false} /> */}
        
    </div>)
}

Component.propTypes = {
    id : PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool
}

export default FormSwitch;