import sequelize from "../config/database.js";
import { Model, DataTypes } from "sequelize";

export default class Categoria extends Model {
    static associate(models) {
    Categoria.hasMany(models.Produto, {
        foreignKey: "categoriaId",
        as: "produtos"
    });
    }
}

Categoria.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
    sequelize,
    modelName: "Categoria",
    tableName: "categorias",
    timestamps: true,
    paranoid: true
    }
);