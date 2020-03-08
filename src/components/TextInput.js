import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props){
    let wrapperClass = "form-group";
    if(props.error.length > 0){
        wrapperClass += ' has-error';
    }
    return(
        <div className={wrapperClass}>
                <label>{props.label}</label>
                <div className="field">
                <input id={props.id} className="form-control" type="text" name={props.name}
                 onChange={props.onChange}  value={props.value}/>
                </div> 
                {props.error && <div className="alert alert-danger">{props.error}</div>}   
        </div>
    );
}

TextInput.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

TextInput.defaultProps ={
    error: ''
}

export default TextInput;