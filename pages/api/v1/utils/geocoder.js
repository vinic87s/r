const nodeGeocoder = require('node-geocoder');
const fs = require('fs');

const geocoder = nodeGeocoder({ provider: 'openstreetmap' });

const bairros = [
  // { id: 1, nome: "Barra Funda", zona: "ZC" },
  { id: 2, nome: "Bela Vista", zona: "ZC" },
  // { id: 3, nome: "Bom Retiro", zona: "ZC" },
  // { id: 4, nome: "Brás", zona: "ZC" },
  // { id: 5, nome: "Consolação", zona: "ZC" },
  // { id: 6, nome: "Liberdade", zona: "ZC" },
  // { id: 7, nome: "Pari", zona: "ZC" },
  // { id: 8, nome: "República", zona: "ZC" },
  // { id: 9, nome: "Santa Cecília", zona: "ZC" },
  // { id: 10, nome: "Sé", zona: "ZC" },
  // { id: 11, nome: "Casa Verde", zona: "ZN" },
  // { id: 12, nome: "Jaçanã", zona: "ZN" },
  // { id: 13, nome: "Mandaqui", zona: "ZN" },
  // { id: 14, nome: "Santana", zona: "ZN" },
  // { id: 15, nome: "Tremembé", zona: "ZN" },
  // { id: 16, nome: "Tucuruvi", zona: "ZN" },
  // { id: 17, nome: "Vila Guilherme", zona: "ZN" },
  // { id: 18, nome: "Vila Maria", zona: "ZN" },
  // { id: 19, nome: "Vila Medeiros", zona: "ZN" },
  // { id: 20, nome: "Água Rasa", zona: "ZL" },
  // { id: 21, nome: "Aricanduva", zona: "ZL" },
  // { id: 22, nome: "Artur Alvim", zona: "ZL" },
  { id: 23, nome: "Belém", zona: "ZL" },
  // { id: 24, nome: "Cangaíba", zona: "ZL" },
  // { id: 25, nome: "Carrão", zona: "ZL" },
  // { id: 26, nome: "Cidade Líder", zona: "ZL" },
  // { id: 27, nome: "Cidade Tiradentes", zona: "ZL" },
  // { id: 28, nome: "Ermelino Matarazzo", zona: "ZL" },
  // { id: 29, nome: "Guianazes", zona: "ZL" },
  // { id: 30, nome: "Iguatemi", zona: "ZL" },
  // { id: 31, nome: "Itaim Paulista", zona: "ZL" },
  // { id: 32, nome: "Itaquera", zona: "ZL" },
  { id: 33, nome: "Jardim Helena", zona: "ZL" },
  { id: 34, nome: "José Bonifácio", zona: "ZL" },
  // { id: 35, nome: "Lajeado", zona: "ZL" },
  // { id: 36, nome: "Moóca", zona: "ZL" },
  // { id: 37, nome: "Parque do Carmo", zona: "ZL" },
  { id: 38, nome: "Penha", zona: "ZL" },
  { id: 39, nome: "Ponte Rasa", zona: "ZL" },
  // { id: 40, nome: "Sapopemba", zona: "ZL" },
  // { id: 41, nome: "São Lucas", zona: "ZL" },
  // { id: 42, nome: "São Mateus", zona: "ZL" },
  { id: 43, nome: "São Miguel", zona: "ZL" },
  // { id: 44, nome: "São Rafael", zona: "ZL" },
  // { id: 45, nome: "Tatuapé", zona: "ZL" },
  // { id: 46, nome: "Vila Curuçá", zona: "ZL" },
  // { id: 47, nome: "Vila Formosa", zona: "ZL" },
  // { id: 48, nome: "Vila Jacuí", zona: "ZL" },
  // { id: 49, nome: "Vila Matilde", zona: "ZL" },
  // { id: 50, nome: "Vila Prudente", zona: "ZL" },
  // { id: 51, nome: "Cambuci", zona: "ZS" },
  { id: 52, nome: "Campo Belo", zona: "ZS" },
  // { id: 53, nome: "Campo Grande", zona: "ZS" },
  // { id: 54, nome: "Campo Limpo", zona: "ZS" },
  // { id: 55, nome: "Capão Redondo", zona: "ZS" },
  // { id: 56, nome: "Cidade Ademar", zona: "ZS" },
  // { id: 57, nome: "Cidade Dutra", zona: "ZS" },
  // { id: 58, nome: "Cursino", zona: "ZS" },
  // { id: 59, nome: "Grajaú", zona: "ZS" },
  { id: 60, nome: "Ipiranga", zona: "ZS" },
  // { id: 61, nome: "Itaim Bibi", zona: "ZS" },
  // { id: 62, nome: "Jabaquara", zona: "ZS" },
  // { id: 63, nome: "Jardim Ângela", zona: "ZS" },
  // { id: 64, nome: "Jardim Paulista", zona: "ZS" },
  // { id: 65, nome: "Jardim São Luís", zona: "ZS" },
  { id: 66, nome: "Marsilac", zona: "ZS" },
  // { id: 67, nome: "Moema", zona: "ZS" },
  // { id: 68, nome: "Morumbi", zona: "ZS" },
  // { id: 69, nome: "Parelheiros", zona: "ZS" },
  // { id: 70, nome: "Pedreira", zona: "ZS" },
  { id: 71, nome: "Sacomã", zona: "ZS" },
  // { id: 72, nome: "Santo Amaro", zona: "ZS" },
  // { id: 73, nome: "Saúde", zona: "ZS" },
  // { id: 74, nome: "Socorro", zona: "ZS" },
  // { id: 75, nome: "Vila Andrade", zona: "ZS" },
  // { id: 76, nome: "Vila Mariana", zona: "ZS" },
  // { id: 77, nome: "Vila Sônia", zona: "ZS" },
  // { id: 78, nome: "Alto de Pinheiros", zona: "ZO" },
  // { id: 79, nome: "Anhanguera", zona: "ZO" },
  // { id: 80, nome: "Brasilândia", zona: "ZO" },
  { id: 81, nome: "Butantã", zona: "ZO" },
  // { id: 82, nome: "Cachoeirinha", zona: "ZO" },
  { id: 83, nome: "Freguesia do Ó", zona: "ZO" },
  // { id: 84, nome: "Jaguaré", zona: "ZO" },
  // { id: 85, nome: "Jaguaré", zona: "ZO" },
  { id: 86, nome: "Jaraguá", zona: "ZO" },
  // { id: 87, nome: "Lapa", zona: "ZO" },
  // { id: 88, nome: "Limão", zona: "ZO" },
  // { id: 89, nome: "Perdizes", zona: "ZO" },
  // { id: 90, nome: "Perus", zona: "ZO" },
  // { id: 91, nome: "Pinheiros", zona: "ZO" },
  // { id: 92, nome: "Pirituba", zona: "ZO" },
  { id: 93, nome: "Raposo Tavares", zona: "ZO" },
  { id: 94, nome: "Rio Pequeno", zona: "ZO" },
  { id: 95, nome: "São Domingos", zona: "ZO" }
  // { id: 96, nome: "Vila Leopoldina", zona: "ZO" }
];

async function gerarGeoJSON() {
  const features = [];

  for (const bairro of bairros) {
    try {
      // Buscamos especificamente em SP para evitar erros
      const res = await geocoder.geocode(`${bairro.nome}, São Paulo - SP, Brasil`);
      
      if (res.length > 0) {
        features.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [res[0].longitude, res[0].latitude] // Ordem Long, Lat
          },
          properties: {
            id: bairro.id,
            nome: bairro.nome,
            zona: bairro.zona
          }
        });
        console.log(`✅ ${bairro.nome} localizado.`);
      }
      // Pequena pausa para não ser bloqueado pelo OpenStreetMap
      await new Promise(resolve => setTimeout(resolve, 6000));
    } catch (err) {
      console.error(`❌ Erro no bairro ${bairro.nome}:`, err.message);
    }
  }

  const geojson = { type: "FeatureCollection", features };
  fs.writeFileSync('bairros_final.geojson', JSON.stringify(geojson, null, 2));
  console.log('Arquivo bairros_final.geojson gerado com sucesso!');
}

gerarGeoJSON();