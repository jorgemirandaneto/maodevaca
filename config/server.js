const port = process.env.PORT || 4000
const express = require('express');
const server = express();
require("dotenv-safe").config();


server.listen(port, function(){
    console.log(`Aplicacao rodando na porta ${port}`)
})