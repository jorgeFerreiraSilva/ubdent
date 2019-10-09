import React, {Component} from 'react';
import PropTypes from 'prop-types';

const FormLabel = (props) => {
    return ( <div key={`label${props.id}`}>
            <h5 class="text-dark">{props.label}</h5>
    </div>)
}

Component.propTypes = {
    id : PropTypes.string,
    label: PropTypes.string
}

export default FormLabel;
