import React, { useState } from 'react';
import styles from './Loja.module.css';       // CSS da página Loja (pedido)
import appStyles from './App.module.css';     // CSS do header (da página principal)

function HeaderLoja() {
  return (
    <header className={appStyles.header}>
      <div className={appStyles.logo}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
          alt="Logo EcoDecora"
          className={appStyles.logoImage}
        />
        <h1>EcoDecora</h1>
      </div>
    </header>
  );
}

const precoUnitario = 29.9;

function Loja() {
  const [quantidade, setQuantidade] = useState(1);

  const handleQuantidadeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1) {
      setQuantidade(val);
    }
  };

  const total = (precoUnitario * quantidade).toFixed(2).replace('.', ',');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido enviado:\nKit EcoDecora\nQuantidade: ${quantidade}\nTotal: R$ ${total}`);
    setQuantidade(1);
  };

  return (
    <>
      <HeaderLoja />

      <div className={styles.pedidoContainer}>
        <h2 className={styles.titulo}>Faça seu pedido</h2>

        <div className={styles.produtoInfo}>
          <img
            src={`${process.env.PUBLIC_URL}/images/jardim-aromatizado-produto-principal.png`}
            alt="Kit EcoDecora"
            className={styles.produtoFoto}
          />
          <div className={styles.produtoNome}>Kit EcoDecora</div>
          <div className={styles.produtoPreco}>R$ 29,90 cada</div>
        </div>

        <form className={styles.pedidoForm} onSubmit={handleSubmit}>
          <label>
            Quantidade:
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={handleQuantidadeChange}
              className={styles.inputQuantidade}
            />
          </label>

          <div className={styles.valorTotal}>Total: R$ {total}</div>

          <button type="submit" className={styles.botaoEnviar}>
            Enviar Pedido
          </button>
        </form>

        <div className={styles.voltarContainer}>
          <a href="/FeiraEmpreendedora-EcoDecora/" className={styles.linkVoltar}>
            Voltar para o site
          </a>
        </div>
      </div>
    </>
  );
}

export default Loja;


