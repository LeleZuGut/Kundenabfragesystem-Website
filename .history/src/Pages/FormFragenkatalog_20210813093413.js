import "../Styles/FormFragenkatalog.css";

import React, { Component } from 'react'
import { withRouter } from "react-router";


class FormFragenkatalog extends Component {

   
    render() {

        const {id}= this.props.match.params;

        function Klettern() {
            
        }

        function Ski() {
            
        }

        function Wandern() {
            
        }
        
        return (

            <div>
                <p>Lele {id}</p>
            </div>
        )
    }
}

export default withRouter(FormFragenkatalog);

