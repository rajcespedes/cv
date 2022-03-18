import {React, Component} from 'react';
import languages from './languages';
import ReactStars from 'react-rating-stars-component';
import IdiomasComponent from './idioma-component';
import ReferenciaComponent from './referencia-component';
import ProyectoComponent from './proyecto-component';
import { Link } from 'react-router-dom';
import Competencia from './agrega-competencia';

export default class Competencias extends Component {


    constructor(props){
        super(props);

        this.addCompetencia = this.addCompetencia.bind(this);
        this.onChangeCompetencia = this.onChangeCompetencia.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
        this.addIdioma = this.addIdioma.bind(this);
        this.onChangeIdioma = this.onChangeIdioma.bind(this);
        this.onChangeTipoReferencia = this.onChangeTipoReferencia.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeNumero = this.onChangeNumero.bind(this);
        this.onChangePuesto = this.onChangePuesto.bind(this);
        this.addReferencia = this.addReferencia.bind(this);
        this.addProyecto = this.addProyecto.bind(this);
        this.onChangeNombreProyecto = this.onChangeNombreProyecto.bind(this);
        this.onChangeDescripcionProyecto = this.onChangeDescripcionProyecto.bind(this);
        this.onChangeInicioProyecto = this.onChangeInicioProyecto.bind(this);
        this.onChangeFinProyecto = this.onChangeFinProyecto.bind(this);


        this.state = {
            competenciaList: [],
            competencia: '',
            counter: 0,
            idiomas: languages,
            idiomaLevel: 0,
            idiomasList: [],
            idiomaSeleccionado: '',
            referencia: ['Laboral','Personal'],
            tipoReferencia: '',
            nombre: '',
            puesto: '',
            numero: '',
            referenciaList: [],
            referenciaPersonalList: [],
            nombreProyecto: '',
            descripcionProyecto: '',
            inicioProyecto: '',
            finProyecto: '',
            proyectosList: [],
            listIdiomas: [],
            listCompetencia: [],
            listProyectos: [],
            listReferenciaLaboral: [],
            listReferenciaPersonal: []
        }

    }

    componentDidMount(){
        // console.log(this.props.location.state.passDatos);
        // console.log('validando ', this.props.location.state.passDatos.nombres);
    }

    ratingChanged(e){
        this.setState({
            idiomaLevel: e
        });
        
    }

    onChangeIdioma(e){
        this.setState({
            idiomaSeleccionado: e.target.value
        });
    }

    addIdioma(e){

        var idiomasArray = this.state.idiomasList;

        var listIdiomasArray = this.state.listIdiomas;

        idiomasArray.push(
            <IdiomasComponent 
            key={this.state.counter}
            idioma={this.state.idiomaSeleccionado}
            idiomaLevel={this.state.idiomaLevel}
            />
        );

        listIdiomasArray.unshift({
            listIdioma: this.state.idiomaSeleccionado,
            listIdiomaLevel: this.state.idiomaLevel
        });

        this.setState({
            idiomasList: idiomasArray,
            listIdioma: listIdiomasArray,
            counter: this.state.counter + 1
        });
    }

    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }

    onChangeNumero(e){
        this.setState({
            numero: e.target.value
        });
    }

    onChangePuesto(e){
        this.setState({
            puesto: e.target.value
        });
    }

    onChangeCompetencia(e){
        this.setState({
            competencia: e.target.value
        })
    }

    onChangeTipoReferencia(e){
        this.setState({
            tipoReferencia: e.target.value
        });        
    }

    addCompetencia(e){

        e.preventDefault();

        var competenciaArray = this.state.competenciaList;

        var listCompetenciaArray = this.state.listCompetencia;
       
        // console.log(this.props.location.state.passDatos);

        competenciaArray.unshift(
            this.state.competencia
        );

        listCompetenciaArray.unshift(this.state.competencia);

        this.setState({
            competenciaList: competenciaArray,
            listCompetencia: competenciaArray,
            counter: this.state.counter + 1
        });

    }
    
    onChangeNombreProyecto(e){
        this.setState({
            nombreProyecto: e.target.value
        });
    }

    onChangeDescripcionProyecto(e){
        this.setState({
            descripcionProyecto: e.target.value
        });
    }

    onChangeInicioProyecto(e){
        this.setState({
            inicioProyecto: e.target.value
        });
    }

    onChangeFinProyecto(e){
        this.setState({
            finProyecto: e.target.value
        });
    }

    addProyecto(e){
        
        var proyectoArray = this.state.proyectosList;

        var listProyectosArray = this.state.listProyectos;

        proyectoArray.unshift(
            <ProyectoComponent 
            key={'l' + this.state.counter + 1}
            nombreProyecto={this.state.nombreProyecto}
            descripcionProyecto={this.state.descripcionProyecto}
            fechaInicioProyecto={this.state.inicioProyecto}
            fechaFinProyecto={this.state.finProyecto}
            />
        );

        listProyectosArray.unshift({
            listNombreProyecto: this.state.nombreProyecto,
            listDescripcionProyecto: this.state.descripcionProyecto,
            listFechaInicioProyecto: this.state.inicioProyecto,
            listFechaFinProyecto: this.state.finProyecto
        });

        this.setState({
            proyectosList: proyectoArray,
            listProyectos: listProyectosArray,
            counter: this.state.counter + 1
        });

    }

    addReferencia(e){

        e.preventDefault();

        if(this.state.tipoReferencia == 'Laboral') {

            var referenciaArray = this.state.referenciaList;

            var listReferenciaLaboralArray = this.state.listReferenciaLaboral;

            referenciaArray.unshift(
                <ReferenciaComponent 
                    key={'k' + this.state.count + 1}
                    nombre={this.state.nombre}
                    puesto={this.state.puesto}
                    numero={this.state.numero}
                    tipoReferencia={this.state.tipoReferencia}
                />            
            );

            listReferenciaLaboralArray.unshift({
                listNombreReferenciaLaboral: this.state.nombre,
                listPuestoReferenciaLaboral: this.state.puesto,
                listNumeroReferenciaLaboral: this.state.numero,
                listTipoReferenciaLaboral: this.state.tipoReferencia
            });

        this.setState({
            referenciaList: referenciaArray,
            listReferenciaLaboral: listReferenciaLaboralArray,
            counter: this.state.counter + 1
        });

        } else {
            var referenciaPersonalArray = this.state.referenciaPersonalList;

            var listReferenciaPersonalArray = this.state.listReferenciaPersonal;

            referenciaPersonalArray.unshift(
                <ReferenciaComponent 
                    key={'l' + this.state.count + 1}
                    nombre={this.state.nombre}
                    puesto={this.state.puesto}
                    numero={this.state.numero}
                    tipoReferencia={this.state.tipoReferencia}
                />            
            );

            listReferenciaPersonalArray.unshift({
                listReferenciaPersonalNombre: this.state.nombre,
                listReferenciaPersonalPuesto: this.state.puesto,
                listReferenciaPersonalNumero: this.state.numero,
                listReferenciaPersonaltipoReferencia: this.state.tipoReferencia
            });



        this.setState({
            referenciaPersonalList: referenciaPersonalArray,
            listReferenciaPersonal: listReferenciaPersonalArray,
            counter: this.state.counter + 1
        });
        }

        console.log(this.state.referenciaList || this.state.referenciaPersonalList);
        
    }

    render() {
        return(
            <div>
                {/* <Competencia idiomas={this.state.idiomas} 
                idiomaLev={this.state.idiomaLevel} 
                competenciasList={this.state.competenciaList}
                counter={this.state.counter}/> */}

                <div>
                    <div>
                      <h1>Competencias</h1>  
                      <input placeholder='Competencia' type="text" onChange={this.onChangeCompetencia} /> 
                      <button className="ml-5 btn btn-info btn-sm" onClick={this.addCompetencia}>Agregar habilidad</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            {this.state.competenciaList.map( e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Idiomas</h3>
                        <select>
                            <option>Seleccione</option>
                            {this.state.idiomas.map( e => <option value={e}>{e}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <h3>Nivel</h3>
                        <ReactStars 
                        count={3}
                        size={40}
                        onChange={this.ratingChanged}
                        />
                    </div>
                    <div className="col d-flex align-items-end">
                        {this.state.idiomaLevel == 1 ? <label>Bajo</label> : 
                        this.state.idiomaLevel == 2 ? <label>Medio</label> : 
                        this.state.idiomaLevel == 3 ? <label>Alto</label> : '' }
                    </div>
                    <div className="col d-flex align-items-center">
                        <button className="ml-5 btn btn-info btn-sm" onClick={this.addIdioma}>Agregar idioma</button>
                    </div>
                {this.state.competencia}


                <div className="row">
                    <div className="col">
                        <ul>
                            {this.state.competenciaList.map( e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <label className="font-weight-bold">{ this.state.idiomasList.length > 0 ? 'Idioma' : ''}</label>
                    </div>
                    <div className="col">
                        <label className="font-weight-bold">{ this.state.idiomasList.length > 0 ? 'Nivel' : ''}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.idiomasList}                       
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Proyectos</h1>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <input type="text" placeholder='Nombre del proyecto' onChange={this.onChangeNombreProyecto}/>
                    </div>
                </div>
                <div className="row  mb-1">
                    <div className="col-2">
                        <textarea placeholder="Descripcion/Impacto" onChange={this.onChangeDescripcionProyecto}></textarea> 
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input type="date" onChange={this.onChangeInicioProyecto} />
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input type="date"  onChange={this.onChangeFinProyecto}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button className="ml-5 btn btn-info btn-sm" onClick={this.addProyecto}>Agregar proyecto</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.proyectosList}
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <h1>Referencias</h1>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col">
                        <label className="mr-1">Tipo de referencia</label>
                        <select onChange={this.onChangeTipoReferencia}>                            
                            <option>Seleccione</option>
                            {this.state.referencia.map( e => <option>{e}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input type="text" placeholder='Nombre' onChange={this.onChangeNombre}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-2">
                        <input type="text" placeholder='Número' onChange={this.onChangeNumero}/>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input placeholder='Puesto o Relación' type="text" onChange={this.onChangePuesto}/>
                    </div>
                </div>              
                <div className="row">
                    <div className="col-2 d-flex align-items-end">
                        <div>
                            <button className="btn btn-info btn-sm" onClick={this.addReferencia}>Agregar referencia</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    {this.state.referenciaList.length > 0 || this.state.referenciaPersonalList.length > 0? 
                    <div className="row">
                        <div className="col">
                            <label className="font-weight-bold">Tipo referencia</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Nombre</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Puesto</label>
                        </div>
                        <div className="col">
                            <label className="font-weight-bold">Contacto</label>
                        </div>
                </div> : ''
                }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.referenciaList}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.referenciaPersonalList}
                    </div>
                </div>
                <div>
                    {/* <Link 
                    className="btn btn-success"
                    to={
                        {
                            pathname: '/resumen',
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

                                        passDoctorado: this.props.location.state.listDoctorado,
                                        passGrado: this.props.location.state.passDatos.passGrado,
                                        passMaestria: this.props.location.state.passDatos.passMaestria,
                                        passEspecialidad: this.props.location.state.passDatos.passEspecialidad,
                                        passCertificacion: this.props.location.state.passDatos.passCertificacion,
                                        passTecnico: this.props.location.state.passDatos.passTecnico,
                                        passBachiller: this.props.location.state.passDatos.passBachiller,
                                        passDiplomado: this.props.location.state.passDatos.passDiplomado,
                                        passTaller: this.props.location.state.passDatos.passTaller,
                                        passCurso: this.props.location.state.passDatos.passCurso,

                                        listIdiomas: this.state.listIdiomas,
                                        listCompetencia: this.state.listCompetencia,
                                        listProyectos: this.state.listProyectos,
                                        listReferenciaLaboral: this.state.listReferenciaLaboral,
                                        listReferenciaPersonal: this.state.listReferenciaPersonal
                                }
                            }                            
                        }
                        
                    }
                    >
                        Finalizar
                    </Link> */}
                </div>
            </div>
        );
    }

}