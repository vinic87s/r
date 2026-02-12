const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

require("dotenv-expand").expand(require("dotenv").config({ path: ".env.development" }));

/**
 * Migra dados de bairros do GeoJSON para a tabela bairros_sp com PostGIS.
 */
async function migrate() {
  const sslConfig = process.env.POSTGRES_CA
    ? { ca: process.env.POSTGRES_CA }
    : process.env.SSL_MODE === "require" || process.env.PGSSLMODE === "require" || process.env.NODE_ENV === "production";

  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: sslConfig,
  });

  try {
    await client.connect();

    await client.query(`
      CREATE EXTENSION IF NOT EXISTS postgis;
      CREATE TABLE IF NOT EXISTS bairros_sp (
        numeral_mapa INTEGER PRIMARY KEY,
        nome VARCHAR(100),
        zona VARCHAR(2),
        geom GEOMETRY(Point, 4326)
      );
    `);

    const geojsonPath = path.join(__dirname, "..", "..", "..", "..", "x.geojson");
    const geojson = JSON.parse(fs.readFileSync(geojsonPath, "utf8"));

    for (const feature of geojson.features) {
      const { id, nome, zona } = feature.properties;
      const [lng, lat] = feature.geometry.coordinates;

      const query = `
        INSERT INTO bairros_sp (numeral_mapa, nome, zona, geom)
        VALUES ($1, $2, $3, ST_SetSRID(ST_MakePoint($4, $5), 4326))
        ON CONFLICT (numeral_mapa) DO UPDATE 
        SET nome = EXCLUDED.nome, zona = EXCLUDED.zona, geom = EXCLUDED.geom;
      `;

      await client.query(query, [id, nome, zona, lng, lat]);
    }

    console.log(`✅ Sucesso: ${geojson.features.length} bairros processados.`);
  } catch (err) {
    console.error("❌ Erro na migração:", err);
  } finally {
    await client.end();
  }
}

migrate();
