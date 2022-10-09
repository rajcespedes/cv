import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import FloatingLabel from "react-bootstrap-floating-label";





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

    // const [ counter , setCounter ] = useState(0);

    const { push } = useHistory();

    const handleChange = (e) => {
        setAllValues({...allValues, [e.target.name]: e.target.value});
        window.localStorage.getItem('allV',JSON.stringify(allValues.nombres));
        console.log(window.localStorage.getItem('allV'));

    }

    // let testVar = 

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

    // var counter = 0;

    // const onClickButton = () => {
    //     setCounter( counter + 1 );
    // }

    return(
    <div className="container">
                {/* <p>Tenemos un total de { counter } diálogos</p> */}
                {/* <button onClick={onClickButton} className='btn btn-info'>Agregar diálogo</button> */}
                <form onSubmit={handleSubmit}>
                 
                <div className="row justify-content-center">
                    <div className="col col-md-6 m-0">
                        <h2>Datos demográficos</h2>                                         
                    {/* </div> */}
                {/* </div> */}
                {/* <div className="row"> */}
                    {/* <div className="col-sm-3 mb-2"> */}
                    {/* <label for="nombre1">Nombres</label> */}
                        <input onChange={handleChange} type="text"
                        className="form-control mb-2" 
                        placeholder="Nombres"
                        id="nombre1"
                        value={allValues.nombres} name='nombres'
                        // required
                        />
                        
                    
                    {/* <div className="col-sm-8 d-flex justify-content-center form-group">  */}
                        {/* <label>Apellidos</label> */}
                        <input onChange={handleChange} type="text" 
                        value={allValues.apellidos} name='apellidos'
                        placeholder="Apellidos"
                        className="form-control mb-2"
                        // required
                        />
                    {/* </div> */}
                    
                
                
                 {/* <div className="row mb-3"> */}
                    {/* <div className="col-sm-10 d-flex justify-content-center form-group"> */}
                        {/* <label>Ocupación</label> */}
                        <input onChange={handleChange} type="text" name="ocupacion"
                        value={allValues.ocupacion}
                        placeholder="Ocupación"
                        className="form-control mb-2"
                        // required
                        /> 
                    {/* </div> */}
                {/* </div> */}
                    {/* <div className="col-sm-10 d-flex justify-content-center form-group"> */}
                        <input onChange={handleChange} type="text" name="barrio"
                        value={allValues.barrio}
                        className="form-control mb-2"
                        placeholder="Barrio/Municipio"
                        // required
                        />
                    {/* </div>   */}

                
                {/* <div className="row"> */}
                    {/* <div className="col d-flex justify-content-center"> */}
                        <h3>Contacto</h3>
                    {/* </div> */}
                {/* </div> */}
                {/* <div className="row mb-3"> */}
                    {/* <div className="col-8 d-flex justify-content-center form-group"> */}
                        <input onChange={handleChange} type="phone" name='celular'
                        value={allValues.celular}
                        placeholder="Celular"
                        className="form-control mb-2"
                        // required
                        />
                    {/* </div> */}
                    {/* <div className="col-8 d-flex justify-content-center form-group"> */}
                        <input onChange={handleChange} type="phone" 
                        name="telefono" value={allValues.telefono}
                        placeholder="Teléfono"
                        className="form-control mb-2"/>
                        
                    {/* </div>  */}
                    {/* </div> */}
                
                    {/* <div className="col-8 d-flex justify-content-center form-group"> */}
                        <input onChange={handleChange} type="email"
                        name='email' value={allValues.email}
                        placeholder="email"
                        className="form-control mb-2"/>
                    {/* </div>  */}
                {/* </div> */}
                {/* <div className="row mb-3"> */}
                    {/* <div className="col d-flex justify-content-center"> */}
                        <label>Licencia de conducir</label>
                        <select onChange={handleChange} name='licencia' className="col-12">
                            <option value="0">No tengo</option>
                            <option value="1">Motores (Cat 1)</option>
                            <option value="2">Vehículos livianos (Cat 2)</option>
                            <option value="3">Vehículos pesados: menos de 2 ejes (Cat 3)</option>
                            <option value="4">Autobuses y camiones de más de 2 (Cat 4)</option>
                            <option value="5">Operador de equipos especiales: motoniveladora, retroexcavadora, etc. (Cat 5)</option>
                        </select>   
                    {/* </div> */}
                {/* </div> */}
                {/* <div className="row"> */}
                    {/* <div className="col d-flex justify-content-center"> */}
                    <br/>
                        <label className="mt-2">Vehículo propio</label>
                        <div onChange={handleChange}>
                            <input type="radio" value="Si"  name="vehiculo"/> <label className="mr-1">Si</label>
                            <input type="radio" value="No" name="vehiculo"/> <label>No</label>
                        </div>
                    {/* </div> */}
                {/* </div> */}
                {/* <div className="row mb-3"> */}
                    {/* <div className="col d-flex justify-content-center"> */}
                        <label>Disponibilidad de traslado</label>
                        <div onChange={handleChange}>
                            <input type="radio" value="Si"  name="traslado"/> <label className="mr-1">Si</label>
                            <input type="radio" value="No" name="traslado"/> <label>No</label>
                        </div>
                    {/* </div> */}
                {/* </div>  */}
    
                {/* <div className="row"> */}
                    {/* <div className="col d-flex justify-content-end"> */}
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
    )
   

}

export default NewDemo;