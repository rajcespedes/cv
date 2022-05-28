import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import Resumen from "./resumen";


export default class ToCheck extends Component {

    render(){
        return(
            <div>
                <h1>Prueba</h1>
                <Resumen ref={(response) => (this.componentRef = response)} />
                <ReactToPrint 
                content={() => this.componentRef} 
                trigger={() => <button>Print</button>}
                />
            </div>
        );
    }

}

