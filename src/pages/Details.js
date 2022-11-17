import React from 'react';
import styled from 'styled-components';

function Details() {
  return (
    <Main>
      <div className='background'></div>
      <img
        className='logo'
        src='./images/swiper/andor-logo.png'
        alt='Logo Star Wars Andor'
      />
      <span>2022 • 1 temporada</span>
      <span>Ciencia ficción, Espionaje, Acción y Aventura</span>
      <div className='botones'>
        <button className='boton play '>
          <img src='./images/play-button.svg' alt='Icono Play' />
          VER AHORA
        </button>
        <button className='boton trailer'>TRÁILER</button>
        <div className='icono add'>
          <span>+</span>
        </div>
        <img
          className='icono groupwatch'
          src='./images/group-icon.png'
          alt='GroupWatch Icono'
        />
      </div>
      <p>
        En una época llena de peligros, engaños e intrigas, Cassian Andor
        descubrirá la diferencia que puede marcar en la lucha contra el tiránico
        Imperio Galáctico. Se embarca en un camino que está destinado a
        convertirlo en un héroe rebelde.
      </p>
    </Main>
  );
}

const Main = styled.main`
  padding: 0 calc(3.5vw + 24px);

  .background {
    content: '';
    position: fixed;
    background: url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6DB0D900B8934FEEAF8F71E3479331078EBB034A995ED016D93E319336309F3D/scale?width=1440&aspectRatio=1.78&format=jpeg)
      50% / cover no-repeat;
    background-position: unset;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.4;
  }
  .filter {
    background-image: radial-gradient(
      farthest-side at 73% 21%,
      transparent,
      rgb(26, 29, 41)
    );
    position: absolute;
    inset: 0px;
    z-index: -1;
  }
  .logo {
    margin-top: 3.5rem;
    max-width: 341px;
    min-width: 100px;
    width: 35vw;
  }
  .icono {
    cursor: pointer;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in-out;
    span {
      font-size: 30px;
      color: white;
    }

    &:hover {
      background-color: #a7aba8;
    }
  }

  .add {
    font-family: auto;
    font-weight: 800;
  }

  .groupwatch {
    padding: 2px;
  }

  .botones {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .boton {
    font-weight: 600;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1.5px;
    line-height: 1.6;
    transition: all 0.2s ease-in-out;
    height: 56px;
    border-radius: 0.25rem;
    padding: 0 24px;
  }

  .play {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border: none;
    color: #0e0b14;
    margin: 0.25rem 0.75rem;
    margin-left: 0;
    &:hover {
      opacity: 0.6;
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.7rem;
    }
  }

  .trailer {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #f9f9f9;
    color: #f9f9f9;
    margin: 0.25rem 0rem;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  span {
    font-size: 12px;
    letter-spacing: -0.1px;
    display: block;
    line-height: 1.5;
  }

  p {
    font-size: 20px;
    color: #f9f9f9;
    padding-top: 1rem;
    line-height: 1.6;
    letter-spacing: -0.1px;
    max-width: 820px;
  }
`;

export default Details;