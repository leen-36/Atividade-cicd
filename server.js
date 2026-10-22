
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Pipeline CI/CD funcionando!");
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});

module.exports = app;
