import React, {useState} from "react";
import { useHistory } from 'react-router-dom';



const NewDemo = () => {

    const [ allValues, setAllValues ] = useState({
        nombres: '',
        apellidos: '',
        ocupacion: '',
        barrio:'',
        celular:'',
        telefono: '',
        licencia: '',
        email: '',
        traslado: '',
        vehiculo: ''
    });

    const { push } = useHistory();

    const handleChange = (e) => {
        setAllValues({...allValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        // fetchData();
        push({
            pathname: '/experiencia',
            state: {
                passDatos: {
                    nombres: allValues.nombres,
                    apellidos: allValues.apellidos,
                    ocupacion: allValues.ocupacion,
                    barrio: allValues.barrio,
                    celular: allValues.celular,
                    telefono: allValues.telefono,
                    email: allValues.email,
                    traslado: allValues.traslado,
                    vehiculo: allValues.vehiculo
                }
            }
        });
    }

    // const onChangeNombre = (e) => {
    //     setNombres({nombre: e.target.value});
    // }

    // const onChangeApellidos = (e) => {
    //     set
    // }

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
                        <input onChange={handleChange} type="text" 
                        value={allValues.nombres} name='nombres'
                        required/>

                        <label>Apellidos</label>
                        <input onChange={handleChange} type="text" 
                        value={allValues.apellidos} name='apellidos'
                        required/>
                    </div>
                </div>
                
                 <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <label>Ocupación</label>
                        <input onChange={handleChange} type="text" name="ocupacion"
                        value={allValues.ocupacion}
                        required/> 
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <label>Barrio/Municipio</label>
                        <input onChange={handleChange} type="text" name="barrio"
                        value={allValues.barrio}
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
                        <input onChange={handleChange} type="phone" name='celular'
                        value={allValues.celular}
                        required/>

                        <label>Teléfono</label>
                        <input onChange={handleChange} type="phone" 
                        name="telefono" value={allValues.telefono}/>
                    </div> 
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <label>Correo electrónico</label>
                        <input onChange={handleChange} type="email"
                        name='email' value={allValues.email}/>

                    </div> 
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <label>Licencia de conducir</label>
                        <select onChange={handleChange} name='licencia' >
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
                        <div onChange={handleChange}>
                            <input type="radio" value="Si"  name="vehiculo"/> <label>Si</label>
                            <input type="radio" value="No" name="vehiculo"/> <label>No</label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-center">
                        <label>Disponibilidad de traslado</label>
                        <div onChange={handleChange}>
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