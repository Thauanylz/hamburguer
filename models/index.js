import sequelize from "../config/database.js";

import Categoria from "./Categoria.js";
import Produto from "./Produto.js";
import Pedido from "./Pedido.js";
import Avaliacao from "./Avaliacao.js";
import Entrega from "./Entrega.js";

const models = {
  Categoria,
  Produto,
  Pedido,
  Avaliacao,
  Entrega
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

const db = {
  sequelize,
  ...models
};

export default db;