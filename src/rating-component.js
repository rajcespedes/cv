import Rating from '@material-ui/lab/Rating';
import React from 'react';

const idiomaRatings = {
    1: 'Bajo',
    2: 'Medio',
    3: 'Alto'        
};

export default function LanguageRating() {

    const [value] = React.useState(1);
    const [hover, setHover] = React.useState(-1);

    return(
        <div>
            <Rating 
            onChangeActive={ (event,newHover) => setHover(newHover)}
            />
            {idiomaRatings[ hover !== 1 ? hover: idiomaRatings]}
        </div>
    );

}