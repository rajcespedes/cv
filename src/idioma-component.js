import {React, Component} from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default class IdiomaComponent extends Component {

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <label>{this.props.idioma}</label>
                    </div>
                    <div className="col">
                        <label>{this.props.idiomaLevel == 1 ? 'Bajo' :
                        this.props.idiomaLevel == 2 ? 'Medio' :
                        this.props.idiomaLevel == 3 ? 'Alto' : ''}</label>
                    </div>
                </div>
            </div>
        );
    }

}