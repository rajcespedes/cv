import {React, Component} from 'react';



export default class ReferenciaComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        {this.props.tipoReferencia}
                    </div>
                    <div className="col">
                        {this.props.nombre}
                    </div>
                    <div className="col">
                        {this.props.puesto}
                    </div>
                    <div className="col">
                        {this.props.numero}
                    </div>
                </div>
            </div>
        );
    }
    
}