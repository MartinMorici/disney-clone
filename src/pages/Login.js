import React from 'react';

import styled from 'styled-components';
function Login() {


  

  return (
    <Main>
      <div className='img-bg'></div>
      <div className='color-bg'></div>
      <div className='img-bg-login'></div>
      <section>
        <div className='hero'>
          <img className='logo' src='./images/logo.svg' alt='Logo' />
          <h1>Tus historias favoritas, todas en un mismo lugar.</h1>
          <div className='suscribite'>
            <div className='col'>
              <img src='./images/star-disney-combo.png' alt='Star Disney Combo' />
              <button className='boton'>SUSCRIBITE AHORA</button>
            </div>
            <div className='col'>
              <img src='./images/star-disney-starz.png' alt='Star Disney Starz Combo' />
              <button className='boton'>SUSCRIBITE AHORA</button>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
}

const Main = styled.main`
  width: 50%;
  max-width: 640px;
  margin-top: 5%;
  margin-left: 5.6vw;

  @media (max-width: 1100px) {
    max-width: 100%;
    width: 100%;
    margin-left: 0;

    .hero {
      max-width: 640px;
      margin: 0 auto;
      padding-top: 50vw;
    }
  }

  @media (max-width: 700px) {
    .suscribite {
      flex-direction: column;
    }

    .hero {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  h1 {
    margin-top: 0.8rem;
    text-align: center;
    font-size: 28px;
    line-height: 38px;
    font-weight: 600;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
  }
  .img-bg {
    background: url('../images/login-bg.jpg');
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: '';
    object-fit: cover;
    @media (max-width: 1100px) {
      opacity: 0;
    }
  }
  .img-bg-login {
    background: url('../images/login-bg-sm.jpg');
    background-position: top;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: '';
    object-fit: cover;
    opacity: 0;
    @media (max-width: 1100px) {
      opacity: 1;
    }
  }

  .color-bg {
    background-color: #040714;
    background-size: 100%;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    content: '';
    object-fit: cover;
  }

  .logo {
    max-width: 360px;
    margin: 0 auto;
    display: block;
  }
  .suscribite {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1.5rem;
    .col {
      flex: calc(50% - 12px);
      height: 100%;
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 80%;
      }
    }
  }

  .boton {
    background: #6421ff;
    height: 60px;
    max-width: 360px;
    padding: 16.5px 24px;
    color: #f9f9f9;
    cursor: pointer;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 1px;
    transition: all 0.2s ease 0s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export default Login;
