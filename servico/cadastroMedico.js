import pool from "./conexao.js";

export async function apagaMedicoPorNome(nome) {
    const conexao = await pool.getConnection();
 
    try {
        const resposta = await conexao.query("DELETE FROM medicos WHERE LOWER(nome) = ?", [nome.toLowerCase()]);

        conexao.release();
 
        return resposta;

    } catch (erro) {
        conexao.release();
        throw erro;
    }
 }