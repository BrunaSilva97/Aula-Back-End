const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "API Funcionando"
    })

})
const PORTA = 3000
app.listen(PORTA, () => {
    console.log(`Servidor rodando no htttp://localhost:${PORTA}`);
    //  console.log("Servidor rodando no htttp://localhost:" + PORTA);
    //  console.log("Servidor rodando no htttp://localhost:", PORTA);
})