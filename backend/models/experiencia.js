import sequelize from "../database/database";
import { DataTypes } from "sequelize";
import { Educacion } from "../models/educacion";


export const Experiencia = new sequelize.define(
    "experience",
    {
    id: {
        type: DataTypes.INTEGER
    },
    puesto: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    empresa: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    area: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    },
    fechaIngreso: {
        type: DataTypes.ARRAY(DataTypes.DATE)
    },
    fechaSalida: {
        type: DataTypes.ARRAY(DataTypes.DATE)
    },
    flagId: {
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: true
    }
);


Experiencia.hasMany(Educacion,
    {
        foreignKey: "experienciaId",
        sourceKey: "id"
    });

Educacion.belongsTo(Educacion,{
    foreignKey: "educacionId",
    targetKey: "id"
});