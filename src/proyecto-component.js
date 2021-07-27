import {React, Component } from 'react';

export default class ProyectoComponent extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.nombreProyecto}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.descripcionProyecto}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="mr-1 font-weight-bold">Fecha inicio</label>
                        <label>{this.props.fechaInicioProyecto}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6  border-bottom">
                        <label className="mr-1 font-weight-bold">Fecha fin</label>
                        <label>{this.props.fechaFinProyecto}</label>             
                    </div>
                </div>
            </div>

        );
    }
}