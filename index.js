import express from 'express';
import cors from "cors";

import { apagaMedicoPorNome } from './servico/cadastroMedico.js';

const app = new express();

app.use(cors());
app.use(express.json());

app.delete("/medicos/:nome", async (req, res) => {
    const nome = req.params.nome;

    try {
        const resultado = await apagaMedicoPorNome(nome);
        if (resultado) {
            res.status(204).end();
        } else {
            res.status(404).send({ mensagem: "Médico não encontrado" });
        }
    } catch (erro) {
        res.status(500).send({ mensagem: "Erro ao tentar apagar o médico", erro: erro.message });
    }
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});