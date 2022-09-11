import { React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Check = () => {
    const { history } = useHistory();
}

export default class Demograficos extends Component  {

    constructor(props) {
        super(props);

        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeApellidos = this.onChangeApellidos.bind(this);
        this.onChangeOcupacion = this.onChangeOcupacion.bind(this);
        this.onChangeBarrio = this.onChangeBarrio.bind(this);
        this.onChangeCelular = this.onChangeCelular.bind(this);
        this.onChangeTelefono = this.onChangeTelefono.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLicencia = this.onChangeLicencia.bind(this);
        this.onChangeVehiculo = this.onChangeVehiculo.bind(this);
        this.onChangeTraslado = this.onChangeTraslado.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombres: '',
            apellidos: '',
            ocupacion: '',
            barrio: '',
            celular: '',
            telefono: '',
            email: '',
            licencia: '',
            vehiculo: '',
            traslado: '',
            completeFrom: ''
        }

    }

    onChangeNombre(e){
        this.setState({
            nombres: e.target.value
        });
        window.localStorage.setItem('nombre',this.state.nombres);
        let newVariable = window.localStorage.getItem('nombre');
        console.log(newVariable);
        console.log(e.target.value);

    }

    onChangeApellidos(e){
        this.setState({
            apellidos: e.target.value
        });
    }

    onChangeOcupacion(e){
        this.setState({
            ocupacion: e.target.value
        });
    }

    onChangeBarrio(e){
        this.setState({
            barrio: e.target.value
        });
    }

    onChangeCelular(e){
        this.setState({
            celular: e.target.value
        });
    }

    onChangeTelefono(e){
        this.setState({
            telefono: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onChangeLicencia(e){
        this.setState({
            licencia: e.target.value
        });
    }

    onChangeVehiculo(e){
        this.setState({
            vehiculo: e.target.value
        });
    }

    onChangeTraslado(e){
        this.setState({
            traslado: e.target.value
        });
    }

   
    onSubmit(e){
        
        e.preventDefault();

        // Check.history.push('/experiencia');

       
        // history.push('/experiencia');

        // console.log(e);

        // this.setState({

        // });

        const demoForm = {
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            ocupacion: this.state.ocupacion,
            barrio: this.state.barrio,
            celular: this.state.celular,
            telefono: this.state.telefono,
            email: this.state.email,
            licencia: this.state.licencia,
            vehiculo: this.state.vehiculo,
            traslado: this.state.traslado
        };
        
        console.log(demoForm);

        // axios.post('http://localhost:5000/',demoForm)
        // .then(res => console.log(res));
        

        // window.location = '/experiencia';

        Check.history({
            pathname: '/experiencia',
            state: {
                passDatos: {
                    nombres: this.state.nombres
                }
            }
        });

        // console.log(window.localStorag``)

    
    }
    
    render(){
    return( 
        <div className="container">
            <form onSubmit={this.onSubmit}>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h1>Datos demográficos</h1>                                         
                </div>
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center form-group">
                    <label>Nombres</label>
                    <input onChange={this.onChangeNombre} type="text" value={this.state.nombres} 
                    required/>

                    <label>Apellidos</label>
                    <input onChange={this.onChangeApellidos} type="text" value={this.state.apellidos}
                    required/>
                </div>
            </div>
            
             <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Ocupación</label>
                    <input onChange={this.onChangeOcupacion} type="text" name="ocupacion"
                    required/> 
                </div>
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Barrio/Municipio</label>
                    <input onChange={this.onChangeBarrio} type="text" name="barrio"
                    required/>
                </div>  
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <h3>Contacto</h3>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Celular</label>
                    <input onChange={this.onChangeCelular} type="tel" name='celular'
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    required/>

                    <label>Teléfono</label>
                    <input onChange={this.onChangeTelefono} type="tel" name="telefono"
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    />
                </div> 
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Correo electrónico</label>
                    <input onChange={this.onChangeEmail} type="email"/>

                </div> 
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Licencia de conducir</label>
                    <select onChange={this.onChangeLicencia} >
                        <option value="0">No tengo</option>
                        <option value="1">Motores (Cat 1)</option>
                        <option value="2">Vehículos livianos (Cat 2)</option>
                        <option value="3">Vehículos pesados: menos de 2 ejes (Cat 3)</option>
                        <option value="4">Autobuses y camiones de más de 2 ejes (Cat 4)</option>
                        <option value="5">Operador de equipos especiales: motoniveladora, retroexcavadora, etc. (Cat 5)</option>
                    </select>   
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <label>Vehículo propio</label>
                    <div onChange={this.onChangeVehiculo}>
                        <input type="radio" value="Si"  name="vehiculo"/> <label>Si</label>
                        <input type="radio" value="No" name="vehiculo"/> <label>No</label>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col d-flex justify-content-center">
                    <label>Disponibilidad de traslado</label>
                    <div onChange={this.onChangeTraslado}>
                        <input type="radio" value="Si"  name="traslado"/> <label>Si</label>
                        <input type="radio" value="No" name="traslado"/> <label>No</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-end">
                    < button type="Submit" value='Prueba'> Submit </button>
                    {/* <button type="submit" onClick={ () => history.push('/experiencia')} > */}
                        {/* Probar
                    </button> */}

                    <Link
                    className="btn btn-info"
                     to={
                        {
                            pathname: '/experiencia',
                            state: { 
                                passDatos: {
                                    nombres: this.state.nombres,
                                    apellidos: this.state.apellidos,
                                    ocupacion: this.state.ocupacion,
                                    barrio: this.state.barrio,
                                    celular: this.state.celular,
                                    telefono: this.state.telefono,
                                    email: this.state.email,
                                    licencia: this.state.licencia,
                                    vehiculo: this.state.vehiculo,
                                    traslado: this.state.traslado,
                                }
                            }
                        }
                    }>
                        Check
                        </Link>
                        
                </div>
             </div>
            </form>
        </div>
    );

}

}