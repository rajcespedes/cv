import {React, Component} from 'react';


export default class Lista extends Component {

    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div className="row">
                        <div className="col">
                            <label  className="font-weight-bold">Puesto</label>
                            <label className="ml-1">{this.state.puesto}</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Empresa</label>
                            <label className="ml-1">{this.state.empresa}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold">Área/Sector/Departamento</label>
                            <label className="ml-1">{this.state.area}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold">Fecha Ingreso</label>
                            <label className="ml-1">{this.state.fechaIngreso}</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Fecha Salida</label>
                            <label className="ml-1">{this.state.fechaSalida ? this.state.fechaSalida : 'Actualmente' }</label>
                        </div>   
                    </div>
                    <hr />
            </div>       
        );
    }

}