import {React, Component} from 'react';


export default class EducacionElement extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.titulo}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.institucion}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.props.fechaInicio ? <label className="mr-1">Inicio</label> : '' }
                        <label>{this.props.fechaInicio}</label>
                    </div>
                    <div className="col">
                        {this.props.fechaFin != 'En curso' ? <label className="mr-1">Fin</label> : '' }
                        <label>{this.props.fechaFin}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        {this.props.logro != '' ? <label className="font-weight-bold">Logros</label> : ''}
                        <ul className="list-group list-group-flush">
                            { this.props.logro ? this.props.logro.map( i => <li key={i} className='list-group-item'>{i}</li> ) : '' } 
                        </ul>
                    </div>
                </div>
            </div>

        );
    }

} 