import express from 'express';
import cors from "cors";

import { apagaMedico } from './servico/cadastroMedico.js';

const app = new express();

app.use(cors());
app.use(express.json());

app.delete("/medicos/:id", async (req, res) => {
    const idMedico = req.params.id;
    try {
        const resultado = await apagaMedico(idMedico);
        if (resultado.affectedRows > 0) {
            res.status(200).send({ mensagem: "Médico apagado com sucesso." });
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