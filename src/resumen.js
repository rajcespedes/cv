import { React, Component } from 'react';


export default class Resumen extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.location.state.passDatos);
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.nombres}</label>
                    </div>
                    <div className="col">
                        <label>{this.props.location.state.passDatos.apellidos}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.ocupacion}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.barrio}</label>                   
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.email}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Licencia de conducir</label>
                    </div>
                    <div className="col">
                        <label>{this.props.location.state.passDatos.licencia == 1 ? "Motores (Cat 1)" :
                        this.props.location.state.passDatos.licencia == 2 ? "Vehículos livianos (Cat 2)" :
                        this.props.location.state.passDatos.licencia == 3 ? "Vehículos pesados: menos de 2 ejes (Cat 3)" :
                        this.props.location.state.passDatos.licencia == 4 ? "Autobuses y camiones de m[as de 2 (Cat 4)" :
                        this.props.location.state.passDatos.licencia == 5 ? "Operador de equipos especiales: motoniveladora, retroexcavadora, etc. (Cat 5)" : "No tengo"}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Celular</label>
                    </div>
                    <div className="col">
                        <label>{this.props.location.state.passDatos.celular}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Teléfono</label>
                    </div>
                    <div className="col">
                        <label>{this.props.location.state.passDatos.telefono}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.vehiculo == "Si" ? "Vehículo propio" : ""}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.traslado == "Si" ? "Disponible para traslado" : ""}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.location.state.passDatos.passPasantia}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.location.state.passDatos.passLaboral.map(e => 
                        <div>
                            <label>{e.laboralPuesto}</label> <br/>
                            <label>{e.laboralEmpresa}</label> <br/>
                            <label>{e.laboralArea}</label> <br/>
                            <label>Fecha inicio</label> <label>{e.laboralFechaIngreso}</label> <br/>
                            <label>Fecha fin</label> <label>{e.laboralFechaSalida}</label> <br/>
                        </div>)}
                        <hr></hr> 

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* <label>{this.props.location.state.passDatos.passVoluntariado}</label> */}
                    </div>
                </div>
            </div>
        );
    }

}  