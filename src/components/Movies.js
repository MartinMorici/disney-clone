import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Section>
      <div>
        <h4>Recomendaciones para ti</h4>
        <div className='peliculas'>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC0013FDCFB89243B2E30AD672976142B2520FCD8285FB12FF71FBFE18E6A9B8/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='The Spectacular Spider-Man'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A863D3455F8901C38D59AC184FE38C8ED85140D890A077E48DA0EBD464940FB6/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Logan'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/25E1B31CF02D84005A95BB23464FDDA941F63637B22892C48B4D6C6734F0CD34/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Deadpool 2'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/57567A4269EBED5DA2B42FE2BFD45AF1973BE5EB37D214C60041957FA481C3C5/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Guardianes de la Galaxia'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C9A38B17830BF1BCB4F069F4EF17C7316AAF10861B2EBE906583FE5CEC5960DB/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'
            alt='Soul'
          />
        </div>
      </div>

      <div>
        <h4>Películas Live Action</h4>
        <div className='peliculas'>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/014EB7512A273B779CEA4D6DB681731FD72F7F6755AED5A2035D116F60874A03/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Jungle Cruise'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BEAA53399C0AF53B142456108DAF30B58D99DFB516AA4D2E86DF41A4AB1C2E3E/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal'
            alt='Abracadabra 2'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C39070BDC03CB1AFC4B9EFDFEC8807961F4DDEF220FF9C417B7C7688DFF82233/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Malefica'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32FE39BDFA7CA19E92520D094F5B9E3443FD537E0A4ABB48FE40711E02EAA6E4/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Cruella'
          />
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/04C5D9FA3B5F34F09CBE6709C3E3EE69C76A0E2D4EB9B16808047FAF898AF1EB/scale?width=400&aspectRatio=1.78&format=jpeg'
            alt='Narnia'
          />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
margin-bottom: 3rem;
  h4 {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 0.11px;
    line-height: 1.4;
  }

  .peliculas {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1.3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      outline: 4px solid rgba(255, 255, 255, 0);
      outline-offset: -4px;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;

      &:hover {
        outline: 4px solid rgba(255, 255, 255, 0.4);
        outline-offset: -4px;
        transform: scale(1.05);
      }
    }
  }
`;

export default Movies;
