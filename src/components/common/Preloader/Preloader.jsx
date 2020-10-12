import React from 'react';
import preloader from '../../../img/preloader.svg';
import prePreloader from '../../../img/prePreloader.svg';


export const Preloader = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={preloader} /> 
        </div>
    )
}

export const PrePreloader = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={prePreloader} /> 
        </div>
    )
}
