import React, {useContext, useState} from 'react';
import { DataContext } from './dataContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const NewExperiencia = () => {

    const { allValues, setAllValues } = useContext(DataContext);

    const onChangeTipo = (e) => {
        setAllValues({...allValues, [e.target.name]: e.target.value });

        console.log(allValues);
    };

    const handleSubmit = () => {

    };

    return (
        <DataContext.Provider>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center">
                        <div className="col col-md-4">
                            <h1>Experiencia</h1>
                           
                            <label className="font-weight-bold">Tipo de experiencia</label>
                             <br/>
                             <div onChange={onChangeTipo}
                             >
                            <input type="radio" name="tipoExperiencia" 
                            value='laboral'
                            required
                            /> Laboral

                            <input type="radio" name="tipoExperiencia" 
                            value='voluntariado' className="ml-1"
                            required
                            /> Voluntariado

                            <input type="radio" name="tipoExperiencia" 
                            value='pasantia' className="ml-1 mb-3"
                            required
                            /> Pasantía 
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

                            <label>Actualmente</label>
                            <input type="checkbox" 
                            className='ml-2'
                            onChange={this.onChangeActualmente}
                            checked={!this.state.checked}/> 
                            <br/>

                            <input type="submit" value="Agregar" 
                            className="btn btn-info col" />
                        </div>
                    </div>
                </form>
                
                <div className="row d-flex justify-content-center">
                        <div className="col col-md-4">
                    { this.state.list.length > 0
                    || this.state.voluntariado.length > 0
                    || this.state.pasantia.length > 0 ? <h1>Historial</h1> : '' }
                    {/* {console.log('prueba ', this.state.voluntariadoArray)} */}
                    { this.state.list.length > 0 ? <h3>Laboral</h3> : ''}

                    {this.state.list}

                    { this.state.voluntariado.length > 0 ? <h3>Voluntariado</h3> : ''}

                    {this.state.voluntariado}

                    { this.state.pasantia.length > 0 ? <h3>Pasantía</h3> : ''}

                    {this.state.pasantia}

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
        </DataContext.Provider>
    );
};


//  export default Experiencia;