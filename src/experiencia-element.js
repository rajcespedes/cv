import {React, Component} from 'react';


export default class Element extends Component {

    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                <div className="row">                    
                    <div className="col">
                        <label  className="font-weight-bold">Puesto</label>
                        <label className="ml-1">{this.props.puesto}</label>
                    </div>
                    <div className="col">
                        <label className="font-weight-bold">Empresa</label>
                        <label className="ml-1">{this.props.empresa}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="font-weight-bold">Área/Sector/Departamento</label>
                        <label className="ml-1">{this.props.area}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label className="font-weight-bold mr-1"> { this.props.funciones ?  'Funciones' : '' } </label>
                        <ul className="list-group list-group-flush">
                        { this.props.funciones ? this.props.funciones.map( i => <li key={this.props.counter} className='list-group-item'>{i}</li> ) : '' } 
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label className="font-weight-bold">Fecha Ingreso</label>
                        <label className="ml-1">{this.props.fechaIngreso}</label>
                    </div>
                    <div className="col">
                        <label className="font-weight-bold">Fecha Salida</label>
                        <label className="ml-1">{this.props.fechaSalida ? this.props.fechaSalida : 'Actualmente' }</label>
                    </div>   
                </div>
                <hr />
            </div>
        );
    }

}