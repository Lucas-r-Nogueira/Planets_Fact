import React,{useState} from 'react';
import styles from "./Header.module.css";

export default function Header({ numberPlanet }) {

  const handleClick = (numeroPlaneta) => {
    toggleMenu();
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
        <div className={`${styles.container__header_nav} ${isOpen ? styles.open : styles.close}`}>
          <ul>
            <li onClick={() => handleClick(0)}>
              <a>Mercury</a>
            </li>
            <li onClick={() => handleClick(1)}>
              <a>Venus</a>
            </li>
            <li onClick={() => handleClick(2)}>
              <a>Earth</a>
            </li>
            <li onClick={() => handleClick(3)}>
              <a>Mars</a>
            </li>
            <li onClick={() => handleClick(4)}>
              <a>Jupiter</a>
            </li>
            <li onClick={() => handleClick(5)}>
              <a>Saturn</a>
            </li>
            <li onClick={() => handleClick(6)}>
              <a>Uranus</a>
            </li>
            <li onClick={() => handleClick(7)}>
              <a>Neptune</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
