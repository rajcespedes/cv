import React, {Component} from "react";
// import Resumen from "./resumen";
import Prueba from "./prueba";
import { PDFViewer } from "@react-pdf/renderer";



function Pdf() {

    
            // <div>
              
            // </div>   

    return(
        // <Pdf/>
        <PDFViewer>
            <Prueba/>
        </PDFViewer>
    );
}


export default Pdf;
