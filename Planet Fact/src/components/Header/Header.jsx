import React, { useState } from 'react';
import styles from "./Header.module.css";
import 'hamburgers/dist/hamburgers.css';
import '../../assets/styles/hamburguers.css';


export default function Header({ numberPlanet }) {

  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);

  };

  const handleClick = (numeroPlaneta) => {
    numberPlanet(numeroPlaneta);
  }

  return (
    <>
      <div className={styles.container__header}>
        <div className={styles.container__header_logo}>
          <h1>The Planets</h1>
        </div>
        <div className={styles.container__header_nav}>
          <button className={`hamburger hamburger--spin ${menuAberto ? 'is-active' : ''}`} type="button" onClick={toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <ul>
            <li>
              <a onClick={() => handleClick(0)}>Mercury</a>
            </li>
            <li>
              <a onClick={() => handleClick(1)}>Venus</a>
            </li>
            <li>
              <a onClick={() => handleClick(2)}>Earth</a>
            </li>
            <li>
              <a onClick={() => handleClick(3)}>Mars</a>
            </li>
            <li>
              <a onClick={() => handleClick(4)}>Jupiter</a>
            </li>
            <li>
              <a onClick={() => handleClick(5)}>Saturn</a>
            </li>
            <li>
              <a onClick={() => handleClick(6)}>Uranus</a>
            </li>
            <li>
              <a onClick={() => handleClick(7)}>Neptune</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
