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

      <Profile>
        <span>kuchau</span>
        <img src='' alt='' />
      </Profile>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  background-color: #090b13;
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
      padding: 0 18px;

      span {
        margin-left: 0.5rem;
        font-weight: 600;
        padding-bottom: 1px;
      }
      img {
        width: 20px;
      }
    }
  }
`;

const Profile = styled.div`
  margin-left: auto;
  font-size: 15px;
`;

export default Navbar;
