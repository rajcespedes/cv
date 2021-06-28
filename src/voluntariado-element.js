import {React, Component} from 'react';


export default class VoluntariadoElement extends Component {

    constructor(props) {

        super(props);

    }

    render(){
        return(
            <div>
                <div>
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold mr-1" >Trabajo realizado</label>
                            <label>{this.props.trabajo}</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold mr-1">Beneficiado (persona o institución)</label>
                            <label>{this.props.beneficiado}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="font-weight-bold mr-1">Funciones</label>
                            <ul className="list-group list-group-flush">
                            
                                {this.props.funciones.map( e => <li>{e}</li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold mr-1">Fecha Inicio</label>
                            <label>{this.props.fechaInicio}</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold mr-1">Fecha Fin</label>
                            <label>{this.props.fechaFin}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}