import {React, Component} from 'react';

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
                        <label></label>
                    </div>
                </div>
            </div>
        );
    }

}