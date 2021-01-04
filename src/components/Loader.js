import React from 'react';
import LoaderGif from '../assets/loader.gif';

const Loader=()=>{
    return (
        <div className="loader-container">
            <div className="loader">
                <img src={LoaderGif} alt="loading"/>
            </div>
        </div>
    )
}

export default Loader