import React from 'react';
import { useParams } from 'react-router';


const FormFragenKatalog = () =>{
    const WandernURL= "/fragen/Wandern";
    const SkiURL= "/fragen/Ski";
    const KletternURL = "/fragen/Klettern";
    const currentURL= window.location.pathname;

    if (currentURL == WandernURL) {

        return(
            <div>
                <h1>Wandern is geil</h1>
            </div>
        );
        
    } else if(currentURL == SkiURL) {
        
        return(
            <div>
                <h1>Ski is geil</h1>
            </div>
        );
    }else if(currentURL==KletternURL){
        return(
            <div>
                <h1>Klettern is geil</h1>
            </div>
        );  
    }

    
}

export default FormFragenKatalog;


