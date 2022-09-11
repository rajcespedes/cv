import { DataTypes } from "sequelize";
import Experiencia from "../../src/experiencia";
import { sequelize } from "../database/database";


export const Demografico = sequelize.define(
    "demografico",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        ocupation: {
            type: DataTypes.STRING
        },
        neighborhood: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.INTEGER
        },
        phone: {
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        license: {
            type: DataTypes.INTEGER
        },
        vehicle: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        timestamp: true
    }
);

Demografico.hasMany(Experiencia,{
    foreignKey: "demograficoId",
    sourceKey: "id"
});

Experiencia.belongsTo(Demografico, {
    foreignKey: "demograficoId",
    targetKey: "id"
});