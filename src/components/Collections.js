import React from 'react';
import styled from 'styled-components';

function Collections() {
  return (
    <Section>
      <div className='collection'>
        <img src='./images/collections/disney.png' alt='Logo Disney' />
        <video src='./videos/disney.mp4' autoPlay loop muted></video>
      </div>
      <div className='collection'>
        <img src='./images/collections/pixar.png' alt='Logo Pixar' />
        <video src='./videos/pixar.mp4' autoPlay loop muted></video>
      </div>
      <div className='collection'>
        <img src='./images/collections/marvel.png' alt='Logo Marvel' />
        <video src='./videos/marvel.mp4' autoPlay loop muted></video>
      </div>
      <div className='collection'>
        <img src='./images/collections/star-wars.png' alt='Logo Star Wars' />
        <video src='./videos/star-wars.mp4' autoPlay loop muted></video>
      </div>
      <div className='collection'>
        <img
          src='./images/collections/nat-geo.png'
          alt='Logo National Geographic'
        />
        <video src='./videos/nat-geo.mp4' autoPlay loop muted></video>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    .collection {
      width: auto;
    }
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    place-content: center;
    grid-template-columns: 0.7fr;
  }

  div {
    width: calc(20% - 20px);
    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: grid;
    place-content: center;
    border: 3px solid rgba(249, 249, 249, 0.2);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;
    position: relative;

    &:hover {
      transform: scale(1.05);
      border: 3px solid rgba(249, 249, 249, 0.7);
    }

    &:hover video {
      opacity: 1;
    }
  }

  img {
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;

    opacity: 0;
    z-index: -1;
    border-radius: 7px;
  }
`;

export default Collections;
