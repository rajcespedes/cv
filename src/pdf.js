import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import React from "react";
import Resumen from "./resumen";


const onClick = ()=> {
    const strings = renderToString(<Resumen />);
    const printDoc = new jsPDF('p','mm','A4');
    printDoc.fromHTML(strings);
    printDoc.save('Export.pdf');
    
}


const Pdf = () => {
   

    return(
        <div>
            <button onClick={onClick}>Print</button>
        </div>
    );
}


export default Pdf;
