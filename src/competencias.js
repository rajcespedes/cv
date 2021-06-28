import {React, Component} from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import languages from './languages';
import ReactStars from 'react-rating-stars-component';
import IdiomasComponent from './idioma-component';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ReferenciaComponent from './referencia-component';


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

        this.state = {
            competenciaList: [],
            competencia: '',
            counter: 0,
            idiomas: languages,
            idiomaLevel: 0,
            idiomasList: [],
            idiomaSeleccionado: '',
            referencia: ['Personal','Laboral'],
            tipoReferencia: '',
            nombre: '',
            puesto: '',
            numero: '',
            referenciaList: [],
            referenciaPersonalList: []
        }

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

        idiomasArray.push(
            <IdiomasComponent 
            key={this.state.counter}
            idioma={this.state.idiomaSeleccionado}
            idiomaLevel={this.state.idiomaLevel}
            />
        );

        this.setState({
            idiomasList: idiomasArray,
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
        var competenciaArray = this.state.competenciaList;
        
        competenciaArray.unshift(
            this.state.competencia
        );

        this.setState({
            competenciaList: competenciaArray,
            counter: this.state.counter + 1
        });

    }

    addReferencia(e){

        console.log(this.state.tipoReferencia);

        if(this.state.tipoReferencia == 'Laboral') {

            var referenciaArray = this.state.referenciaList;

            referenciaArray.unshift(
                <ReferenciaComponent 
                    key={'k' + this.state.count + 1}
                    nombre={this.state.nombre}
                    puesto={this.state.puesto}
                    numero={this.state.numero}
                    tipoReferencia={this.state.tipoReferencia}
                />            
            );

        this.setState({
            referenciaList: referenciaArray,
            counter: this.state.counter + 1
        });

        } else {
            var referenciaPersonalArray = this.state.referenciaPersonalList;

            referenciaPersonalArray.unshift(
                <ReferenciaComponent 
                    key={'l' + this.state.count + 1}
                    nombre={this.state.nombre}
                    puesto={this.state.puesto}
                    numero={this.state.numero}
                    tipoReferencia={this.state.tipoReferencia}
                />            
            );

        this.setState({
            referenciaPersonalList: referenciaPersonalArray,
            counter: this.state.counter + 1
        });
        }

        
    }

    render() {
        return(
            <div>
                <div className='row'>
                    <div className='col'>
                      <h1>Competencias</h1>  
                      <input placeholder='Competencia' type="text" onChange={this.onChangeCompetencia} /> 
                      <label className="ml-3">Agregar habilidad</label> <AddCircleOutlineRoundedIcon fontSize='medium' onClick={this.addCompetencia}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            {this.state.competenciaList.map( e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Idiomas</h3>
                        <select onChange={this.onChangeIdioma}>
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
                        <label>Agregar idioma</label> <AddCircleOutlineRoundedIcon fontSize='medium' onClick={this.addIdioma}/>
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
                        <input placeholder='Nombre del proyecto' />
                    </div>
                </div>
                <div className="row  mb-1">
                    <div className="col-2">
                        <textarea placeholder="Descripcion/Impacto"></textarea> 
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input placeholder="Tiempo de ejecución" />
                    </div>
                    <div className="col-2">
                        <label>Agregar</label> <AddCircleOutlineRoundedIcon fontSize='medium'/>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input placeholder="Tiempo de ejecución" />
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
                        <input placeholder='Nombre' onChange={this.onChangeNombre}/>
                    </div>
                    <div className="col-2">
                        <input placeholder='Número' onChange={this.onChangeNumero}/>
                    </div>
                    <div className="col-2 d-flex align-items-end">
                        <div>
                            <label>Agregar referencia</label> <AddCircleOutlineRoundedIcon onClick={this.addReferencia} fontSize='medium'/>
                        </div>
                    </div>
                </div>
                <div className="row  mb-2">
                    <div className="col-2">
                        <input placeholder='Puesto o Relación' onChange={this.onChangePuesto}/>
                    </div>
                </div>
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
            </div>
        );
    }

}