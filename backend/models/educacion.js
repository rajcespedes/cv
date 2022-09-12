import sequelize from "sequelize";
import { DataTypes } from "sequelize";

import { Competencia } from "../database/competencia";


export const Educacion = new sequelize.define(
    "educacion",
    {
        educacion: {
            type: DataTypes.INTEGER
        },
        tipoEducacion: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        subtipoEducacion: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
        titulo: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
    },
    {
        timestamp: true
    }
);


Educacion.hasMany(Competencia,{
    foreignKey: "educacionId",
    sourceKey: "id"
});

Competencia.belongsTo(
    Educacion,
    {
        foreignKey: "educacionId",
        targetKey: "id"
    }
);