import { React, Component } from 'react';
import EducacionElement from './educacion-element';
import { Link } from 'react-router-dom';
import Select from 'react-select';

export default class Educacion extends Component {

    constructor(props) {
        super(props);

        this.onChangeEducacion = this.onChangeEducacion.bind(this);
        this.onChangeShowLogro = this.onChangeShowLogro.bind(this);
        this.onChangeTipoEducacion = this.onChangeTipoEducacion.bind(this);
        this.onChangeTitulo = this.onChangeTitulo.bind(this);
        this.onChangeInstitucion = this.onChangeInstitucion.bind(this);
        this.onChangeEnCurso = this.onChangeEnCurso.bind(this);
        this.onChangeFechaInicio = this.onChangeFechaInicio.bind(this);
        this.onChangeFechaFin = this.onChangeFechaFin.bind(this);
        this.onChangeLogro = this.onChangeLogro.bind(this);
        this.addEducacion = this.addEducacion.bind(this);


        this.state = {
            educacion: ['Seleccione','Formal','Continuada'],
            tipoEducacion: '',
            subtipoEducacion: '',
            tipo: [],
            titulo: '',
            institucion: '',
            showLogro: false,
            logro: [],
            educacionList: [],
            counter: 0,
            encurso: true,
            fechaInicio: Date.Now,
            fechaFin: Date.Now,
            doctorado: [],
            grado: [],
            maestria: [],
            especialidad: [],
            certificacion: [],
            tecnico: [],
            bachiller: [],
            diplomado: [],
            taller: [],
            curso: [],
            listDoctorado: [],
            listGrado: [],
            listMaestria: [],
            listEspecialidad: [],
            listCertificacion: [],
            listTecnico: [],
            listBachiller: [],
            listDiplomado: [],
            listTaller: [],
            listCurso: [],
            selectValue: ''
        }

    }

    componentDidMount(){
        console.log(this.props.location.state.passDatos);
    }

    onChangeTipoEducacion(e){
        this.setState({
            tipoEducacion: e.target.value
        });
        
    }

    onChangeEducacion(e){

        this.setState({
            selectValue: e.target.value
        })
        
        
        if(e.target.value === 'Formal'){
            this.setState({
                tipo: 
                    <div>
                        <input type="radio" name="tipoEducacion" value="bachiller" required/> Bachiller
                        <input type="radio" name="tipoEducacion" value="tecnico" required/> Técnico
                        <input type="radio" name="tipoEducacion" value="certificacion" required/> Certificación
                        <input type="radio" name="tipoEducacion" value="grado" required/> Grado
                        <input type="radio" name="tipoEducacion" value="especialidad" required/> Especialidad
                        <input type="radio" name="tipoEducacion" value="master" required/> Máster
                        <input type="radio" name="tipoEducacion" value="doctorado" required/> Doctorado
                    </div>
            });
        } else if (e.target.value === 'Continuada') {
            this.setState({
                tipo:                 
                    <div>
                        <input type="radio" name="tipoEducacion" value="curso" required/> Curso
                        <input type="radio" name="tipoEducacion" value="taller" required/> Taller
                        <input type="radio" name="tipoEducacion" value="diplomado" required/> Diplomado
                    </div>
            });
        }

    }

    onChangeShowLogro(e){
        if(!this.state.showLogro) {
            this.setState({
                showLogro: true
            });
        } else {
            this.setState({
                showLogro: false
            });
        }
    }

    onChangeTitulo(e){
        this.setState({
            titulo: e.target.value
        });
    }

    onChangeInstitucion(e){
        this.setState({
            institucion: e.target.value
        });
    }

    onChangeEnCurso(e){
        if(this.state.encurso == true) {
            this.setState({
                encurso: false,
                fechaFin: 'En curso'
            });
        } else {
            this.setState({
                encurso: true
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

    onChangeLogro(e){
        var regEx = /\w+/g;
        
        this.setState({
            logro: e.target.value.match(regEx)
        });

        console.log(this.state.logro);
    }

    addEducacion(e){

        e.preventDefault();

        if(this.state.tipoEducacion === 'grado') {

            var educacionArray = this.state.educacionList;

            var gradoArray = this.state.listGrado;

            educacionArray.unshift(
                <EducacionElement 
                    key={'e' + this.state.counter}
                    titulo={this.state.titulo}
                    tipoEducacion={this.state.tipoEducacion}
                    subtipoEducacion={this.state.subtipoEducacion}
                    fechaInicio={this.state.fechaInicio}
                    fechaFin={this.state.fechaFin}
                    institucion={this.state.institucion}
                    logro={this.state.logro}
                />
            );

            gradoArray.unshift({
                tituloGrado: this.state.titulo,
                tipoEducacionGrado: this.state.tipoEducacion,
                subtipoEducacionGrado: this.state.subtipoEducacion,
                fechaInicioGrado: this.state.fechaInicioGrado,
                fechaFinGrado: this.state.fechaFin,
                institucionGrado: this.state.institucion,
                logroGrado: this.state.logro
            });


            this.setState({
                educacionList: educacionArray,
                listGrado: gradoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'maestria') {
            
            var maestriaArray = this.state.maestria;

            var listMaestriaArray = this.state.maestriaArray;

            maestriaArray.unshift(
                <EducacionElement 
                    key={'e' + this.state.counter}
                    titulo={this.state.titulo}
                    tipoEducacion={this.state.tipoEducacion}
                    subtipoEducacion={this.state.subtipoEducacion}
                    fechaInicio={this.state.fechaInicio}
                    fechaFin={this.state.fechaFin}
                    institucion={this.state.institucion}
                    logro={this.state.logro}
                />
            );

            listMaestriaArray.unshift({
                tituloMaestria: this.state.titulo,
                tipoEducacionMaestria: this.state.tipoEducacion,
                subtipoEducacionMaestria: this.state.subtipoEducacion,
                fechaInicioMaestria: this.state.fechaInicio,
                fechaFinMaestria: this.state.fechaFin,
                institucionMaestria: this.state.institucion,
                logroMaestria: this.state.logro
            });

            this.setState({
                maestria: maestriaArray,
                listMaestria: listMaestriaArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'especialidad') {
            
            var especialidadArray = this.state.especialidad;

            var listEspecialidadArray = this.state.listEspecialidad;

            especialidadArray.unshift(
                <EducacionElement 
                    key={'e' + this.state.counter}
                    titulo={this.state.titulo}
                    tipoEducacion={this.state.tipoEducacion}
                    subtipoEducacion={this.state.subtipoEducacion}
                    fechaInicio={this.state.fechaInicio}
                    fechaFin={this.state.fechaFin}
                    institucion={this.state.institucion}
                    logro={this.state.logro}
                />
            );

            listEspecialidadArray.unshift({
                tituloEspecialidad: this.state.titulo,
                tipoEducacionEspecialidad: this.state.tipoEducacion,
                subtipoEducacionEspecialidad: this.state.subtipoEducacion,
                fechaInicioEspecialidad: this.state.fechaInicio,
                fechaFinEspecialidad: this.state.fechaFin,
                institucionEspecialidad: this.state.institucion,
                logroEspecialidad: this.state.logro
            });

            this.setState({
                especialidad: especialidadArray,
                listEspecialidad: listEspecialidadArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'doctorado') {
            
            var doctoradoArray = this.state.doctorado;

            var listDoctoradoArray = this.state.doctorado;

            doctoradoArray.unshift(
                    <EducacionElement 
                        key={'e' + this.state.counter}
                        titulo={this.state.titulo}
                        tipoEducacion={this.state.tipoEducacion}
                        subtipoEducacion={this.state.subtipoEducacion}
                        fechaInicio={this.state.fechaInicio}
                        fechaFin={this.state.fechaFin}
                        institucion={this.state.institucion}
                        logro={this.state.logro}
                    />
            );

            listDoctoradoArray.unshift({
                tituloDoctorado: this.state.titulo,
                tipoEducacionDoctorado: this.state.tipoEducacion,
                subtipoEducacionDoctorado: this.state.subtipoEducacion,
                fechaInicioDoctorado: this.state.fechaInicioGrado,
                fechaFinDoctorado: this.state.fechaFin,
                institucionDoctorado: this.state.institucion,
                logradoDoctorado: this.state.logro
            });

            this.setState({
                doctorado: doctoradoArray,
                listDoctoradoArray: listDoctoradoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'certificacion') {

            var certificacionArray = this.state.certificacion;

            var listCertificacionArray = this.state.listCertificacion;

            certificacionArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
            />
            );

            listCertificacionArray.unshift({
                tituloCertificacion: this.state.titulo,
                tipoEducacionCertificacion: this.state.tipoEducacion,
                subtipoEducacionCertificacion: this.state.subtipoEducacion,
                fechaInicioCertificacion: this.state.fechaInicio,
                fechaFinCertificacion: this.state.fechaFin,
                institucionCertificacion: this.state.institucion,
                logroCertifcacion: this.state.logro
            });

            this.setState({
                certificacion: certificacionArray,
                listCertificacion: listCertificacionArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'tecnico') {

            var tecnicoArray = this.state.tecnico;

            var listTecnicoArray = this.state.listTecnico;

            tecnicoArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
            />  
            );

            listTecnicoArray.unshift({
                tituloTecnico: this.state.titulo,
                tipoEducacionTecnico: this.state.tipoEducacion,
                subtipoEducacionTecnico: this.state.subtipoEducacion,
                fechaInicioTecnico: this.state.fechaInicio,
                fechaFinTecnico: this.state.fechaFin,
                institucionTecnico: this.state.institucion,
                logroTecnico: this.state.logro
            });

            this.setState({
                tecnico: tecnicoArray,
                listTecnico: listTecnicoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'bachiller') {

            var bachillerArray = this.state.bachiller;

            var listBachillerArray = this.state.listBachiller;

            bachillerArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
            />  
            );

            listBachillerArray.unshift({
                tituloBachiller: this.state.titulo,
                tipoEducacionBachiller: this.state.tipoEducacion,
                subtipoEducacionBachiller: this.state.subtipoEducacion,
                fechaInicioBachiller: this.state.fechaInicio,
                fechaFinBachiller: this.state.fechaFin,
                institucionBachiller: this.state.institucion,
                logroBachiller: this.state.logro
            });

            this.setState({
                bachiller: bachillerArray,
                listBachiller: listBachillerArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'diplomado') {

            var diplomadoArray = this.state.diplomado;

            var listDiplomadoArray = this.state.listDiplomado;

            diplomadoArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
                />  
            );

            listDiplomadoArray.unshift({
                tituloDiplomado: this.state.titulo,
                tipoEducacionDiplomado: this.state.tipoEducacion,
                subtipoEducacionDiplomado: this.state.subtipoEducacion,
                fechaInicioDiplomado: this.state.fechaInicio,
                fechaFinDiplomado: this.state.fechaFin,
                institucionDiplomado: this.state.institucion,
                logroDiplomado: this.state.logro
            });

            this.setState({
                diplomado: diplomadoArray,
                listDiplomado: listDiplomadoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion == 'curso') {

            var cursoArray = this.state.curso;

            var listCursoArray = this.state.curso;

            cursoArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
                /> 
            );

            listCursoArray.unshift({
                tituloCurso: this.state.titulo,
                tipoEducacionCurso: this.state.tipoEducacion,
                subtipoEducacionCurso: this.state.subtipoEducacion,
                fechaInicioCurso: this.state.fechaInicio,
                fechaFinCurso: this.state.fechaFin,
                institucionCurso: this.state.institucion,
                logroCurso: this.state.logro
            });

            this.setState({
                curso: cursoArray,
                listCursoArray: listCursoArray,
                counter: this.state.counter + 1
            });

        }
        else {

            var tallerArray = this.state.taller;

            var listTallerArray = this.state.listTaller;

            tallerArray.unshift(
                <EducacionElement 
                key={'e' + this.state.counter}
                titulo={this.state.titulo}
                tipoEducacion={this.state.tipoEducacion}
                subtipoEducacion={this.state.subtipoEducacion}
                fechaInicio={this.state.fechaInicio}
                fechaFin={this.state.fechaFin}
                institucion={this.state.institucion}
                logro={this.state.logro}
                />  
            );

            listTallerArray.unshift({
                tituloTaller: this.state.titulo,
                tipoEducacionTaller: this.state.tipoEducacion,
                subtipoEducacionTaller: this.state.subtipoEducacion,
                fechaInicioTaller: this.state.fechaInicio,
                fechaFinTaller: this.state.fechaFin,
                institucionTaller: this.state.institucion,
                logroTaller: this.state.logro
            });

            this.setState({
                taller: tallerArray,
                listTaller: listTallerArray,
                counter: this.state.counter + 1
            });
        }

        this.setState({
            selectValue: 'Seleccione'
        })
       
       
    }  
    

    render() {
        return(
            <div>
                <form onSubmit={this.addEducacion}>
                <div className='row'>
                    <div className='col'>
                        <h1>Educación</h1>
                    </div> 
                </div>
                <div className="row">
                    <div className="col">
                        <label>Tipo de educación</label>                       
                        <select onChange={this.onChangeEducacion} 
                        value={this.state.selectValue} 
                        required>
                            {/* <option value={this.state.tipo}>Seleccione</option> */}
                            {this.state.educacion.map( e => <option value={e} key={e}>{e}</option>)}
                        </select>

                    </div>
                </div>
                <div className="row">
                    <div className='col' onChange={this.onChangeTipoEducacion} >
                        {this.state.tipo}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder="Título" name='titulo' 
                        onChange={this.onChangeTitulo} required/>
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Institución" name='institucion' onChange={this.onChangeInstitucion} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Fecha Inicio</label>
                        <input type="date" name='fechaInicio' onChange={this.onChangeFechaInicio}/>
                    </div>
                    <div className="col">
                        <label>Fecha Fin</label>
                        <input type="date" name='fechaFin' disabled={!this.state.encurso} onChange={this.onChangeFechaFin}/>
                        En curso <input type='checkbox' onChange={this.onChangeEnCurso}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            Logros en educación <input type="checkbox" onChange={this.onChangeShowLogro}/>    
                        </div>
                        <div onChange={this.onChangeLogro}>
                            <textarea disabled={!this.state.showLogro}></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        {/* <button className="btn btn-info" onClick={this.addEducacion} >Agregar</button> */}
                        <input type="submit" value="agregar"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.doctorado.length >= 1 ? <h3>Doctorado</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.doctorado}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.maestria.length >= 1 ? <h3>Maestría</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.maestria}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.especialidad.length >= 1 ? <h3>Especialidad</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.especialidad}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.educacionList.length >= 1 ? <h3>Grado</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.educacionList}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.certificacion.length >= 1 ? <h3>Certificación</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.certificacion}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.tecnico.length >= 1 ? <h3>Tecnico</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.tecnico}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.bachiller.length >= 1 ? <h3>Bachillerato</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.bachiller}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.diplomado.length >= 1 ? <h3>Diplomado</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.diplomado}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.taller.length >= 1 ? <h3>Taller</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.taller}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.curso.length >= 1 ? <h3>Curso</h3> : '' }
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        {this.state.curso}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.curso}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        { this.state.curso > 0 || this.state.diplomado > 0 || 
                        this.state.doctorado > 0 || this.state.especialidad > 0 ||
                        this.state.grado > 0 || this.state.maestria > 0 || 
                        this.state.taller > 0 || this.state.tecnico > 0  ||
                        this.state.certificacion ? 
                        <Link 
                        className="btn btn-info"
                        to = {
                            {
                                pathname: '/competencias',
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

                                        passPasantia: this.props.location.state.passDatos.passPasantia,
                                        passLaboral: this.props.location.state.passDatos.passLaboral,
                                        passVoluntariado: this.props.location.state.passDatos.passVoluntariado,

                                        passDoctorado: this.state.listDoctorado,
                                        passGrado: this.state.listGrado,
                                        passMaestria: this.state.listMaestria,
                                        passEspecialidad: this.state.listEspecialidad,
                                        passCertificacion: this.state.listCertificacion,
                                        passTecnico: this.state.listTecnico,
                                        passBachiller: this.state.listBachiller,
                                        passDiplomado: this.state.listDiplomado,
                                        passTaller: this.state.listTaller,
                                        passCurso:this.state.listCurso
                                        
                                    }
                                }
                            }
                        }
                        >Continuar</Link>  : ""}
                    </div>
                </div>
                </form>
            </div>
        );

    }

} 