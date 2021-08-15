import React from 'react';
import { useParams } from 'react-router';


const FormFragenKatalog = () =>{

    const currentURL= window.location.pathname;

    return(
        <div>Id:{currentURL}</div>
    );
}

export default FormFragenKatalog;


