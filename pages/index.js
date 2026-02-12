function Home() {
  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #f4e4bc;
          background-image:
            linear-gradient(
              90deg,
              rgba(139, 69, 19, 0.03) 50%,
              transparent 50%
            ),
            linear-gradient(rgba(139, 69, 19, 0.03) 50%, transparent 50%);
          background-size: 20px 20px;
          padding: 40px 20px;
          font-family: "Georgia", "Times New Roman", serif;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
          padding: 20px;
        }

        .header h1 {
          font-size: 3.5rem;
          font-weight: 400;
          letter-spacing: 2px;
          margin: 0;
          display: inline-block;
        }

        .google-text {
          display: inline-block;
        }

        .google-text span:nth-child(1) {
          color: #4285f4;
        }
        .google-text span:nth-child(2) {
          color: #ea4335;
        }
        .google-text span:nth-child(3) {
          color: #fbbc05;
        }
        .google-text span:nth-child(4) {
          color: #4285f4;
        }
        .google-text span:nth-child(5) {
          color: #34a853;
        }
        .google-text span:nth-child(6) {
          color: #ea4335;
        }

        .poem {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.3);
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          line-height: 1.8;
          font-size: 1.1rem;
          color: #3d2817;
        }

        .poem-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
          color: #5c4033;
        }

        .poem-line {
          margin-bottom: 12px;
          text-align: center;
        }

        .poem-author {
          margin-top: 30px;
          text-align: right;
          font-style: italic;
          color: #6b4e3d;
        }
      `}</style>

      <div className="container">
        <header className="header">
          <h1 className="google-text">
            <span>T</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
            <span>e</span>
            <span>!</span>
          </h1>
        </header>

        <div className="poem">
          <div className="poem-title">Soneto de Fidelidade</div>
          <div className="poem-line">De tudo, ao meu amor serei atento</div>
          <div className="poem-line">
            Antes, e com tal zelo, e sempre, e tanto
          </div>
          <div className="poem-line">Que mesmo em face do maior encanto</div>
          <div className="poem-line">Dele se encante mais meu pensamento.</div>
          <div className="poem-line" style={{ marginTop: "20px" }}></div>
          <div className="poem-line">Quero vivê-lo em cada vão momento</div>
          <div className="poem-line">
            E em seu louvor hei de espalhar meu canto
          </div>
          <div className="poem-line">E rir meu riso e derramar meu pranto</div>
          <div className="poem-line">Ao seu pesar ou seu contentamento.</div>
          <div className="poem-line" style={{ marginTop: "20px" }}></div>
          <div className="poem-line">E assim, quando mais tarde me procure</div>
          <div className="poem-line">
            Quem sabe a morte, angústia de quem vive
          </div>
          <div className="poem-line">Quem sabe a solidão, fim de quem ama</div>
          <div className="poem-line" style={{ marginTop: "20px" }}></div>
          <div className="poem-line">Eu possa me dizer do amor (que tive):</div>
          <div className="poem-line">
            Que não seja imortal, posto que é chama
          </div>
          <div className="poem-line">Mas que seja infinito enquanto dure.</div>
          <div className="poem-author">— Vinicius de Moraes</div>
        </div>
      </div>
    </>
  );
}

export default Home;
