import React, { useState } from 'react';


const newExperiencia = () => {


    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Experiencia</h1>
                    <label>Tipo de experiencia</label>

                    <input type="radio"
                    name="tipoExperiencia" 
                    value="laboral"/> Laboral

                    <input type="radio"
                    name="tipoExperiencia" 
                    value="voluntariado"/> Voluntariado

                    <input type="radio"
                    name="tipoExperiencia" 
                    value="pasantia"/> Pasantía

                    <input type="text"
                    placeholder='Puesto'
                    name='puesto'
                    />

                    <input type="text"
                    placeholder='Empresa'
                    name='empresa'
                    />

                    <input type="text"
                    placeholder='Área/Sector/Departamento'
                    name='area'
                    />

                </div>
            </div>
        </div>
    )
}

export default newExperiencia;
