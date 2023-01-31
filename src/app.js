const express = require('express');
const path = require('path');
const app = express();


const produtoRouter = require('./routes/produtoRoutes');
const estoqueRouter = require('./routes/estoqueRoutes');
const enderecoRouter = require('./routes/enderecoRoutes')

app.use(express.json());
app.use('/produto', produtoRouter);
app.use('/estoque', estoqueRouter);
app.use('/enderecoDeEntrega', enderecoRouter);

app.use(function (err, req, res, next){

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.stauts || 500);
    res.json(err);

    console.log(err);
});

app.listen('3001', () => console.log('Servidor rodando na porta 3001'))

module.exports = app;