import React from 'react';
import preloader from '../../../img/preloader.svg';


let Preloader = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={preloader} /> 
        </div>
    )
}

export default Preloader;