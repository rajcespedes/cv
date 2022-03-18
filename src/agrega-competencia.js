import React, {useState} from "react";
import ReactStars from 'react-rating-stars-component';


const Competencia = (props) => {

    const [competencia, setCompetencia] = useState('');

    const ratingChanged = (e) => {
        this.setState({
            idiomaLevel: e
        });
    }

    const addIdioma = (e) => {
        e.preventDefault();

        this.setState({
            addIdioma: e
        });

        console.log(this.state.idiomaLevel, this.state.addIdioma);
    }

    const onChangeCompetencia = (e) => {
        // console.log(e.target.value);
        setCompetencia({
            competencia: e.target.value
        });
    }

    const addCompetencia = e => {

            e.preventDefault();

            var competenciaArray = props.competenciaList;
    
            // var listCompetenciaArray = this.state.listCompetencia;
           
            competenciaArray.unshift(
                this.state.competencia
            );
    
            // listCompetenciaArray.unshift(this.state.competencia);
    
            this.setState({
                competenciaList: competenciaArray,
                listCompetencia: competenciaArray,
                counter: props.counter + 1
            });
    
        }

    
        return(
            <div>
                <form onSubmit={addCompetencia}>
                <div className='row'>
                    <div className='col'>
                      <h1>Competencias</h1>  
                      <input placeholder='Competencia' type="text" onChange={onChangeCompetencia} /> 
                      <button className="ml-5 btn btn-info btn-sm" type="submit">Agregar habilidad</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            {props.competenciasList.map( e => <li key={e}>{e}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Idiomas</h3>
                        <select>
                            <option>Seleccione</option>
                            {props.idiomas.map( e => <option value={e}>{e}</option>)}
                        </select>
                    </div>
                    <div className="col">
                        <h3>Nivel</h3>
                        <ReactStars 
                        count={3}
                        size={40}
                        onChange={ratingChanged}
                        />
                    </div>
                    <div className="col d-flex align-items-end">
                        {props.idiomaLevel == 1 ? <label>Bajo</label> : 
                        props.idiomaLevel == 2 ? <label>Medio</label> : 
                        props.idiomaLevel == 3 ? <label>Alto</label> : '' }
                    </div>
                    <div className="col d-flex align-items-center">
                        <button className="ml-5 btn btn-info btn-sm" onClick={addIdioma}>Agregar idioma</button>
                    </div>
                </form>
                {this.state.competencia}
            </div>
        )
    }


export default Competencia;