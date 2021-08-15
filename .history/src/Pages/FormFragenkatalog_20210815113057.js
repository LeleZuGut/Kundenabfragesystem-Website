import React from 'react';
import { useParams } from 'react-router';


const FormFragenKatalog = () =>{
    const WandernURL= "/fragen/Wandern";
    const SkiURL= "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL= window.location.pathname;

    if (currentURL == WandernURL) {

        return(
            <div>Id:</div>
        );
        
    } else {
        
    }

    
}

export default FormFragenKatalog;


