import { React, Component } from 'react';
import EducacionElement from './educacion-element';

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
            educacion: ['Formal','Continuada'],
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
            curso: []
        }

    }

    onChangeTipoEducacion(e){
        this.setState({
            tipoEducacion: e.target.value
        });
        
    }

    onChangeEducacion(e){
        
        if(e.target.value == 'Formal'){
            this.setState({
                tipo: 
                    <div>
                        <input type="radio" name="tipoEducacion" value="bachiller"/> Bachiller
                        <input type="radio" name="tipoEducacion" value="tecnico"/> Técnico
                        <input type="radio" name="tipoEducacion" value="certificacion"/> Certificación
                        <input type="radio" name="tipoEducacion" value="grado"/> Grado
                        <input type="radio" name="tipoEducacion" value="especialidad"/> Especialidad
                        <input type="radio" name="tipoEducacion" value="master"/> Máster
                        <input type="radio" name="tipoEducacion" value="doctorado"/> Doctorado
                    </div>
            });
        } else if (e.target.value == 'Continuada') {
            this.setState({
                tipo:                 
                    <div>
                        <input type="radio" name="tipoEducacion" value="curso"/> Curso
                        <input type="radio" name="tipoEducacion" value="taller"/> Taller
                        <input type="radio" name="tipoEducacion" value="diplomado"/> Diplomado
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

        if(this.state.tipoEducacion === 'grado') {

            var educacionArray = this.state.educacionList;

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

            this.setState({
                educacionList: educacionArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'maestria') {
            
            var maestriaArray = this.state.maestria;

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

            this.setState({
                maestria: maestriaArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'especialidad') {
            
            var especialidadArray = this.state.especialidad;

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

            this.setState({
                especialidad: especialidadArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'doctorado') {
            
            var doctoradoArray = this.state.doctorado;

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

            this.setState({
                doctorado: doctoradoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'certificacion') {

            var certificacionArray = this.state.certificacion;

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

            this.setState({
                certificacion: certificacionArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'tecnico') {

            var tecnicoArray = this.state.tecnico;

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

            this.setState({
                tecnico: tecnicoArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'bachiller') {

            var bachillerArray = this.state.bachiller;

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

            this.setState({
                bachiller: bachillerArray,
                counter: this.state.counter + 1
            });

        } else if (this.state.tipoEducacion === 'diplomado') {

            var diplomadoArray = this.state.diplomado;

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

            this.setState({
                diplomado: diplomadoArray
            });

        } else if (this.state.tipoEducacion == 'curso') {

            var cursoArray = this.state.curso;

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

            this.setState({
                curso: cursoArray,
                counter: this.state.counter + 1
            });

        }
        else {

            var tallerArray = this.state.taller;

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

            this.setState({
                taller: tallerArray,
                counter: this.state.counter + 1
            });
        }
       
    }  
    

    render() {
        return(
            <div>
                <div className='row'>
                    <div className='col'>
                        <h1>Educación</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Tipo de educación</label>                       
                        <select onChange={this.onChangeEducacion}>
                            <option>Seleccione</option>
                            {this.state.educacion.map( e => <option key={e}>{e}</option>)}
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
                        <label>Nombre título</label>
                        <input type="text" name='titulo' onChange={this.onChangeTitulo} />
                    </div>
                    <div className="col">
                        <label>Institución</label>
                        <input type="text" name='institucion' onChange={this.onChangeInstitucion} />
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
                        <button className="btn btn-info" onClick={this.addEducacion} >Agregar</button>
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
            </div>
        );

    }

}