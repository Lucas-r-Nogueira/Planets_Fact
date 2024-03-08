import React,{useState} from 'react';
import styles from "./Header.module.css";

export default function Header({ numberPlanet }) {

  const handleClick = (numeroPlaneta) => {
    numberPlanet(numeroPlaneta);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container__header}>
        <div className={styles.container__header_logo}>
          <h1>The Planets</h1>
        </div>
          <div className={styles.burger__icon} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        <div className={`${styles.container__header_nav} ${isOpen ? 'open' : ''}`}>
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
