import Sequelize from "sequelize";


export const sequelize = new Sequelize(
    "cv",
    "postgres",
    "psswrd",
    {
        host: "Localhost",
        dialect: "postgres"
    }
);