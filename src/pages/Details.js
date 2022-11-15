import React from 'react';
import styled from 'styled-components';

function Details() {
  return (
    <Main>
      <div className='background'></div>
      <img className='logo' src="./images/swiper/andor-logo.png" alt="Logo Star Wars Andor" />
      <span>Ciencia ficción, Espionaje, Acción y Aventura</span>
    </Main>
  );
}

const Main = styled.main`
  padding: 0 calc(3.5vw + 24px);
    .logo{
        margin-top: 3.5rem;
        max-width: 341px;
        min-width: 100px;
        width: 35vw;
    }
  .background {
    content: '';
    position: absolute;
    background: url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DB0D900B8934FEEAF8F71E3479331078EBB034A995ED016D93E319336309F3D/scale?width=1440&aspectRatio=1.78&format=jpeg)
      50% / cover no-repeat fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
  }
`;

export default Details;
