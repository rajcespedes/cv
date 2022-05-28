import React, {Component} from "react";
import {Page, Text, View, Document, Stylesheet, PDFViewer} from '@react-pdf/renderer';
import Resumen from "./resumen";
import ToCheck from "./toCheck";

// export default class 

function Prueba() {

    return(
            <Document>
                <Page size="A4">
                    <View>
                        <ToCheck/>
                        <Text>Sección</Text>
                    </View>
                </Page>
            {/* <div></div> */}
            </Document>
    );
}

export default Prueba;