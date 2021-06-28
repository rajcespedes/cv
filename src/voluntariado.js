import { set } from 'mongoose';
import { React, Component } from 'react';
import VoluntariadoElement from './voluntariado-element';

export default class Voluntariado extends Component {

    constructor(props) {
        super(props);

        this.onChangeVoluntariado = this.onChangeVoluntariado.bind(this);
        this.onChangeFechaInicio = this.onChangeFechaInicio.bind(this);
        this.onChangeFechaFin = this.onChangeFechaFin.bind(this);
        this.onChangeActualmente = this.onChangeActualmente.bind(this);
        this.onChangeTrabajo = this.onChangeTrabajo.bind(this);
        this.onChangeBeneficiado = this.onChangeBeneficiado.bind(this);
        this.addVoluntariado = this.addVoluntariado.bind(this);
        this.onChangeFunciones = this.onChangeFunciones.bind(this);


        this.state = {
            form: '',
            list: [],
            fechaInicio: Date.Now,
            fechaFin: Date.Now,
            checked: true,
            visible: 'invisible',
            trabajo: '',
            beneficiado: '',
            counter: 0,
            funciones: ''
        }

        
    }


    onChangeVoluntariado(e){

        if(e.target.value == 'Si'){
            this.setState({
                visible: 'visible'
            });
        } else {
            this.setState({
                visible: 'invisible'
            });    
        }

    }

    onChangeFechaInicio(e){
        this.setState({
            fechaInicio: e.target.value
        });
    }

    onChangeFechaFin(e){
        this.setState({
            fechaFin: e.target.value
        });
    }

    onChangeActualmente(e){

        if(this.state.checked == true){
            this.setState({
                checked: false,
                fechaFin: 'Actualmente'
            });
        } else {
            this.setState({
                checked: true
            });    
        }
    }

    
    onChangeTrabajo(e){
        this.setState({
            trabajo: e.target.value
        });
    }

    onChangeBeneficiado(e){
        this.setState({
            beneficiado: e.target.value
        });
    }

    addVoluntariado(e){


        var voluntariadoList = this.state.list;     

        voluntariadoList.unshift(
            <VoluntariadoElement 
                key={this.state.counter}
                trabajo={this.state.trabajo}
                beneficiado={this.state.beneficiado}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                funciones={this.state.funciones}
            />
        );

        this.setState({
            list: voluntariadoList,
            counter: this.state.counter + 1
        });

        
    }

    onChangeFunciones(e){
        this.setState({
            funciones: e.target.value
        });
    }

    render() {
        
        return(
            <div>
                <h1>Voluntariado</h1>
                <p>¿Has hecho trabajo voluntario?</p>
                 <div onChange={this.onChangeVoluntariado}>
                    Si <input type="radio" name="voluntariado" value="Si"/> No <input type="radio"  name="voluntariado" value="No"/>    
                </div>
                <div className={this.state.visible}>
                <div className="row">
                        <div className="col">
                            <label className="mr-1">Trabajo realizado</label>
                            <input type="text" onChange={this.onChangeTrabajo} />
                        </div>
                        <div className="col">
                            <label className="mr-1">Beneficiado (persona o institución)</label>
                            <input type="text" onChange={this.onChangeBeneficiado} />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col d-flex align-items-center">
                            <label className="mr-1">Funciones</label>
                            <textarea rows="3" onChange={this.onChangeFunciones}></textarea> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="mr-1">Fecha Inicio</label>
                            <input type="date" onChange={this.onChangeFechaInicio}/>
                        </div>
                        <div className="col">
                            <label className="mr-1">Fecha Fin</label>
                            <input className="mr-1" type="date" onChange={this.onChangeFechaFin}  disabled={!this.state.checked} />  
                            Actualmente <input type="checkbox" onChange={this.onChangeActualmente} />
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <button onClick={this.addVoluntariado} className="btn btn-info mb-2">Agregar</button>
                        </div>
                    </div>
                    <hr /> 
                </div>                   
                <div>
                    {this.state.list}               
                </div>
                
            </div>
        );

    }

}   