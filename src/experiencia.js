import { React, Component } from 'react';
import ExperienciaElement from './experiencia-element';


export default class Experiencia extends Component {

    constructor(props) {
        super(props);

        this.onChangePuesto = this.onChangePuesto.bind(this);
        this.onChangeEmpresa = this.onChangeEmpresa.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeFechaIngreso = this.onChangeFechaIngreso.bind(this);
        this.onChangeFechaSalida = this.onChangeFechaSalida.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeActualmente = this.onChangeActualmente.bind(this);
        this.onChangeFunciones = this.onChangeFunciones.bind(this);
        this.onChangeTipo = this.onChangeTipo.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

        this.state = {
            puesto: [],
            empresa: '',
            area: '',
            fechaIngreso: Date.Now,
            fechaSalida: Date.Now,
            counter: 0,
            list: [],
            checked: true,
            funciones: '',
            voluntariado: [],
            pasantia: [],
            tipo: ''
        };
    }

    onChangePuesto(e){
        this.setState({
            puesto: e.target.value
        });
    }

    onChangeEmpresa(e){
        this.setState({
            empresa: e.target.value
        });
    }

    onChangeArea(e){
        this.setState({
            area: e.target.value
        });
    }

    onChangeFechaIngreso(e){
        this.setState({
            fechaIngreso: e.target.value
        });
    }

    onChangeFechaSalida(e){
        this.setState({
            fechaSalida: e.target.value
        });
        
    }

    onChangeActualmente(e){
        
        if(!this.state.checked){
            this.setState({
                checked: true
            });
        } else {
            this.setState({
                checked: false,
                fechaSalida: 'Actualmente'
            });    
        }

    }

    onChangeFunciones(e){

        var regEx = /\w+/g;

        if(!e.target.value) {
            console.log('got nothing');             
        }
        
        this.setState({
            funciones: e.target.value.match(regEx)
        });

    }

    onChangeTipo(e){

        if(e.target.value === 'laboral'){
            this.setState({
                tipo: 'laboral'
            });
        } else if (e.target.value === 'voluntariado') {
            this.setState({
                tipo: 'voluntariado'
            });
        } else {
            this.setState({
                tipo: 'pasantia'
            });
        }
    } 

    onButtonClick(e){
        e.preventDefault();

        window.location='/educacion';

    }

    onSubmit(e){
        
        e.preventDefault();

        if(this.state.tipo === 'laboral'){

            var listHolder = this.state.list;

            listHolder.unshift(
                <ExperienciaElement 
                key={this.state.counter}
                puesto={this.state.puesto}
                empresa={this.state.empresa}
                fechaIngreso={this.state.fechaIngreso}
                fechaSalida={this.state.fechaSalida}
                area={this.state.area}
                funciones={this.state.funciones}
                />
            );    
        
            this.setState({
                list: listHolder,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipo === 'voluntariado'){

            var listVoluntariado = this.state.voluntariado;

            listVoluntariado.unshift(
                <ExperienciaElement 
                key={'v'+this.state.counter}
                puesto={this.state.puesto}
                empresa={this.state.empresa}
                fechaIngreso={this.state.fechaIngreso}
                fechaSalida={this.state.fechaSalida}
                area={this.state.area}
                funciones={this.state.funciones}
                />
            );

            this.setState({
                voluntariado: listVoluntariado,
                counter: this.state.counter + 1
            });



        } else {

            var listPasantia = this.state.pasantia;

            listPasantia.unshift(
                <ExperienciaElement 
                key={'p'+this.state.counter}
                puesto={this.state.puesto}
                empresa={this.state.empresa}
                fechaIngreso={this.state.fechaIngreso}
                fechaSalida={this.state.fechaSalida}
                area={this.state.area}
                funciones={this.state.funciones}
                />
            );

            this.setState({
                pasantia: listPasantia,
                counter: this.state.counter + 1
            });
            
        }
        
        // window.location = '/experiencia';

    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col">
                            <h1>Experiencia</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-2" onChange={this.onChangeTipo}>
                            <label className="font-weight-bold">Tipo de experiencia</label> <br/>
                            <input type="radio" name="tipoExperiencia" value='laboral'/> Laboral
                            <input type="radio" name="tipoExperiencia" value='voluntariado' className="ml-1"/> Voluntariado
                            <input type="radio" name="tipoExperiencia" value='pasantia' className="ml-1"/> Pasantía
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <label>Puesto</label> */}
                            <input placeholder='Puesto' className="ml-1" name='puesto' type="text" onChange={this.onChangePuesto}/>
                        </div>
                        <div className="col">
                            <label>Empresa</label>
                            <input className="ml-1" type="text" name="empresa" onChange={this.onChangeEmpresa}/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <label>Área/Sector/Departamento</label>
                            <input className="ml-1" type="text" onChange={this.onChangeArea} name="area"/>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col d-flex align-items-center">
                            <label className="mr-1">Funciones del puesto</label>
                            <textarea rows="5" onChange={this.onChangeFunciones} name="funciones"></textarea>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <label>Fecha Ingreso</label>
                            <input className="ml-1" type="date" onChange={this.onChangeFechaIngreso}/>
                        </div>
                        <div className="col">
                            <label>Fecha Salida</label>
                            <input className="mx-1" type="date" onChange={this.onChangeFechaSalida}  disabled={!this.state.checked} />  
                            Actualmente <input type="checkbox" onChange={this.onChangeActualmente}/> 
                        </div>   
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <input type="submit" value="Agregar" className="btn btn-info" />
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col">
                    { this.state.list.length || this.state.voluntariado.length || this.state.pasantia.length > 0 ? <h1>Historial</h1> : '' }
                    </div>
                </div>
                <div>
                    { this.state.list.length > 0 ? <h3>Laboral</h3> : ''}
                </div>
                <div>
                    {this.state.list}
                </div>
                <div>
                    { this.state.voluntariado.length > 0 ? <h3>Voluntariado</h3> : ''}
                </div>
                <div>
                    {this.state.voluntariado}
                </div>
                <div>
                    { this.state.pasantia.length > 0 ? <h3>Pasantía</h3> : ''}
                </div>
                <div>
                    {this.state.pasantia}
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                         { this.state.list.length || this.state.voluntariado.length || this.state.pasantia.length  > 0 
                         ? <button onClick={this.onButtonClick} className="btn btn-success">Continuar</button> 
                         : '' }
                    </div>
                </div>
            </div>
        );
    }


}