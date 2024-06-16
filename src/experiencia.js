import { React, Component } from 'react';
import ExperienciaElement from './experiencia-element';
import { Link } from 'react-router-dom';

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
            tipo: '',
            experienciaForm: '',
            listToSend: [],
            laboralList: [],
            voluntariadoList: [],
            algo: '',
            checkVoluntario: false,
            checkLaboral: false,
            checkPasantia: false
        };
    }

    componentDidMount(){
        this.setState({
            experienciaForm: this.props.location.state.passNombre
        });
        console.log(this.props.location.state.passDatos);
        
        // console.log(new Date().getMonth()+1 + "/" + new Date().getDay()  + "/" + new Date().getFullYear());
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
        console.log(new Date(e.target.value+ "  ").toLocaleDateString('en-US') > 
        new Date().getMonth()+1 + "/" + new Date().getDay()  + "/" + new Date().getFullYear());
        
        if(new Date(e.target.value+ " ").toLocaleDateString('en-US') > 
            new Date().getMonth()+1 + "/" + new Date().getDay()  + "/" + new Date().getFullYear()){
            alert("Fecha de inicio no puede ser mayor al día de hoy.");
            this.setState({
                fechaIngreso: ''
            });
        } else {
            this.setState({
                fechaIngreso: e.target.value
            }); 
        }

    }

    onChangeFechaSalida(e){

        if (this.state.fechaIngreso > e.target.value) {
            alert('Fecha de salida debe ser mayor o igual a fecha de ingreso');
            this.setState({
                fechaSalida: ''
            });
        } else {
            this.setState({
                fechaSalida: e.target.value
            });
        }


        
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

        var regEx = /.+/g;
       
        this.setState({
            funciones: e.target.value.match(regEx),
            algo: e.target.value
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
        // alert(this.state.tipo); 
    } 

    onButtonClick(e){
        e.preventDefault();

        window.location='/educacion';

    }

    onSubmit(e){
        
        e.preventDefault();

        //      if (this.state.fechaIngreso >this.state.fechaSalida) {
        //     alert('Fecha de salida debe ser mayor o igual a fecha de ingreso');
        //     this.setState({
        //         fechaSalida: ''
        //     });
        // } else {

        if(this.state.tipo === 'laboral'){

            var listHolder = this.state.list;

            var laboralArray = this.state.laboralList;

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

            laboralArray.unshift(
                {
                    laboralPuesto: this.state.puesto,
                    laboralEmpresa: this.state.empresa,
                    laboralFechaIngreso: this.state.fechaIngreso,
                    laboralFechaSalida: this.state.fechaSalida,
                    laboralArea: this.state.area,
                    laboralFunciones: this.state.funciones
                }
            );

        
            this.setState({
                list: listHolder,
                laboralList: laboralArray,
                counter: this.state.counter + 1
                // puesto: ''
            });

        } else if (this.state.tipo === 'voluntariado'){

            var listVoluntariado = this.state.voluntariado;

            var voluntariadoArray = this.state.voluntariadoList;

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

            voluntariadoArray.unshift(
                {
                    voluntariadoPuesto: this.state.puesto,
                    voluntariadoEmpresa: this.state.empresa,
                    voluntariadoFechaIngreso: this.state.fechaIngreso,
                    voluntariadoFechaSalida: this.state.fechaSalida,
                    voluntariadoArea: this.state.area,
                    voluntariadoFunciones: this.state.funciones
                }
            );

            this.setState({
                voluntariado: listVoluntariado,
                voluntariadoList: voluntariadoArray,  
                counter: this.state.counter + 1
            });


        } else {

            var listPasantia = this.state.pasantia;

            var prePasantiaList = this.state.listToSend;

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

            prePasantiaList.unshift(
                {
                    pasantiaPuesto: this.state.puesto,
                    pasantiaEmpresa: this.state.empresa,
                    pasantiaFechaIngreso: this.state.fechaIngreso,
                    pasantiaFechaSalida: this.state.fechaSalida,
                    pasantiaArea: this.state.area,
                    pasantiaFunciones: this.state.funciones
                }
                
            );

            this.setState({
                pasantia: listPasantia,
                listToSend: prePasantiaList,
                counter: this.state.counter + 1
                // puesto: ''
            });
            console.log(this.state.puesto)
        }
        
        this.setState({
            puesto: '',
            empresa: '',
            area: '',
            funciones: '',
            algo: '',
            checkLaboral: false,
            checkVoluntario: false,
            checkPasantia: false,
            checked: true,
            fechaIngreso: '',
            fechaSalida: '',
            tipo: ''
        });

        // notes.value = '';
    // }
    }
 
    render() {
        return(
            <div className='container'>
                <form onSubmit={this.onSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col col-md-4">
                            <h1>Experiencia</h1>
                           
                            <label className="font-weight-bold">Tipo de experiencia</label>
                             <br/>
                             <div onChange={this.onChangeTipo}
                             >
                            <input type="radio" name="tipoExperiencia" 
                            value='laboral'
                            // checked={this.state.tipo === 'laboral'} 
                            required
                            /> Laboral

                            <input type="radio" name="tipoExperiencia" 
                            value='voluntariado' className="ml-1"
                            // checked={this.state.tipo === 'voluntariado' }
                            required
                            /> Voluntariado

                            <input type="radio" name="tipoExperiencia" 
                            value='pasantia' className="ml-1 mb-3"
                            // checked={this.state.tipo === 'pasantia'}
                            required
                            /> Pasantía 
                            {/* <br/> */}
                            </div>

                            <input placeholder='Puesto' value={this.state.puesto} 
                            className="ml-1 mb-1 d-block form-control" 
                            name='puesto' type="text" 
                            onChange={this.onChangePuesto} required/>

                            <input className="ml-1 mb-1 d-block form-control" 
                            value={this.state.empresa} 
                            placeholder="Empresa" type="text" name="empresa" 
                            onChange={this.onChangeEmpresa} required/>

                            <input className="ml-1 mb-3 d-block form-control" 
                            type="text" value={this.state.area} 
                            placeholder='Área/Sector/Departamento'
                            onChange={this.onChangeArea} name="area" required/>

                            <textarea rows="5" onChange={this.onChangeFunciones}  
                            className="form-control mb-2"  
                            value={this.state.algo}  
                            placeholder="Funciones del puesto"
                            name="funciones"></textarea>

                            <label className='d-block'>Fecha Ingreso</label>
                            <input className="mb-1 col-md-6 form-control d-inline" 
                            type="month" 
                            onChange={this.onChangeFechaIngreso}
                            value={this.state.fechaIngreso}
                            required/>

                            <br/>

                            <label className='d-block'>Fecha Salida</label>
                            <input className="mr-2 mb-2 col-md-6 form-control d-inline" 
                            type="month" 
                            onChange={this.onChangeFechaSalida}  
                            value={this.state.fechaSalida} 
                            disabled={!this.state.checked} 
                            required/> 

                            {/* <div className='d-block mb-2'> */}
                            <label 
                            // className='d-block'
                            >Actualmente</label>
                             <input type="checkbox" 
                             className='ml-2'
                            onChange={this.onChangeActualmente}
                            checked={!this.state.checked}/> 
                            <br/>
                            {/* </div> */}
                        {/* </div>    */}
                    {/* </div> */}
                    {/* <div className="row"> */}
                        {/* <div className="col d-flex justify-content-end"> */}
                            <input type="submit" value="Agregar" 
                            className="btn btn-info col" />
                        </div>
                    </div>
                </form>
                
                <div className="row d-flex justify-content-center">
                        <div className="col col-md-4">
                {/* <div className="row"> */}
                    {/* <div className="col"> */}
                    { this.state.list.length > 0
                    || this.state.voluntariado.length > 0
                    || this.state.pasantia.length > 0 ? <h1>Historial</h1> : '' }
                    {/* {console.log('prueba ', this.state.voluntariadoArray)} */}
                    {/* </div> */}
                {/* </div> */}
                {/* // <div> */}
                    { this.state.list.length > 0 ? <h3>Laboral</h3> : ''}
                {/* </div> */}
                {/* <div> */}
                    {this.state.laboralList.map( e=> e.laboralPuesto)}
                {/* </div> */}
                {/* <div> */}
                    { this.state.voluntariado.length > 0 ? <h3>Voluntariado</h3> : ''}
                {/* </div> */}
                {/* <div> */}
                    {this.state.voluntariado}
                {/* </div> */}
                {/* <div> */}
                    { this.state.pasantia.length > 0 ? <h3>Pasantía</h3> : ''}
                {/* </div> */}
                {/* <div> */}
                    {this.state.pasantia}
                {/* </div> */}
                {/* <div className="row"> */}
                    {/* <div className="col d-flex justify-content-end"> */}
                        { this.state.list.length > 0
                    || this.state.voluntariado.length > 0
                    || this.state.pasantia.length > 0 ? 
                        <Link 
                        className="btn btn-info"
                        to={
                            {
                                pathname: '/educacion',
                                state: {
                                    passDatos: {
                                        nombres: this.props.location.state.passDatos.nombres,
                                        apellidos: this.props.location.state.passDatos.apellidos,
                                        ocupacion: this.props.location.state.passDatos.ocupacion,
                                        barrio: this.props.location.state.passDatos.barrio,
                                        celular: this.props.location.state.passDatos.celular,
                                        telefono: this.props.location.state.passDatos.telefono,
                                        email: this.props.location.state.passDatos.email,
                                        licencia: this.props.location.state.passDatos.licencia,
                                        vehiculo: this.props.location.state.passDatos.vehiculo,
                                        traslado: this.props.location.state.passDatos.traslado,

                                        passPasantia: this.state.listToSend,
                                        passLaboral: this.state.laboralList,
                                        passVoluntariado: this.state.voluntariadoList
                                        
                                    }
                                }
                            }
                        } >Continuar test</Link>
                        : "" }   
                    </div>
                </div>
            </div>
        );
    }
}