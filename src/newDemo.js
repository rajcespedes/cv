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
        setAllValues({...allValues, [e.target.name]: e.target.value});
        window.localStorage.getItem('allV',JSON.stringify(allValues.nombres));
        // console.log(window.localStorage.getItem('allV'));
        // console.log(allValues.nombres);

    }

    const handleSubmit = (e)=> {
        e.preventDefault();

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

    return(
    <div className="container">
        <div className="row">

        
        <div className="col-6">
                <form onSubmit={handleSubmit}>
                 
                <div className="row d-flex justify-content-center">
                        <div 
                        // className="col col-md-4"
                        >
                        <h2>Datos demográficos</h2>                                         

                        <input onChange={handleChange} type="text"
                        className="form-control mb-2" 
                        placeholder="Nombres"
                        id="nombre1"
                        value={allValues.nombres} name='nombres'
                        // required
                        />
                        

                        <input onChange={handleChange} type="text" 
                        value={allValues.apellidos} name='apellidos'
                        placeholder="Apellidos"
                        className="form-control mb-2"
                        // required
                        />
  
                        <input onChange={handleChange} type="text" name="ocupacion"
                        value={allValues.ocupacion}
                        placeholder="Ocupación"
                        className="form-control mb-2"
                        // required
                        /> 

                        <input onChange={handleChange} type="text" name="barrio"
                        value={allValues.barrio}
                        className="form-control mb-2"
                        placeholder="Barrio/Municipio"
                        // required
                        />

                        <h3>Contacto</h3>

                        <input onChange={handleChange} type="phone" name='celular'
                        value={allValues.celular}
                        placeholder="Celular"
                        className="form-control mb-2"
                        // required
                        />

                        <input onChange={handleChange} type="phone" 
                        name="telefono" value={allValues.telefono}
                        placeholder="Teléfono"
                        className="form-control mb-2"/>
                        
                        <input onChange={handleChange} type="email"
                        name='email' value={allValues.email}
                        placeholder="eMail"
                        className="form-control mb-2"/>

                        <label>Licencia de conducir</label>
                        <select onChange={handleChange} name='licencia' className="col-12 form-control">
                            <option value="0">No tengo</option>
                            <option value="1">Motores (Cat 1)</option>
                            <option value="2">Vehículos livianos (Cat 2)</option>
                            <option value="3">Vehículos pesados: menos de 2 ejes (Cat 3)</option>
                            <option value="4">Autobuses y camiones de más de 2 (Cat 4)</option>
                            <option value="5">Operador de equipos especiales: motoniveladora, retroexcavadora, etc. (Cat 5)</option>
                        </select>   

                    <br/>
                        <label className="mt-2">Vehículo propio</label>
                        <div onChange={handleChange}>
                            <input type="radio" value="Si"  name="vehiculo"/> <label className="mr-1">Si</label>
                            <input type="radio" value="No" name="vehiculo"/> <label>No</label>
                        </div>

                        <label>Disponibilidad de traslado</label>
                        <div onChange={handleChange}>
                            <input type="radio" value="Si"  name="traslado"/> <label className="mr-1">Si</label>
                            <input type="radio" value="No" name="traslado"/> <label>No</label>
                        </div>

                        < button className="col btn btn-info justify-content-end" type="Submit" value='Prueba'> Submit </button>
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
                <div className="col-6 m-0">
                    <div className="row justify-content-center m-0">
                        {/* { */}
                        {/* this.state.allValues ?  */}
                        <h1>
                            {allValues.nombres} {allValues.apellidos}
                        </h1>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            {allValues.ocupacion}
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            {allValues.barrio}
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            {allValues.celular} / {allValues.telefono}
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <p>
                            {allValues.email}
                        </p>
                    </div>
                </div>
                </div>
            </div>
    )
   

}

export default NewDemo;