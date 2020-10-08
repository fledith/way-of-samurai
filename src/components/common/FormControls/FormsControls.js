import React from 'react';
import z from './FormsControls.module.css';
import warn from '../../../img/warn.png';
import done from '../../../img/warn.png';


const FormControl = Element => ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={`${z.formControl} + ${hasError && z.error}`}>
            <Element {...props} {...input} />
 
            { 
            hasError && <span><img src={warn} />{meta.error}</span>
            }
        </div>
    )
}

export default FormControl;