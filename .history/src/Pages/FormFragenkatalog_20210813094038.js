import "../Styles/FormFragenkatalog.css";

import React, { Component } from 'react'
import { withRouter } from "react-router";


class FormFragenkatalog extends Component {

    render() {
        const{id} = props.match.params;
        console.log("id", id);


        function Klettern() {
            
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

export default withRouter(FormFragenkatalog);

