// Carrega variáveis de ambiente do arquivo .env.development
require("dotenv").config({ path: ".env.development" });

// Configuração de ambiente para os testes Jest
// Define NODE_ENV como 'test' se não estiver definido
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "test";
}

// Você pode adicionar outras configurações de ambiente aqui
// Por exemplo:
// process.env.DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/test";
// process.env.POSTGRES_HOST = process.env.POSTGRES_HOST || "localhost";

// console.log("Jest Setup: NODE_ENV =", process.env.NODE_ENV);
