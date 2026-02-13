import React from 'react';
import MapaSP from '../components/mapa-sp';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Mapa Interativo de São Paulo</h1>
      
      {/* Container para controlar o tamanho do mapa */}
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        background: '#f9f9f9'
      }}>
        <MapaSP />
      </div>

      <p>Passe o mouse sobre os distritos para explorar.</p>
    </div>
  );
}

export default Home;