import "../Styles/FormFragenkatalog.css";

import React, { Component } from 'react';
import { useParams } from "react-router";


class FormFragenkatalog extends Component {

    render() {
        console.log("id", id);


        function Klettern() {
            const{id} = useParams();

        }

        function Ski() {
            
        }

        function Wandern() {
            
        }
        
        return (

            <div>
                <p>Lele {id} und Lolo</p>
            </div>
        )
    }
}

export default FormFragenkatalog;

