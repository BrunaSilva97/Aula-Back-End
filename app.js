const express = require("express");
const app = express();
app.use(express.json());

let ALUNOS = [
    {id: 1, nome: "Adryan", curso: "BD"},
    {id: 2, nome: "Bruno", curso: "CC"},
    {id: 3, nome: "Bruna", curso: "ADS"},
    {id: 4, nome: "Victoria", curso: "SI"},
];
app.get("/",(req,res)=>{
    res.status(200).json({
        msg: "API funcionando"
    })
})

app.get("/alunos", (req, res)=>{
    res.status(200).json(ALUNOS);
})

app.get("/alunos/:valor",(req, res)=>{
    //console.log(req);
    const valor = Number(req.params.valor);
    const aluno = ALUNOS.find(aluno => aluno.id === valor)

    if(!aluno){
        return res.status(404).json({
            msg: "Aluno não encontrado."
        });
    }

    res.status(200).json(aluno)
})

app.post("/alunos/cadastrar", (req, res) => {

    const { nome, curso } = req.body;

    if (!nome || !curso) {
        return res.status(400).json({msg: "É obrigatório preencher nome e curso"});
    }

const novoId = ALUNOS.length > 0 ? ALUNOS[ALUNOS.length -1].id + 1: 1;
const novoAluno = {
    id : novoId,
    nome: nome,
    curso: curso
    }


ALUNOS.push(novoAluno);
res.status(201).json({msg: "Aluno criado com sucesso"})
});

app.put("/alunos/:valor", (req, res) => {
    const valor = Number(req.params.valor);
    const {nome,curso} = req.body;

    if(!nome || !curso){
        return res.status(400).json({
            msg: "Nome e curso são obrigatorios"
        })
    }

    const indice = ALUNOS.findIndex(aluno => aluno.id === valor);
    console.log(indice);

    if(indice === -1){
        return res.status(400).json({
            msg: "Nome e curso são obrigatorios"
        })
    }
    ALUNOS[indice] = {
        id: valor,
        nome: nome,
        curso: curso
    }
    res.status(200).json({msg: "Aluno Atualizado"})
})


const PORTA = 3000
app.listen(PORTA, ()=>{
    console.log(`Servidor rodando no http://localhost:${PORTA}`);
});