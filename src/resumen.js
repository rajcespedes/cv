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
                        this.props.location.state.passDatos.licencia == 4 ? "Autobuses y camiones de más de 2 (Cat 4)" :
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
                        <hr></hr> 
                    </div>
                    
                </div>

                    <div className="row mb-2">
                        <div className="col">
                            {this.props.location.state.passDatos.passLaboral > 0 || 
                            this.props.location.state.passDatos.passPasantia > 0 || 
                            this.props.location.state.passDatos.passVoluntariado ? 
                            <h3>Experiencia</h3> : "" }
                        </div>
                    </div>
                    {this.props.location.state.passDatos.passLaboral ? 

                        <div className="row">
                            <div className="col">
                                {this.props.location.state.passDatos.passLaboral.map(e => 
                                <div>
                                    <label>{e.laboralPuesto}</label> <br/>
                                    <label>{e.laboralEmpresa}</label> <br/>
                                    <label>{e.laboralArea}</label> <br/>
                                    <label>Fecha inicio</label> <label>{e.laboralFechaIngreso}</label> <br/>
                                    <label>Fecha fin</label> <label>{e.laboralFechaSalida}</label> <br/>
                                    <hr></hr> 
                                </div>)}
                            </div>
                        </div>
                    
                    : ""}
                    
                
                {this.props.location.state.passDatos.passPasantia ? 

                <div className="row">
                    <div className="col">
                        {this.props.location.state.passDatos.passPasantia.map(e => 
                        <div>
                            <label>{e.pasantiaPuesto}</label> <br/>
                            <label>{e.pasantiaEmpresa}</label> <br/>
                            <label>{e.pasantiaArea}</label> <br/>
                            <label>Fecha inicio</label> <label>{e.pasantiaFechaIngreso}</label> <br/>
                            <label>Fecha fin</label> <label>{e.pasantiaFechaSalida}</label> <br/>
                            <hr></hr> 
                        </div>)}
                    </div>
                </div>
                : ""}
                
                {this.props.location.state.passDatos.passVoluntariado ? 
                <div className="row">
                    <div className="col">
                        {this.props.location.state.passDatos.passVoluntariado.map(e => 
                        <div>
                            <label>{e.voluntariadoPuesto}</label> <br/>
                            <label>{e.voluntariadoEmpresa}</label> <br/>
                            <label>{e.voluntariadoArea}</label> <br/>
                            <label>Fecha inicio</label> <label>{e.voluntariadoFechaIngreso}</label> <br/>
                            <label>Fecha fin</label> <label>{e.voluntariadoFechaSalida}</label> <br/>
                            <hr></hr> 
                        </div>)}
                    </div>
                </div>
                : ""}

                {this.props.location.state.passDatos.passDoctorado ||
                this.props.location.state.passDatos.passEspecialidad ||
                this.props.location.state.passDatos.passMaestria || 
                this.props.location.state.passDatos.passGrado ||
                this.props.location.state.passDatos.passCertifcacion ||
                this.props.location.state.passDatos.passBachiller || 
                this.props.location.state.passDatos.passCurso ||
                this.props.location.state.passDatos.passTaller
                ? 
                    <div className="row">
                        <div className="col">
                            <h3>Educación</h3>  
                        </div>
                    </div>

                : ""
                }
                
                {this.props.location.state.passDatos.passDoctorado ? 
                            <div className="row">
                                <div className="col">
                                        {this.props.location.state.passDatos.passDoctorado.map( e => 
                                            <div>
                                                <label>{e.tituloDoctorado}</label> <br></br>
                                                <label>{e.institucionDoctorado}</label> <br></br>
                                                <label>Fecha inicio</label> <label>{e.fechaInicioDoctorado}</label> <br/>
                                                <label>Fecha fin</label> <label>{e.fechaFinDoctorado}</label> <br/>
                                                <hr></hr>
                                            </div>
                                        )}
                                </div>
                            </div>
                : ""}

                {this.props.location.state.passDatos.passEspecialidad ? 
                            <div className="row">
                                <div className="col">
                                        {this.props.location.state.passDatos.passEspecialidad.map( e => 
                                            <div>
                                                <label>{e.tituloEspecialidad}</label> <br></br>
                                                <label>{e.institucionEspecialidad}</label> <br></br>
                                                <label>Fecha inicio</label> <label>{e.fechaInicioEspecialidad}</label> <br/>
                                                <label>Fecha fin</label> <label>{e.fechaFinEspecialidad}</label> <br/>
                                                <hr></hr>
                                            </div>
                                        )}
                                </div>
                            </div>
                            : ""}                            

                {this.props.location.state.passDatos.passMaestria ? 
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passMaestria.map( e => 
                                    <div>
                                        <label>{e.tituloMaestria}</label> <br></br>
                                        <label>{e.institucionMaestria}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioMaestria}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinMaestria}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.passGrado ?
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passGrado.map( e => 
                                    <div>
                                        <label>{e.tituloGrado}</label> <br></br>
                                        <label>{e.institucionGrado}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioGrado}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinGrado}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                
                : "" }
                
                {this.props.location.state.passDatos.passBachiller ? 
                <div className="row">
                    <div className="col">
                            {this.props.location.state.passDatos.passBachiller.map( e => 
                                <div>
                                    <label>{e.tituloBachiller}</label> <br></br>
                                    <label>{e.institucionBachiller}</label> <br></br>
                                    <label>Fecha inicio</label> <label>{e.fechaInicioBachiller}</label> <br/>
                                    <label>Fecha fin</label> <label>{e.fechaFinBachiller}</label> <br/>
                                    <hr></hr>
                                </div>
                            )}
                    </div>
                </div>
                : ""}

                {this.props.location.state.passDatos.passCertificacion ? 
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passCertificacion.map( e => 
                                    <div>
                                        <label>{e.tituloCertificacion}</label> <br></br>
                                        <label>{e.institucionCertificado}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioCertificacion}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinCertificacion}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.passDiplomado ? 
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passDiplomado.map( e => 
                                    <div>
                                        <label>{e.tituloDiplomado}</label> <br></br>
                                        <label>{e.institucionDiplomado}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioDiplomado}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinDiplomado}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.passTaller ? 
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passTaller.map( e => 
                                    <div>
                                        <label>{e.tituloTaller}</label> <br></br>
                                        <label>{e.institucionTaller}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioTaller}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinTaller}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.passCurso ? 
                    <div className="row">
                        <div className="col">
                                {this.props.location.state.passDatos.passCurso.map( e => 
                                    <div>
                                        <label>{e.tituloCurso}</label> <br></br>
                                        <label>{e.institucionCurso}</label> <br></br>
                                        <label>Fecha inicio</label> <label>{e.fechaInicioCurso}</label> <br/>
                                        <label>Fecha fin</label> <label>{e.fechaFinCurso}</label> <br/>
                                        <hr></hr>
                                    </div>
                                )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.listCompetencia ? 
                    <div className="row">
                        <div className="col">
                            <h3>Competencias</h3>
                            <ul>
                                {this.props.location.state.passDatos.listCompetencia.map( e => <li>{e}</li>)}
                            </ul>
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.listIdiomas ? 
                    <div className="row">
                        <div className="col">
                            <h3>Idiomas</h3>
                            <ul>
                                {this.props.location.state.passDatos.listIdiomas.map( e => 
                                    <div className="row">
                                        <div className="col">
                                            <label>{e.listIdioma}</label>, <label>{e.listIdiomaLevel == 1 ? "Bajo" : e.listIdiomaLevel == 2 ? "Intermedio" : "Alto" }</label>
                                        </div>
                                    </div>
                                    )}
                            </ul>
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.listProyectos ? 
                    <div className="row">
                        <div className="col">
                            <h3>Proyectos</h3>
                            <ul>
                                {this.props.location.state.passDatos.listProyectos.map( e => 
                                    <div className="row">
                                        <div className="col">
                                            <label>{e.listNombreProyecto}</label> <br></br>
                                            <label>{e.listDescripcionProyecto}</label> <br></br>
                                            <label>Fecha inicio:</label> <label>{e.listFechaInicioProyecto}</label><br></br>
                                            <label>Fecha fin:</label> <label>{e.listFechaFinProyecto}</label><br></br>
                                            <hr></hr>
                                        </div>                                     
                                    </div>
                                    )}
                            </ul>
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.listReferenciaLaboral ||
                this.props.location.state.passDatos.listReferenciaPersonal ?
                    <h3>Referencias</h3>
                 : ""}

                {this.props.location.state.passDatos.listReferenciaLaboral.length > 0 ? 
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold">Laboral</label>
                                {this.props.location.state.passDatos.listReferenciaLaboral.map( e => 
                                    <div className="row">
                                        <div className="col">
                                            <label>{e.listNombreReferenciaLaboral}</label> <br></br>
                                            <label>{e.listNumeroReferenciaLaboral}</label> <br></br>
                                            <label>{e.listPuestoReferenciaLaboral}</label> <br></br>
                                            <hr></hr>
                                        </div>                                     
                                    </div>
                                    )}
                        </div>
                    </div>
                : ""}

                {this.props.location.state.passDatos.listReferenciaPersonal.length > 0 ? 
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold">Personal</label>
                                {this.props.location.state.passDatos.listReferenciaPersonal.map( e => 
                                    <div className="row">
                                        <div className="col">
                                            <label>{e.listReferenciaPersonalNombre}</label> <br></br>
                                            <label>{e.listReferenciaPersonalNumero}</label> <br></br>
                                            <label>{e.listReferenciaPersonalPuesto}</label>
                                            <hr></hr>
                                        </div>                                     
                                    </div>
                                    )}
                        </div>
                    </div>
                : ""}

            </div>
        );
    }

}  