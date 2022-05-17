import {React, Component} from 'react';
import languages from './languages';
import ReactStars from 'react-rating-stars-component';
import IdiomasComponent from './idioma-component';
import ReferenciaComponent from './referencia-component';
// import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { star } from '@fortawesome/fontawesome-svg-core';
// import ProyectoComponent from './proyecto-component';
import { Link } from 'react-router-dom';
// import Competencia from './agrega-competencia';
// import { CropLandscapeOutlined } from '@material-ui/icons';

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
            idiomaLevel: [],
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
            listReferenciaPersonal: [],
            languageSelect: ['Bajo','Medio','Alto']
        }

    }

    componentDidMount(){
        // console.log(this.props.location.state.passDatos);
        // console.log('validando ', this.props.location.state.passDatos.nombres);
    }

    ratingChanged(e){
        this.setState({
            idiomaLevel: e.target.value
        });
        
    }

    onChangeIdioma(e){
        this.setState({
            idiomaSeleccionado: e.target.value
        });
    }

    addIdioma(e){

        if (this.state.idiomaSeleccionado != 'Selected') {

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
            counter: this.state.counter + 1,
            idiomaSeleccionado: 'selected',
            idiomaLevel: 'selected'
        });
       
        }

        else {
            alert('Idioma no puede estar en blanco');
        }

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
        });

    }

    onChangeTipoReferencia(e){
        this.setState({
            tipoReferencia: e.target.value
        });        
    }

    addCompetencia(e){

        e.preventDefault();

        if ( e.target.value != '') { 

        var competenciaArray = this.state.competenciaList;

        var listCompetenciaArray = this.state.listCompetencia;

        competenciaArray.unshift(
            this.state.competencia
        );

        // listCompetenciaArray.unshift(this.state.competencia);

        this.setState({
            // competenciaList: competenciaArray,
            listCompetencia: competenciaArray,
            counter: this.state.counter + 1,
            competencia: ''
        });   
    } else {
        alert('No puede agregar competencia en blanco');
    }     

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

    addProyecto(){
        
        var proyectoArray = this.state.proyectosList;

        var listProyectosArray = this.state.listProyectos;

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

        console.log(this.state.listProyectos.map(e => e.listDescripcionProyecto));

        this.setState({
            nombreProyecto: '',

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

        this.setState({
            nombre:'',
            puesto:'',
            numero:'',
            finProyecto: '',
            inicioProyecto: ''
        });
      
    }

    clickCompetencia(e){
        console.log(e);
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                      <h1>Competencias</h1>  
                      <input placeholder='Competencia' value={this.state.competencia} type="text" onChange={this.onChangeCompetencia} /> 
                      <button className="ml-5 btn btn-info btn-sm" onClick={this.addCompetencia}
                      value={this.state.competencia}>Agregar habilidad</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            {this.state.competenciaList.map( e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h1>Idiomas</h1>
                    </div>
                </div>
                <div className='row'>
                <div className="col">
                    <h3>Idioma</h3>
                        <select onChange={this.onChangeIdioma}>
                            <option selected={ this.state.idiomaSeleccionado === 'selected' ? 'selected' : ''}>Seleccione</option>
                            {this.state.idiomas.map( e => <option value={e}>{e}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <h3>Nivel</h3>

                        <select onChange={this.ratingChanged}>
                            <option value="Seleccione" 
                            selected={this.state.idiomaLevel == 'selected' ? 'selected' : ''} >Seleccione</option>
                            {this.state.languageSelect.map( e => <option key={e} value={e}> {e}</option>)}
                        </select>
                    </div>
                    <div className="col d-flex align-items-center">
                        <button className="ml-5 btn btn-info btn-sm" onClick={this.addIdioma}>Agregar idioma</button>
                    </div>
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
                        <input type="text" placeholder='Nombre del proyecto' 
                        value={this.state.nombreProyecto}
                        onChange={this.onChangeNombreProyecto}/>
                    </div>
                </div>
                <div className="row  mb-1">
                    <div className="col-2">
                        <textarea placeholder="Descripcion/Impacto" 
                        // value={this.state.descripcionProyecto}
                        onChange={this.onChangeDescripcionProyecto}></textarea> 
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input type="date" 
                        // value={this.state.inicioProyecto}
                        onChange={this.onChangeInicioProyecto} />
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input type="date" 
                        // value={this.state.finProyecto}
                        onChange={this.onChangeFinProyecto}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <button className="ml-5 btn btn-info btn-sm" onClick={this.addProyecto}>Agregar proyecto</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {/* {this.state.listProyectos.length > 0 ? this.state.listProyectos.map(e => 
                             <li>{e.listDescripcionProyecto}<li/> ): ''} */}
                             {this.state.listProyectos.map( e => 
                             <div>
                                 <h3>{e.listNombreProyecto}</h3>
                                 <p>{e.listDescripcionProyecto}</p>
                                 <p> <strong>Fecha inicio:</strong> {e.listFechaInicioProyecto}</p>
                                 <p><strong>Fecha fin:</strong> {e.listFechaFinProyecto}</p>
                             </div>
                             )}
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
                        <input type="text" placeholder='Nombre' 
                        value={this.state.nombre} onChange={this.onChangeNombre}/>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-2">
                        <input type="text" placeholder='Número' 
                        value={this.state.numero} onChange={this.onChangeNumero}/>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input placeholder='Puesto o Relación' type="text" 
                        value={this.state.puesto}
                        onChange={this.onChangePuesto}/>
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
                     <Link 
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
                    </Link> 
                </div>
            </div>
        );
    }

}