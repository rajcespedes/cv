import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Demografico } from "../models/demografico";


export const User = new sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true
    }
);


User.hasMany(Demografico,{
    foreignKey: "userId",
    sourceKey: "id"
});

Demografico.belongsTo(User,{
    foreignKey: "userId",
    targetKey: "id"
});

