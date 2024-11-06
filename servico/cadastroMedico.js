import pool from "./conexao.js";

export async function apagaMedico(idMedico) {
    const conexao = await pool.getConnection();
 
    try {
        
        const [resposta] = await conexao.query("DELETE FROM medicos WHERE id = ?", [idMedico]); // Faltavam os colchetes em resposta para retornar o objeto correto. Os colchetes são necessários para desestruturar o array retornado pela consulta e obter o objeto de resposta correto. resposta será um array com dois elementos. Para acessar o objeto que contém os resultados da consulta, você teria que fazer algo como resposta[0]. Aqui, estamos usando a desestruturação de arrays. [resposta] O que isso faz é pegar o primeiro elemento do array retornado pela consulta e atribuí-lo à variável resposta. Isso simplifica o acesso aos dados que realmente nos interessam.

        return resposta;
        
    } catch (erro) {
        
        console.error("Erro ao tentar apagar o médico:", erro);
        throw erro;

    } finally {
        
        conexao.release();
        
    }
 }