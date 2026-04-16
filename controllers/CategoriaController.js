import Categoria from "../models/Categoria.js";

const CategoriaController = {
  create: async (req, res) => {
    try {
      const categoria = await Categoria.create(req.body);
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const categorias = await Categoria.findAll({
        include: [
          {
            association: "produtos"
          }
        ]
      });

      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id, {
        include: [
          {
            association: "produtos"
          }
        ]
      });

      if (!categoria) {
        return res.status(404).json({ error: "Categoria nao encontrada" });
      }

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (!categoria) {
        return res.status(404).json({ error: "Categoria nao encontrada" });
      }

      await categoria.update(req.body);

      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (!categoria) {
        return res.status(404).json({ error: "Categoria nao encontrada" });
      }

      await categoria.destroy();

      return res.status(200).json({ message: "Categoria excluida com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  restore: async (req, res) => {
    try {
      const categoria = await Categoria.findByPk(req.params.id, {
        paranoid: false
      });

      if (!categoria) {
        return res.status(404).json({ error: "Categoria nao encontrada" });
      }

      await categoria.restore();

      return res.status(200).json({ message: "Categoria restaurada com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default CategoriaController;