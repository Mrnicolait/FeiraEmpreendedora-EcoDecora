import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="/images/logo.jpeg"
            alt="Logo EcoDecora"
            className={styles.logoImage}
          />
          <h1>EcoDecora</h1>
        </div>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#produto">Produto</a>
          <a href="#sustentabilidade">Sustentabilidade</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Paralax */}
      <div
        className={styles.bgimage}
        style={{ backgroundImage: "url('/images/Scene 6.jpg')" }}
      ></div>

      {/* Hero Section */}
      <section className={styles.hero} id="sobre">
        <div>
          <h2>Decoração Sustentável e Bem-Estar</h2>
          <p>
            Produtos artesanais que unem design inovador, aromaterapia e sustentabilidade para transformar seu ambiente.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => setShowVideoModal(true)}
          >
            Conheça a EcoDecora
          </button>
        </div>
        <div>
          <img
            src="/images/Scene 5.jpg"
            alt="Kit Velas Suculentas"
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        </div>
      </section>

       {/* Modal de Vídeo */}
       {showVideoModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowVideoModal(false)}
            >
              ×
            </button>
            <video
              controls
              autoPlay
              className={styles.modalVideo}
              src="/videos/apresentacao-ecodecora.mp4"
            >
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      )}

      {/* Missão, Visão e Valores */}
      <section className={styles.features} id="missao">
        <div className={styles.featureCard}>
          <h3>Missão</h3>
          <p>
            Oferecer produtos decorativos sustentáveis que unem beleza, aroma e consciência ambiental, proporcionando bem-estar aos clientes.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>Visão</h3>
          <p>
            Ser referência em decoração sustentável e inovadora, reconhecida pela qualidade e responsabilidade ambiental.
          </p>
        </div>
        <div className={styles.featureCard}>
          <h3>Valores</h3>
          <p>
            Sustentabilidade, inovação, qualidade, respeito ao meio ambiente e compromisso com o cliente.
          </p>
        </div>
      </section>

      {/* Produto Destaque */}
      <section className={styles.sustainability} id="produto">
        <h2>Produto Destaque</h2>
        <p>
          Kit de velas aromáticas artesanais em formato de suculentas, plantadas em vasinhos de gesso reciclável, com embalagem e etiquetas em papel kraft com informações e dicas.
        </p>
        <img
          src="/images/Jardim Aromatizado - produto principal.png"
          alt="Kit Velas Suculentas"
          className={styles.produtoDestaque}
        />
      </section>

      {/* Sustentabilidade */}
      <section className={styles.features} id="sustentabilidade">
        <div className={styles.featureCard}>
          <h3>Materiais Sustentáveis</h3>
          <p>Vasinhos de gesso reciclável, biodegradáveis e reutilizáveis.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Embalagens Ecológicas</h3>
          <p>Embalagens e etiquetas em papel kraft reciclável.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Compromisso Ambiental</h3>
          <p>Uso de fornecedores locais e materiais de baixo impacto para minimizar a pegada ambiental.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="contato">
        <p>© 2025 EcoDecora. Todos os direitos reservados.</p>
        <p>Contato: contato@ecodecora.com | (51) 99472-4741</p>
      </footer>

     
    </div>
  );
}

export default App;




