import Pedido from "../models/Pedido.js";

const PedidoController = {

    create: async (req, res) => {
    try {
        const pedido = await Pedido.create(req.body);
        return res.status(201).json(pedido);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    },

    findAll: async (req, res) => {
    try {
        const pedidos = await Pedido.findAll({
        include: [
            { association: "entrega" },
            { association: "avaliacoes" }
        ]
        });

        return res.status(200).json(pedidos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    },

    findById: async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id, {
        include: [
            { association: "entrega" },
            { association: "avaliacoes" }
        ]
        });

        if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" });
        }

        return res.status(200).json(pedido);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    }

};

export default PedidoController;