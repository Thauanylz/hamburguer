import express from 'express';
import "./models/index.js";

import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categorias',categoriaRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/entregas', entregaRoutes);
app.use('/produtos', produtoRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
