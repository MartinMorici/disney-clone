import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';
import styled from 'styled-components';
function Navbar() {
  const user = useSelector((store) => store.user);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
  }

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (user) => {
      console.log(user);
    })
  }, [])
  
 
  return (
    <>
      <Header>
        {/* {user.email && user.name ? ( */}
          <>
            <Logo src='../images/logo.svg' alt='Disney Logo' />
            <Nav className='nav'>
              <ul className='lista'>
                <Link to={'/'}>
                  <li>
                    <img src='../images/home-icon.svg' alt='Icono Home' />
                    <span className='texto'>Inicio</span>
                  </li>
                </Link>
                <li>
                  <img src='../images/search-icon.svg' alt='Icono Búsqueda' />
                  <span className='texto'>Búsqueda</span>
                </li>
                <li>
                  <img src='../images/watchlist-icon.svg' alt='Icono Home' />
                  <span className='texto'>Mi Lista</span>
                </li>
                <Link to={'/peliculas'}>
                  <li>
                    <img src='../images/movies-icon.svg' alt='Icono Home' />
                    <span className='texto'>Películas</span>
                  </li>
                </Link>
                <Link to={'/series'}>
                  <li>
                    <img src='../images/series-icon.svg' alt='Icono Home' />
                    <span className='texto'>Series</span>
                  </li>
                </Link>
              </ul>
            </Nav>
            <ProfileImg src='../images/cars.png' alt='' />
          </>
        {/* ) : (
          <BotonInicio onClick={googleSignIn} >Iniciar Sesión</BotonInicio>
        )} */}
      </Header>
      <Outlet />
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 36px;
  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;

const Logo = styled.img`
  min-width: 79px;
  height: 48px;
`;

const Nav = styled.nav`
  ul {
    margin-left: 2rem;
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
      &:hover span::after {
        transform: scaleX(1);
        opacity: 1;
      }
      span {
        position: relative;
        margin-left: 0.5rem;
        font-weight: 600;
        padding-bottom: 1px;
        &::after {
          position: absolute;
          content: '';
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
  @media screen and (max-width: 450px) {
    .lista {
      flex-wrap: wrap;
      row-gap: 0.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    .lista {
      margin-left: 0rem;
    }
  }
  @media screen and (max-width: 890px) {
    .texto {
      display: none;
    }
  }
`;
const BotonInicio = styled.div`
  margin-left: auto;
  padding: 0px 16px;
  height: 50px;
  max-width: 260px;
  /* max-width: none; */
  border: 1px solid silver;
  color: #f9f9f9;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    transition: all 0.2s ease 0s;
  }

  &:active {
    opacity: 0.7;
    transform: scale(0.97);
    transition: 0s;
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
