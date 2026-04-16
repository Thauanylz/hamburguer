import Avaliacao from "../models/Avaliacao.js";

const AvaliacaoController = {

    create: async (req, res) => {
        try {
            const avaliacao = await Avaliacao.create(req.body);
            res.status(201).json(avaliacao);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();
            res.status(200).json(avaliacoes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};

export default AvaliacaoController;