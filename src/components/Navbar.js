import React from 'react';
import styled from 'styled-components';

function Navbar() {
  return (
    <Header>
      <Logo src='./images/logo.svg' alt='Disney Logo' />
      <Nav>
        <ul>
          <li>
            <img src='./images/home-icon.svg' alt='Icono Home' />
            <span>Inicio</span>
          </li>
          <li>
            <img src='./images/search-icon.svg' alt='Icono Búsqueda' />
            <span>Búsqueda</span>
          </li>
          <li>
            <img src='./images/watchlist-icon.svg' alt='Icono Home' />
            <span>Mi Lista</span>
          </li>
          <li>
            <img src='./images/original-icon.svg' alt='Icono Home' />
            <span>Originales</span>
          </li>
          <li>
            <img src='./images/movies-icon.svg' alt='Icono Home' />
            <span>Películas</span>
          </li>
          <li>
            <img src='./images/series-icon.svg' alt='Icono Home' />
            <span>Series</span>
          </li>
        </ul>
      </Nav>

      <ProfileImg src='./images/cars.png' alt='' />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  /* background-color: #090b13; */
  padding: 0 36px;
`;

const Logo = styled.img`
  min-width: 79px;
  height: 48px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.42px;
      margin: 0 18px;
      cursor: pointer;
      &:hover span::after{
        transform: scaleX(1);
        opacity:1;
  
      }
      span {
        position: relative;
        margin-left: 0.5rem;
        font-weight: 600;
        padding-bottom: 1px;
        &::after{
          position: absolute;
          content: "";
          height: 2px;
          width: 100%;
          background-color: white;
          bottom: -6px;
          left: 0;
          border-radius: 0px 0px 4px 4px;
          opacity: 0;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform-origin: left center;
          
        }
      }
      img {
        width: 20px;
      }
    }
  }
`;

const ProfileImg = styled.img`
  margin-left: auto;
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #48291c;
  margin-right: 1rem;
`;

export default Navbar;
