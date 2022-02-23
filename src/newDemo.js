import React, {useState} from "react";
import { useHistory } from 'react-router-dom';



const NewDemo = () => {

    const [ nombres, setNombres ] = useState('');

    const { push } = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault();
        // fetchData();
        push({
            pathname: '/experiencia',
            state: {
                passDatos: {
                    nombres: e.target.value
                }
            }
        });
    }

    const onChangeNombre = (e) => {
        setNombres({nombre: e.target.value});
    }

    return(
    <div className="container">
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <h1>Datos demográficos</h1>                                         
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center form-group">
                        <label>Nombres</label>
                        <input onChange={onChangeNombre} type="text" value={nombres} 
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
                        <input onChange={this.onChangeCelular} type="phone" name='celular'
                        required/>

                        <label>Teléfono</label>
                        <input onChange={this.onChangeTelefono} type="phone" name="telefono"/>
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
                            <option value="4">Autobuses y camiones de m[as de 2 (Cat 4)</option>
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

                        {/* <Link
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
                            </Link> */}
                            
                    </div>
                </div>
                </form>
            </div>
    )
   

}

export default NewDemo;