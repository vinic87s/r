const { Client } = require('pg');
const axios = require('axios');
require('dotenv-expand').expand(require('dotenv').config({ path: '.env.development' }));

async function registrarClima() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });

    try {
        await client.connect();

        // 1. Seleciona os bairros extraindo Lat e Long do campo GEOM
        const queryBairros = `
            SELECT 
                numeral_mapa, 
                nome, 
                ST_X(geom) as lng, 
                ST_Y(geom) as lat 
            FROM bairros_sp;
        `;
        
        const res = await client.query(queryBairros);

        for (const bairro of res.rows) {
            const { numeral_mapa, nome, lat, lng } = bairro;

            // 2. Chamada para a API Open-Meteo usando as coordenadas do banco
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,precipitation,cloud_cover&timezone=America%2FSao_Paulo`;
            
            const response = await axios.get(url);
            const dadosClima = response.data.current;

            // 3. Insere na tabela de clima
            await client.query(`
                INSERT INTO clima_bairros (bairro_id, temperatura, precipitacao, cobertura_nuvens)
                VALUES ($1, $2, $3, $4)
            `, [
                numeral_mapa, 
                dadosClima.temperature_2m, 
                dadosClima.precipitation, 
                dadosClima.cloud_cover
            ]);

            console.log(`✅ Clima registado para ${nome}`);
            
            // Pausa de 2000ms para evitar bloqueio da API (rate limit)
            await new Promise(r => setTimeout(r, 2000));
        }

    } catch (err) {
        console.error('❌ Erro no processamento:', err.message);
    } finally {
        await client.end();
    }
}

registrarClima();