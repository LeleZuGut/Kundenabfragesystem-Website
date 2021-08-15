import "../Styles/FormFragenkatalog.css";

import React, { Component } from 'react';
import { useParams } from "react-router";


class FormFragenkatalog extends Component {

    render() {


        function Klettern() {
            const{id} = useParams();
            console.log("Id", id);

        }

        function Ski() {
            
        }

        function Wandern() {
            
        }
        
        return (

            <div>
                <p>Lele {Klettern} und Lolo</p>
            </div>
        )
    }
}

export default FormFragenkatalog;

