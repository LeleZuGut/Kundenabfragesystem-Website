import React from 'react';
import { useParams } from 'react-router';


const FormFragenKatalog = () =>{
    const{id} = useParams();

    return(
        <div>Id:{id}</div>
    );
}

export default FormFragenKatalog;


